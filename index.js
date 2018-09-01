const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3001, () => console.log("Corriendo en el 3001"))

const route = express.Router()

const api = require('./api/api')

//https://pokeapi.co/api/v2/pokemon?limit=15

route.get('/api/v3/pokemon/:id/', api.api2)
route.get('/api/v3/pokemon', api.api1)

app.use('/pokeapi', route)