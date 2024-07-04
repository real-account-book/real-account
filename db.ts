import mariadb, {ConnectionOptions} from 'mysql2'

const access: ConnectionOptions ={
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Accountbook',
  dateStrings : true,
}
const conn = mariadb.createConnection(access);

export default conn;