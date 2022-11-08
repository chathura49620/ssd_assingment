const db = require('../model')

const Message = db.Message;

//save message 
const addMessage = async (req, res, next) => {
    try {
        const message = req.body.message;
        Message.create({
            message: message,
        }).then(res => {
            console.log(res)
        })
    } catch (err) {
        console.error('Failed to create a new record : ', error);
    }
}





module.exports = { 
    addMessage,
};