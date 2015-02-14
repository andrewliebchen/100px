var cellWidth = 10;

Session.setDefault('currentDrawing', null);
Session.setDefault('currentColor', 'black');

Template.drawings.helpers({
  drawing: function() {
    return Drawings.find({});
  },

  editing: function() {
    return Session.equals('currentDrawing', this._id);
  }
});

Template.drawings.events({
  'click .mtr_edit-drawing': function(event, template) {
    Session.set('currentDrawing', this._id);
    Meteor.call('resetDrawing', this._id);
  },

  'click .editing .cell': function(event, template) {
    console.log('click');
    // var $this = $(event.target);
    // var cellIndex = $this.index();
    // var currentColor = Session.get('currentColor');

    // // Convert index into xy coordinates
    // var cellPosX = cellIndex % 10 * cellWidth;
    // var cellPosY = Math.floor((cellIndex / 10) % 10) * cellWidth;

    // if ($this.hasClass('added')) {
    //   // Meteor.call('updateCell', {
    //   //   x: cellPosX,
    //   //   y: cellPosY,
    //   //   color: currentColor,
    //   //   drawing: Session.get('currentDrawing')
    //   // });
    // } else {
    //   Meteor.call('createCell', {
    //     x:       cellPosX,
    //     y:       cellPosY,
    //     color:   currentColor,
    //     drawing: Session.get('currentDrawing')
    //   });
    // }

    // $this.addClass('added').addClass(currentColor);
  }
});
