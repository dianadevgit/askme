const express = require('express');
/*Express is necessary to work with routes*/

const questionController = require('./controllers/questionController');
const roomController = require('./controllers/roomController');


const route = express.Router();

route.get('/index', (req, res)=> res.render("index",{page:'enter-room'}));
route.get('/create-pass', (req, res)=> res.render("index",{page:'create-pass'}));

route.post('/create-room', roomController.create);
route.get('/room/:room', roomController.open);
route.post('/enterroom', roomController.enter)

route.post('/question/create/:room', questionController.create);
/*Create a route like that: room/password/question/action */

//Format that the form has to pass the information/parameters to the backend route
//route.post('/room/323232/2/check')
//example for test:
//route.get('/room/:room/:question/:action', (req,res) => res.render("example",{req}))

route.post('/question/:room/:question/:action', questionController.index); /*(req,res) stays implicit*/


module.exports = route;