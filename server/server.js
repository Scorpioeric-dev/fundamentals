//learn to sepreate the lib, and variables


require('dotenv/config')
//This creates the server &
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const port = 4446
const app = express()

//reads req.body top level middleware
app.use(express.json())


massive(process.env.CONNECTION_STRING)
.then(res => {
    //set db on app,this is my call sign in other areas 
    app.set('db',res)
    //this will correlate with nodemon when ran
    app.listen(port,() => console.log(`this is ${port}`))
})


//endpoints
app.get('/api/characters/:id',ctrl.getThing)
app.get('/api/characters',ctrl.getThings)
app.post('/api/characters',ctrl.postThing)
app.put('/api/characters/:id',ctrl.editThing)
app.delete('/api/characters/:id',ctrl.deleteThing)
