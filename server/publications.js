Meteor.publish('drawings', function() {
  return Drawings.find({});
});

Meteor.publish('singleDrawing', function(id) {
  return Drawings.find(id);
});
