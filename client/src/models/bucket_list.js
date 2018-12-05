const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

BucketList.prototype.getData = function () {
  this.request.get()
  .then((items) => {
    PubSub.publish('BucketList:data-loaded', items);
    console.log(items);
  })
  .catch(console.error);
};

module.exports = BucketList;
