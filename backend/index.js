const express = require('express')
const app = express()
const {hotelsController} = require('./app/controllers/hotels_controller')
const {usersController} = require('./app/controllers/users_controller')
//const {searchController} = require('./app/controllers/search_controller')
const {mongoose} = require('./config/db')
const cors = require('cors')
const port = 3004

app.use(express.json())
app.use(cors())

app.get('/', function(req, res){
    res.send('welcome to the website')
})

//app.use('/search', searchController)
app.use('/hotels', hotelsController)
app.use('/users', usersController)


app.listen(port, function(){
    console.log('listening to port', port)
})

