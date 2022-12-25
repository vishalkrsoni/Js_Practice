const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 25
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5
  },
  image: {
    type: String,
    required: true
  },
  places: {
    type: String,
    required: true
  },
  // places: [{
  //   type: ObjectId,
  //   ref: 'Place',
  // }],
  isAdmin: {
    type: Boolean,
    default: false
  }
},
  { timestamps: true })

userSchema.plugin(uniqueValidator);
const User = model('user', userSchema)

module.exports = User