const express= require('express')
const app = express()
const db=require('./db')
const connectToMongo = require('./db')
const port = 5000
const cors = require('cors')
connectToMongo();

require('dotenv').config();
app.use(express.json())
app.use(cors())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/service',require('./routes/service'))
app.listen(port, () => {
  console.log(`The app is at http://localhost:${port}`)
})