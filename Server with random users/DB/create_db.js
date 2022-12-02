import mysql from 'mysql'
import { config } from '../config.js'



const con = mysql.createConnection(config)


// Створити базу данних
con.connect(function(err) {
    if (err) throw err;
    con.query("CREATE DATABASE IF NOT EXISTS users", function (err, result) {
        if (err) throw err;})
        con.end()
})

