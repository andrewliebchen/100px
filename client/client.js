var cellWidth = 10;
var colors = ['black', 'gray', 'light-gray', 'white', 'aqua', 'blue', 'teal',
              'green', 'olive', 'lime', 'yellow', 'orange', 'red', 'fuchsia',
              'purple', 'maroon'];

Session.setDefault('currentDrawing', null);
Session.setDefault('currentColor', 'black');

Template.drawings.helpers({
  drawing: function() {
    return Drawings.find({});
  }
});

Template.drawingContent.helpers({
  editing: function() {
    return Session.equals('currentDrawing', this._id);
  }
});

Template.drawingContent.events({
  'click .mtr_edit-drawing': function(event, template) {
    Session.set('currentDrawing', this._id);
  },

  'click .editing .cell': function(event, template) {
    var cells = template.data.cells;
    var newCellIndex = $(event.target).index();
    var newCellColor = Session.get('currentColor');
    cells.splice(newCellIndex, 1, newCellColor);

    Meteor.call('updateDrawing', Session.get('currentDrawing'), cells);
  }
});

Template.swatches.rendered = function() {
  _.map(colors, function(color) {
    $('.swatches').append('<div class="swatch mtr_swatch" data-color="' + color + '"></div>');
  })
};

Template.swatches.events({
  'click .mtr_swatch': function(event, template) {
    Session.set('currentColor', $(event.target).data('color'));
  }
})
