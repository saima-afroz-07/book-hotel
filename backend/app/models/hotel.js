const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hotelSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    categories:{
        type: [String],
        required: true
    },
    city: {
        type:String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    reviews : {
        rating:{
            type: Number,
            required: true
        },
        text:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true
        }
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema) 

module.exports = {
    Hotel 
}