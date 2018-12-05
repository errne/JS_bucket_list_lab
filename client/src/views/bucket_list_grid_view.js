const PubSub = require('../helpers/pub_sub.js');
const BucketView = require('./bucket_view.js');

const BucketListGridView = function (container) {
  this.container = container;
};

BucketListGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (event) => {
    this.render(event.detail);
  })
};

BucketListGridView.prototype.render = function (goals) {
  this.container.innerHTML = '';
  const bucketView = new BucketView(this.container);
  goals.forEach((item) => bucketView.render(item));
};

module.exports = BucketListGridView;
