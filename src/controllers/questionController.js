module.exports = {
    index(req, res){
        
        console.log('Teste console backend');
        /*Separate de variables*/
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password; //Post: password in the body

        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`);

    }
}
/*This is the backend route. To code the logical and business rule*/
