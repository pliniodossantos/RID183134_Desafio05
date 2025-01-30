import { connect } from 'mongoose'

let conn

const connection = () => {
  if (conn) {
    return conn
  }
  conn = connect('mongodb://127.0.0.1:27017/local')
}

export default connection