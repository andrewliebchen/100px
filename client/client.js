var cellWidth = 10;
var colors = ['black', 'white', 'gray', 'aqua', 'blue',
              'green', 'yellow', 'orange', 'red', 'fuchsia'];

Session.setDefault('currentDrawing', null);
Session.setDefault('currentColor', 'black');

Template.drawings.helpers({
  drawing: function() {
    return Drawings.find({}, {sort: {createdAt: -1}});
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

  'click .editing .mtr_editable-cell': function(event, template) {
    var cells = template.data.cells;
    var newCellIndex = $(event.target).index();
    var newCellColor = Session.get('currentColor');
    cells.splice(newCellIndex, 1, newCellColor);

    Meteor.call('updateDrawing', Session.get('currentDrawing'), cells);
  },

  'click .mtr_done-editing': function() {
    Session.set('currentDrawing', null);
  }
});

Template.newDrawing.events({
  'click .mtr_new-drawing': function() {
    Drawings.insert({
      cells : CellTemplate,
      createdAt: Date.now()
    });
  }
});

Template.swatches.rendered = function() {
  var currentColor = Session.get('currentColor');
  _.map(colors, function(color) {
    var isCurrent = (currentColor === color) ? ' cell' : '';
    $('.swatches').append('<div class="swatch mtr_swatch' + isCurrent + '" data-color="' + color + '"></div>');
  })
};

Template.swatches.events({
  'click .mtr_swatch': function(event, template) {
    var $this = $(event.target);

    Session.set('currentColor', $this.data('color'));
    $('.swatch.cell').removeClass('cell');
    $this.addClass('cell');
  }
})
