import express from 'express'
import { Express } from 'express-serve-static-core';
import { Connection } from 'mongoose';
import getModelRoute from './db/addModelRoute';
import initDb from './db/dbInit'
import Location from './db/schemas/location';

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

  app.use(getModelRoute(Location));
  app.get('/', (_req, res) => {
    // eventually need to make it return a webpage
    res.send('Hello World!')
  });

}

initApp();