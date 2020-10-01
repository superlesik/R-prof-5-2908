const express = require('express')
const fs = require('fs')

const usersPath = './server/db/users'
const messagesPath = './server/db/messages'


const chat = require('./controllers/chat'); //chat.load()

const app = express();
app.use(express.json());

app.get('/user/:id', (req, res) => {
    let id = req.params.id; //'u-1'
    fs.readFile(`${usersPath}/${id}.json`, 'UTF-8', (err, data) => {
        if(!err) {
            res.json(JSON.parse(data));
            // res.send(data) not for Redux
        }
    })
})

app.get('/chat/:id', chat.load.bind(chat))

app.listen(3330, () => {
    console.log('Server @ 3330');
})