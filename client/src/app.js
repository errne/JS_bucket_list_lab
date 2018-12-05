const BucketList = require('./models/bucket_list');
const BucketListGridView = require('./views/bucket_list_grid_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketList = new BucketList('http://localhost:3000/api/bucketlist/');
  bucketList.getData();

  const myBucketList = document.querySelector('.bucketList');
  const bucketListGridView = new BucketListGridView(myBucketList);
  bucketListGridView.bindEvents();

});
