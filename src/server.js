/*This file is used to initialize the node project*/
const express = require('express')
const route = require('./route')
const path = require('path') /*module path*/


const server = express()

server.set('view engine','ejs')

/*To use the folder public*/
server.use(express.static("public"))

/*The path of page/folder views:*/
server.set('views', path.join(__dirname, 'views')) /*join is functionality of module path*/
/*
path is the path of the project in this computer.
e.g.: .../diana/rocket/askme+/src+/views
__dirname get the folder of the current file
In this case it will be '/src'.
*/


server.use(route)

server.listen(3000, ()=> console.log("Running")) 