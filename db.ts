import mariadb from 'mysql2/promise'

      

export const conn = mariadb.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'Accountbook',
  dateStrings : true,
})

export default conn;