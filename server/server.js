const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


const publicPath = path.join(__dirname, '../client/public');

app.use(express.static(publicPath));
app.use(bodyParser.json());


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db("bucketList");
  const itemCollection = db.collection("items");
  const bucketRouter = createRouter(itemCollection);
  app.use('/api/bucketlist', bucketRouter);
})

app.listen(3000, function () {
  console.log('Listening on port 3000');
})
