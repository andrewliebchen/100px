if (Meteor.isServer) {

  function parentDrawing(){
    var parentDrawing = Drawings.insert({});
    return parentDrawing;
  }

  Meteor.startup(function () {
    Drawings.remove({});
    Cells.remove({});

    if(Drawings.find().count() === 0) {
      var parentDrawingId = parentDrawing();

      Cells.insert({
        x: 20,
        y: 30,
        color: "black",
        drawing: parentDrawingId
      });

      Cells.insert({
        x: 25,
        y: 30,
        color:   "black",
        drawing: parentDrawingId
      });

      // Orphans
      Cells.insert({
        x: 50,
        y: 50,
        color: "black",
      });
    }
  });
}
