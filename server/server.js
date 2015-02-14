Meteor.methods({
  'updateDrawing': function(drawingId, cells) {
    Drawings.update(drawingId, {
      $set: {cells: cells}
    });
  }
});
