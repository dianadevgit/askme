/*This file is used to initialize the node project*/
const express = require('express')
const route = require('./route')
const path = require('path')


const server = express()

server.set('view engine','ejs')

server.set('views', path.join(__dirname, 'views'))



server.use(route)

server.listen(3000, ()=> console.log("Running")) 