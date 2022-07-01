import express from 'express'
import initDb from './db/dbInit'
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const db = initDb();

db.on('error', console.error.bind(console, 'MongoDB connection error:'));