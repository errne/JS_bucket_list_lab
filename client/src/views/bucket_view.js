const PubSub = require('../helpers/pub_sub.js');

const BucketView = function (container) {
  this.container = container;
};

BucketView.prototype.render = function (item) {
  const goalContainer = document.createElement('div');
  goalContainer.className = 'goal';

  const goalDiv = document.createElement('div');
  goalDiv.className = 'goal-name';
  goalDiv.textContent = item.goal;
  goalContainer.appendChild(goalDiv);

  const statusDiv = document.createElement('div');
  statusDiv.className = 'goal-status';
  statusDiv.textContent = item.done;
  goalContainer.appendChild(statusDiv);


  this.container.appendChild(goalContainer);


};

module.exports = BucketView;
