var cellWidth = 10;

Session.setDefault('currentDrawing', null);

Template.drawings.helpers({
  drawing: function() {
    return Drawings.find({});
  },

  cell: function() {
    return Cells.find({drawing: this._id});
  }
});

Template.drawings.events({
  'click .mtr_edit-drawing': function(event, template) {
    Session.set('currentDrawing', this._id);
    Meteor.call('resetDrawing', this._id);
  }
})

Template.drawingEditor.rendered = function() {
  _(100).times(function(){
    $('.drawing.editor').append('<div class="editor-cell mtr_editor-cell"></div>');
  });
}

Template.drawingEditor.helpers({
  editing: function() {
    return Session.get('currentDrawing');
  }
})

Template.drawingEditor.events({
  'click .mtr_editor-cell': function(event, template) {
    var $this = $(event.target);
    var cellIndex = $this.index();

    // Convert index into xy coordinates
    var cellPosX = cellIndex % 10 * cellWidth;
    var cellPosY = Math.floor((cellIndex / 10) % 10) * cellWidth;

    if ($this.hasClass('added')) {

    } else {
      Meteor.call('createCell', {
        x:       cellPosX,
        y:       cellPosY,
        color:   "black",
        drawing: Session.get('currentDrawing')
      });
    }

    $this.addClass('added').addClass('black');
  }
});
