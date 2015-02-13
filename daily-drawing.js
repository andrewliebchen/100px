Drawings = new Meteor.Collection('drawings');
Cells = new Meteor.Collection('cells');

if (Meteor.isClient) {
  // Template.body.rendered = function() {
  //   _(100).times(function(){
  //     $('.drawing').append('<div class="cell"></div>');
  //   });
  // }

  Template.drawings.helpers({
    drawing: function() {
      return Drawings.find({});
    },

    cell: function() {
      return Cells.find({});
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Drawings.remove({});
    Cells.remove({});

    if(Drawings.find().count() === 0) {
      Drawings.insert({});

      Cells.insert({
        x: 20,
        y: 30
      });

      Cells.insert({
        x: 25,
        y: 30
      });
    }
  });
}
