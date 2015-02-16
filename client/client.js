var cellWidth = 10;

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
  },

  createdAtTime: function() {
    return moment(this.createdAt).fromNow();
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

  'click .mtr_delete-drawing': function() {
    if(window.confirm('Are you sure you want to delete this drawing?')) {
      Meteor.call('deleteDrawing', this._id);
    };
  },

  'click .mtr_done-editing': function(event, template) {
    Session.set('currentDrawing', null);
  }
});

Template.newDrawing.events({
  'click .mtr_new-drawing': function() {
    // This needs to be a method
    // Edit the drawing once it's inserted
    Drawings.insert({
      cells : CellTemplate,
      createdAt: Date.now()
    });
  }
});

Template.swatches.rendered = function() {
  var currentColor = Session.get('currentColor');
  _.map(Colors, function(color) {
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
