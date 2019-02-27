const express = require('express')
const router = express.Router()
const {User} = require('../models/user')
const {authenticateUser} = require('../middleswares/user_authentication')

router.get('/', authenticateUser, function(req, res){
    User.find().then(function(users){
        res.send(users)
    }).catch(function(err){
        res.send(err)
    })
})

router.post('/', function(req, res){
    let body = req.body
    let user = new user(body)

    user.save().then(function(user){
        return user.generateToken()
    }).then(function(token){
        res.header('x-auth', token).send()
    }).catch(function(err){
        res.send(err)
    })
})

router.post('/login', function(req,res){
    let body = req.body
    User.findByCredentials(body.email, body.password).then(function(user){
        return user.generateToken()
    }).then(function(token){
        res.header('x-auth',token).send()
    }).catch(function(err){
        res.status(401).send(err)
    })
})

router.get('./profile',authenticateUser ,function(req, res){
    res.send({
        username: req.user.username,
        email: req.user.email,
        mobile: req.user.mobile
    })
})

router.delete('/logout',authenticateUser ,function(req,res){
    const {user, token} = req
    const tokenInfo = user.tokens.find(function(tokenItem){
        return tokenItem.token == token
    })

    user.tokens.id(tokenInfo._id).remove()
    user.save().then((user) => {
        res.send({
            notice: 'logged out successfully'
        })
    })
})

module.exports = {
    usersController: router
}