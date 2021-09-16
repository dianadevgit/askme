const express = require('express');
/*Express is necessary to work with routes*/

const questionController = require('./controllers/questionController');

const route = express.Router();

route.get('/index', (req, res)=> res.render("index"));
route.get('/room', (req, res)=> res.render("room"));
route.get('/create-pass', (req, res)=> res.render("create-pass"));

/*Create a route like that: room/password/question/action */

//Format that the form has to pass the information/parameters to the backend route
//route.post('/room/323232/2/check')
//example for test:
//route.get('/room/:room/:question/:action', (req,res) => res.render("example",{req}))

route.post('/room/:room/:question/:action', questionController.index); /*(req,res) stays implicit*/

module.exports = route;