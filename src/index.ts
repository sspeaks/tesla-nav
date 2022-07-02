import express from 'express'
import { Express } from 'express-serve-static-core';
import { Connection } from 'mongoose';
import initDb from './db/dbInit'

async function initApp() {

  const app = express()
  const port = 3000

  try {
    const db = await initDb();
    console.log("database connection successful!")

    setupRoutes(db, app);


    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    });
  } catch (err) {
    console.log(`Connection errored! ${err}`);
  }

}

function setupRoutes(db: Connection, app: Express) {
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  app.get('/', (_req, res) => {
    res.send('Hello World!')
  });

}

initApp();