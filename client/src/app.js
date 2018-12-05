const BucketList = require('./models/bucket_list');
const BucketListGridView = require('./views/bucket_list_grid_view.js');
const ItemFormView = require('./views/item_form_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketList = new BucketList('http://localhost:3000/api/bucketlist/');
  bucketList.getData();
  bucketList.bindEvents();

  const myBucketList = document.querySelector('.bucketList');
  const bucketListGridView = new BucketListGridView(myBucketList);
  bucketListGridView.bindEvents();

  const bucketForm = document.querySelector('.form');

  const itemFormView = new ItemFormView(bucketForm);
  itemFormView.bindEvents();

});
