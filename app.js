const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

// load config
dotenv.config({ path: './config/config.env' })

// call connectdb
// connectDB()

// init app
const app = express()

// init morgan
if (process.env.NODE_ENV === 'devlopment') {
  app.use(morgan('dev'))
}

// json
app.use(express.json())
// static folder
app.use(express.static(path.join(__dirname, 'public')))

// link routes
app.use('/', require('./routes/index'))
app.use('/api/v1/transction', require('./routes/transction'))
app.use('/api/v1/products', require('./router/products'))
app.use('/api/v1/orders', require('./router/orders'))

// handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

// PORT
const PORT = process.env.PORT || 3000

// listen tto server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} Mode on port ${PORT}`)
)
