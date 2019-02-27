var csvjson = require('csvjson')
const mongoose = require('mongoose')
const { Hotel } = require('../app/models/hotel')
var fs = require('fs')
var path = require('path')

mongoose.connect('mongodb://localhost:27017/book-hotel')
  .then(function(){
    console.log('connected to db')
    var data = fs.readFileSync(path.join( './hotels.csv'), { encoding : 'utf8'});

    var options = {
        delimiter : ',',
        quote : '"',
        headers : "id, address, categories,city, country, latitude, longitude, name, postalCode, province, reviews.rating, reviews.text, reviews.title, reviews.username"
      };

    const hotels = csvjson.toObject(data, options)

    hotels.forEach(function(hotel){
      const data = {
        address: hotel.address, 
        categories: hotel.categories,
        city: hotel.city, 
        country: hotel.country, 
        latitude: hotel.latitude,
        longitude: hotel.longitude,
        name: hotel.name, 
        postalCode: hotel.postalCode, 
        province: hotel.province,
        reviews: {
          rating: hotel['reviews.rating'], 
          text: hotel['reviews.text'],
          title: hotel['reviews.title'],
          username: hotel['reviews.username']
        }
      }
    

      const hotelObj = new Hotel(data) 
      hotelObj.save()
    })
    

  })
  .catch(function(err) {
    console.log('not connected')
  })

// console.log(dataJSON)

