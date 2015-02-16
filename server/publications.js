Meteor.publish('drawings', function() {
  return Drawings.find({});
});
