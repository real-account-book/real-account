const mariadb = require('mysql2');
      
const connection = mariadb.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Accountbook',
  dateStrings : true,
})
  
module.exports = connection