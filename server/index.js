const express = require('express')
const path = require('path')

const page = require('../routers/page.router')

const app = express()

app.use(express.static(path.resolve(__dirname, '../static')))

app.use('/api/page/', page)

app.listen(8080, () => {
    console.log('Run server')
})