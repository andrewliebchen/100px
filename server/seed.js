if (Meteor.isServer) {

  function parentDrawing(){
    var parentDrawing = Drawings.insert({});
    return parentDrawing;
  }

  Meteor.startup(function () {
    Drawings.remove({});

    if(Drawings.find().count() === 0) {
      Drawings.insert({
        cells : [
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "black", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "blue", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "red", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"
        ]
      });

      Drawings.insert({
        cells : [
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "black", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "blue", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "red", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white",
          "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"
        ]
      });
    }
  });
}
