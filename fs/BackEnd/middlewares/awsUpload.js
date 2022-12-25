const sharp = require('sharp')
const aws = require('aws-sdk')
const multer = require('multer')
require('dotenv').config()

/* S3 Config */
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  Bucket: process.env.AWS_BUCKET
})

/* type validator */
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/bmp" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("File format should be PNG,JPG,JPEG,BMP"), false); // if validation failed then generate error
  }
}

/* limits */
const limits = { fileSize: 10240000 }

/* Multer specs */
const multerSpecs = {
  limits: limits,
  fileFilter: fileFilter
}

const uploadMulter = multer(multerSpecs).fields([{ name: 'file', maxCount: 1 }]);

const sharpify = async originalFile => {
  try {
    const image = sharp(originalFile.buffer)
    const meta = await image.metadata()
    const { format } = meta
    const config = {
      jpeg: { quality: 100 },
      webp: { quality: 100 },
      png: { quality: 100 }
    }
    const newFile = await image[format](config[format])
      .resize({ width: 150, withoutEnlargement: true })
    return newFile
  } catch (err) {
    console.log(err);
    res.status(200).json({ "response_code": 500, "message": "Sorry something unexpected happened at our server, please try after sometime" })
  }
}

const uploadToAWS = props => {
  return new Promise((resolve, reject) => {
    s3.upload(props, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

const uploader = async (id, file, type, name) => {

  return await uploadToAWS({
    Body: file,
    Bucket: process.env.AWS_BUCKET,
    ContentType: type,
    Key: `${id}/${name}`
  })
}

const deleteFromAWS = async (og, tb) => {
  const options = {
    Bucket: process.env.AWS_BUCKET,
    Delete: {
      Objects: [{ Key: og }, { Key: tb }]
    }
  }

  await s3.deleteObjects(options, (err, data) => {
    if (err) {
      console.log(err);
      res.status(200).json({
        "response_code": 500, 
        "message": "Sorry something unexpected happened at our server, please try after sometime"
      })
    }
  })
}

module.exports = {
  uploadMulter,
  uploader,
  sharpify,
  deleteFromAWS
};