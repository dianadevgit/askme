
const dataBase = require('../db/config')

module.exports = {

    index(req, res){
        
        console.log('Teste console backend');
        /*Separate de variables*/
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password; //Post: password in the body

        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`);

    },

    async create(req,res){
        const db = await dataBase();
        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )VALUES(
            "${question}", 
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)

    }
}
/*This is the backend route. To code the logical and business rule*/
