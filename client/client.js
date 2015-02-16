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
    // To change the color of a cell, we get the cell array for the drawing,
    // update the array, and then shove it back into the Drawings collection
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
    Meteor.call('newDrawing', function(error, newId) {
      if(error){
        console.log(JSON.stringify(error));
      } else {
        Session.set('currentDrawing', newId);
      }
    });
  }
});

Template.swatches.rendered = function() {
  // Build the swatch palette
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
