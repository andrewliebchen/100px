Meteor.methods({
  'resetDrawing': function(drawingId) {
    Cells.remove({drawing: drawingId});
  },

  'createCell': function(args) {
    Cells.insert({
      x:       args.x,
      y:       args.y,
      color:   args.color,
      drawing: args.drawing
    });
  }
});
