const mysql = require('mysql')

const conn = mysql.createConnection({
    //host: '54.144.243.132',
    host: '127.0.0.1',
    port: '3306',
    user: 'ip',
    password:'1234',
    database: 'db_ip'  
})   
module.exports = conn; 
 