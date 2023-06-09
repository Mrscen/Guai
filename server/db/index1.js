const mysql = require('mysql')
const connect = mysql.createPool({
    host: '47.113.145.33',
    user: 'root',
    password: '@Ccc123456',
    database: 'GuaiGuai',
})
module.exports = connect