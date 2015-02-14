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
      return Cells.find({drawing: this._id});
    }
  });

}

if (Meteor.isServer) {

}
