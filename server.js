const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

let db,
    dbPw = process.env.PW
    dbUser = process.env.USER
    dbURI = `mongodb+srv:${dbUser}:${dbPw}@umeka0.3alsj.mongodb.net/?retryWrites=true&w=majority`
    dbName = 'game'




MongoClient.connect(dbURI, {useUnifiedTropology: true, useNewUrlParser: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
        const player = db.collection('player')
        const enemy = db.collection('enemy')
        const item = db.collection('item')
        const saveFile = db.collection('saveFile')




        app.set('view engine', 'ejs')
        app.use(express.static('public'))
        app.use(express.urlencoded({ extended: true }))
        app.use(express.json())




        app.get('/', (req,res)=>{
            player.find().toArray()
            .then(data => {
                console.log(data);
                res.sendFile(__dirname + '/index.html')
            })
            .catch(error => console.error(error))
        })
    
        





































        app.listen(process.env.PORT || PORT, ()=>{
            console.log(`Server running on port ${PORT}`)
        })

    })
    .catch(error => console.log(error))

    
    

    