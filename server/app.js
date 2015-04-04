//server only code

Meteor.startup(function () {
  if (Tags.find().count() === 0) {
    Tags.insert ({ food : ['apple','hotdog','meat','bean'],
cook:'jack'});
  }
});