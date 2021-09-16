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

/*Middleware to enable the communication between front and backend routes 
(Ex.: to be able to use this route: route.post('/room/:room/:question/:action', questionController.index) )
*/
server.use(express.urlencoded({extended: true}))
/*The encoded will get the form content that has been passed through url and translate to use it 
on the controller. */

server.use(route)

server.listen(3000, ()=> console.log("Running")) 