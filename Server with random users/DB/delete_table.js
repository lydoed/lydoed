import mysql from 'mysql'
import { config } from '../config.js';

config.database = "users"
const con = mysql.createConnection(config)



con.connect(function(err){
  if (err) throw err;
    con.query("DROP TABLE users", function (err, result) {
      if (err) throw err;
  });
  con.end()
})

