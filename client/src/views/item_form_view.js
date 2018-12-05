const PubSub = require('../helpers/pub_sub.js');

const ItemFormView = function (form) {
  this.form = form;
}

ItemFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  })
};

ItemFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const itemForm = event.target;
  const goal = itemForm.goal.value;
  const status = false;
  const newGoal = {
    goal: goal,
    done: status
  };
  PubSub.publish('ItemFormView:new-goal', newGoal);
};

module.exports = ItemFormView;
