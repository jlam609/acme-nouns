const {db, seed, Person, Place, Thing} = require('./db/index')
const express = require('express')
const path = require('path')
const app = express()
const PORT  = process.env.PORT || 3000
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client')))

app.get('/api/places', async(req,res) => {
    const places = await Place.findAll()
    res.send({
        places
    })
})

app.get('/api/things', async(req,res) => {
    const things = await Thing.findAll()
    res.send({
        things
    })
})

app.get('/api/people', async(req,res) => {
    const people = await Person.findAll()
    res.send({
        people
    })
})

app.post('/api/things', async(req,res) => {
    const {name} = req.body
    if (typeof name !== 'string'){
        res.status(400).send({
            message:'Must be a string'
        })
    }
    else{
    const createdThing = await Thing.create({
        name
    })
    res.status(201).send({
        thing:createdThing,
        message:`${name} created successfully!`
    })}
})

app.post('/api/people', async(req,res) => {
    const {name} = req.body
    if (typeof name !== 'string'){
        res.status(400).send({
            message:'Must be a string'
        })
    }
    else{
    const createdPerson = await Person.create({
        name
    })
    res.status(201).send({
        person:createdPerson,
        message:`${name} created successfully!`
    })}
})

app.post('/api/places', async(req,res) => {
    const {name} = req.body
    if (typeof name !== 'string'){
        res.status(400).send({
            message:'Must be a string'
        })
    }
    else{
    const createdPlace = await Place.create({
        name
    })
    res.status(201).send({
        place:createdPlace,
        message:`${name} created successfully!`
    })}
})

const startServer = () => new Promise((res) => {
    app.listen(PORT, () => {
        console.log('listening')
    })
})

seed()
.then(startServer)
.catch(e => {
    console.log('error')
    throw e
})