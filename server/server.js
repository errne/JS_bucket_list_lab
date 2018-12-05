const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');


const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));
app.use(bodyParser.json());
const bucketRouter = createRouter([]);
 app.use('/api/bucket', bucketRouter);


app.listen(3000, function () {
  console.log('It works');
})
