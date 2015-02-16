Router.configure({
  layoutTemplate: 'application',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('drawings', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('drawings');
    },
    data: function() {
      return Drawings.find({});
    }
  });

  this.route('singleDrawing', {
    path: '/drawings/:_id',
    name: 'singleDrawing',
    waitOn: function() {
      return Meteor.subscribe('singleDrawing', this.params._id);
    },
    data: function() {
      return Drawings.findOne(this.params._id);
    }
  });
});
