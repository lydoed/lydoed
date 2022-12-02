import mysql from 'mysql'
import {all} from './random.js'
import { config } from '../config.js'


const users = []
all.forEach(user => {
    users.push([user.name, user.id, user.sex, `[{"subs": [${user.Subscribes}]}]`, `[{"fri": [${user.Friends}]}]`])
})


config.database = "users"
const con = mysql.createConnection(config)


// Створити базу данних
con.connect(function(err) {
    var sql = "CREATE TABLE IF NOT EXISTS users (name VARCHAR(255), id INT, sex VARCHAR(255), Subscribes JSON, Friends JSON)";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
    con.query("INSERT INTO users (name, id, sex, Subscribes, Friends) VALUES ?", [users], function (err, result) {
        if (err) throw err;
    });
    con.end()    
});
 

all.forEach(user => {
  users.push([user.name, user.id, user.sex, `[{"subs": [${user.Subscribes}]}]`, `[{"fri": [${user.Friends}]}]`])
})





