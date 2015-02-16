Meteor.methods({
  'newDrawing': function() {
    return Drawings.insert({
      cells : CellTemplate,
      createdAt: Date.now()
    });
  },

  'updateDrawing': function(drawingId, cells) {
    Drawings.update(drawingId, {
      $set: {cells: cells}
    });
  },

  'deleteDrawing': function(drawingId) {
    Drawings.remove(drawingId);
  }
});
