const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./services/connectDB')
// const cookieParser = require('cookie-parser');
const placeRouter = require('./routers/placeRouter');

const app = express()
dotenv.config()
const port = process.env.PORT

app.listen(port, () => console.log(`server started at port ${port}`))
connectDB()
app.use(express.json())

// app.use(cookieParser())
// app.use(express.urlencoded())

app.use('/', placeRouter)
// app.use('/', userRouter)

