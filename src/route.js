const express = require('express')
/*Express is necessary to work with routes*/

const route = express.Router()

route.get('/', (req, res)=> res.render("index"))
route.get('/room', (req, res)=> res.render("room"))
route.get('/create-pass', (req, res)=> res.render("create-pass"))


module.exports = route