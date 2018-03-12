const mongoose = require('mongoose')
const debug = require('debug')('server:db-conn')
const dbURL = process.env.DB_URL

mongoose.Promise = global.Promise
mongoose.connect(dbURL)
  .then(() => console.log(`Connected to database`))
  .catch(err => {
    console.log(`ERROR -> ${err}`)
    throw err
  })