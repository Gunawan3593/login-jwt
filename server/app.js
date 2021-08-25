const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// routes
const authRouter = require('./routes/routes')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/api/auth/', authRouter)

app.use((error, req, res, next) => {
  console.log(error)
  const status = error.statusCode || 500
  const message = error.message
  const data = error.data
  res.status(status).json({ message, data })
})

const PORT = process.env.PORT || 8000

// connect to db
mongoose
  .connect('mongodb://localhost:27017/login-jwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}`)
    })
  })
  .catch(err => console.log(err))
