
const dataBase = require('../db/config')

module.exports = {

    async index(req, res){
        const db = await dataBase();
        
        /*Separate de variables*/
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password; //Post: password in the body

        /*Verify password*/
        res.redirect(`/room/${roomId}`)
        
        const getRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);
        
        if (getRoom.pass == password){
            
            if (action == "delete"){
                
                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            }else if (action == "check" ){

                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
            
            }
            res.redirect(`/room/${roomId}`);            
        }else {
            console.log("Dianaaaaa pass incorrect");
            res.render('passIncorrect', {roomId: roomId})
        }

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
