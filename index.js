const express = require('express')
const helmet = require('helmet')
const connectDB = require('./database/db')
const ejs = require('ejs')

const app = express()
const PORT = process.env.PORT || 3000
connectDB()

app.use(helmet())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/',require('./routes'))

app.listen(PORT,console.log(`App is running at http://localhost:${PORT}`))