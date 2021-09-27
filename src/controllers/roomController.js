const database = require("../db/config")

module.exports = {

    /*Create room*/
    async create(req, res){
        const db = await database();
        const pass = req.body.password;

        let roomId = "";

        /*Populate an array with all id's already registered*/
        const roomIds = await db.all('SELECT id FROM rooms')
        
        let existRoom = true; 
        
        while(existRoom) {
            
            /*Generate a random room number*/
            for (let i = 0; i<6; i++) {
                roomId += Math.floor(Math.random() * 10).toString();
            }
            
            /*Validate whether the number already exists 
            and insert or generate a different one*/
            existRoom = roomIds.some(elem => elem === roomId);

            if (!existRoom){
                await db.run(`INSERT INTO rooms (
                    id,
                    pass
                ) VALUES (
                    ${parseInt(roomId)},
                    ${pass}
                )`)
            }
        }

        await db.close()

        res.redirect(`/room/${roomId}`)
    },
    
    /*Open room*/
    async open(req,res){
        const db = await database();
        const roomId = req.params.room;
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1`)
        
        /*Check wheter there is no questions in the room, so a 
          specific page will be showing*/
        let hasQuestions = true;
        if(questions.length ==0){
            if(questionsRead.length ==0){
                hasQuestions = false;
            }
        }

        res.render("room",{roomId: roomId, questions: questions, questionsRead: questionsRead, hasQuestions: hasQuestions})

    },

    /*Enter room*/
    async enter(req,res){
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)
    }

}