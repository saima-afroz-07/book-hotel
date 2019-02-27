const express = require('express')
const router = express.Router()
const {Hotel} = require('../models/hotel')
//const {hotelAuthentication} = require('../middleswares/hotel_validation')
//const {authenticateUser} = require('../middleswares/user_authentication')

router.get('/' ,function(req, res){
 Hotel.find().then((hotels) => {
     res.send(hotels)
 }).catch((err) => {
     res.send(err)
 })
})

router.get('/:id' ,  function(req, res){
    let id= req.params.id
    Hotel.findById(id).then(hotel => {
        res.send(hotel)
    }). catch((err) => {
        res.send(err)
    })
})

module.exports = {
    hotelsController: router
}