const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const PORT = 8000
require('dotenv').config()

app.use(cors())

let db,
    dbPw = process.env.PW
    dbUser = process.env.USER
    dbUri = `mongodb+srv://${dbUser}:${dbPw}@umeka0.3alsj.mongodb.net/?retryWrites=true&w=majority`
    dbName = 'game'


MongoClient.connect(dbUri)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
        const player = db.collection('player')
        const enemy = db.collection('enemy')
        const item = db.collection('item')
        const saveFile = db.collection('saveFile')
        const list = db.collection('list')

        app.set('view engine', 'ejs')
        app.use(express.static('public'))
        app.use(express.urlencoded({ extended: true }))
        app.use(express.json())




        app.get('/', (req,res)=>{
            player.find().toArray()
            .then(data => {
                console.log(data)
                res.sendFile(__dirname + '/index.html')
            })
            .catch(error => console.error(error))
        })



        app.get('/api/db/players',(req,res)=>{
            player.find().toArray()
            .then(data=>{
                res.json(data)
                console.log(data);
            })
        })

        app.get('/api/db/enemys',(req,res)=>{
            enemy.find().toArray()
            .then(data=>{
                res.json(data)
                console.log(data);
            })
        })

        app.get('/api/db/items',(req,res)=>{
            item.find().toArray()
            .then(data=>{
                res.json(data)
                console.log(data);
            })
        })

        app.get('/api/db/savefile',(req,res)=>{
            saveFile.find().toArray()
            .then(data=>{
                res.json(data)
                console.log(data);
            })
        })

        app.get('/api/db/all',(req,res)=>{
            list.aggregate([{
                $lookup: {
                    From: 'enemy'
                },
                $lookup: {
                    From: 'item'
                },
                $lookup: {
                    From: 'player'
                }
            }])
        })
    
        





































        app.listen(process.env.PORT || PORT, ()=>{
            console.log(`Server running on port ${PORT}`)
        })

    })
    .catch(error => console.log(error))

    
    

    