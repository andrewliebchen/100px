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
});
