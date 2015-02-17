Meteor.methods({
  'newDrawing': function() {
    return Drawings.insert({
      cells :    CellTemplate,
      createdAt: Date.now(),
      ownerId:   Meteor.userId(),
      ownerName: Meteor.user().profile.name,
      likedBy: []
    });
  },

  'likeDrawing': function(drawingId, currentUserId) {
    Drawings.update(drawingId, {$push: {likedBy: currentUserId}});
  },

  'unlikeDrawing': function(drawingId, currentUserId) {
    Drawings.update(drawingId, {$pull: {likedBy: currentUserId}});
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

