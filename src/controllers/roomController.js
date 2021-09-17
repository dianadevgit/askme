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
    open(req,res){
        const roomId = req.params.room;
        res.render("room",{roomId: roomId})

    }



}