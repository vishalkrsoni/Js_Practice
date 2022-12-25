const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  // console.log("Auth Middleware Executed")
  // console.log(req.headers.cookie)
  // console.log(req.headers.cookie)
  const token = req.headers.cookie
  if (token)
    try {
      //validate the token
      const userPayload = jwt.verify(token, process.env.JWT_SECRET_KEY)
      console.log(userPayload)
      //Attach the userPayload in req to access user info in all the foloowing middlewares
      req.userPayload = userPayload
      next()
    }
    catch (error) {
      res.status(401).send({
        status: 'error',
        msg: 'Invalid Token'
      })
    }
  else
    res.status(401).send({
      status: 'error',
      msg: 'Token Not Present, Try Login!'
    })
}


const isAdminMiddleware = (req, res, next) => {
  // const { isAdmin } = req.userPayload //{name, email, isAdmin}
  let isAdmin = true
  if (isAdmin)
    next()
  else
    res.status(401).send({
      status: 'error',
      msg: 'This operation is not allowed'
    })
}

module.exports = {
  authMiddleware,
  isAdminMiddleware
}