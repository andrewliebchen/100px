// TODO: Make this dynamic with lodash
const cellTemplate = [
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent",
  "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent", "transparent"
];

NewDrawing = React.createClass({
  handleNewDrawing() {
    if(Meteor.user()) {
      Meteor.call('newDrawing', function(error, newId) {
        if(error) {
          console.error(error);
        } else {
          // How to activate the new drawing?
          // Session.set('currentDrawing', newId);
          Meteor.call('newDrawing', {
            createdAt: Date.now(),
            ownerId: Meteor.userId()
          });
        }
      });
    }
  },

  render() {
    return (
      <a className="drawing drawing-new" onClick={this.handleNewDrawing}>
        {Meteor.user() ? '+' : null}
      </a>
    );
  }
});

if(Meteor.isServer) {
  Meteor.methods({
    newDrawing(args) {
      return Drawings.insert({
        cells :    cellTemplate,
        createdAt: args.createdAt,
        ownerId:   args.ownerId,
        likedBy: []
      });
    }
  });
}
