import path from 'path'
import mysql from 'mysql2'
import express from 'express'
import { config } from './config.js'


const __dirname = path.resolve()
config.database = "users"
const con = mysql.createConnection(config).promise() 
const users = (await con.query('SELECT * FROM users'))[0]


const app = express()
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'elements', 'index.html'))
})


app.get('/users', (req, res) => {
    res.render(path.resolve(__dirname, 'elements', 'users.ejs'), {users})
})


app.get('/max-following', (req, res) => {
    res.render(path.resolve(__dirname, 'elements', 'max_follow.ejs'), {users})
})


app.get('/not-following', (req, res) => {
    res.render(path.resolve(__dirname, 'elements', 'non_follow.ejs'), {users})
})


app.get(`/:id`, (req, res) => {
    let x = null
    users.forEach(user =>{
        if (user.id == req.params.id){x = user}else{}
    })
    if(x == null){res.sendFile(path.resolve(__dirname, 'elements', 'User_not_found.html'))
    }else{res.render(path.resolve(__dirname, 'elements','One_user.ejs'), {x})}
    x = null
})