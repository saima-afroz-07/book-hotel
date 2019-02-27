const {User} = require('../models/user');

const authenticateUser = (req,res,next) => {
    let token = req.header('x-auth')
    User.findByToken(token).then((user) => {
        req.user = user
        req.token = token
        req.myMessage = "this if from authentication middleware"
        next()
    }).catch((err) => {
        res.status(401).send(err)
    })
}

module.exports = {
    authenticateUser
}