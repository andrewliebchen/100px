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
      Meteor.call('newDrawing', {
        createdAt: Date.now(),
        ownerId: Meteor.userId()
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
      check(args, {
        createdAt: Number,
        ownerId: String
      });

      Drawings.insert({
        cells :    cellTemplate,
        createdAt: args.createdAt,
        ownerId:   args.ownerId,
        likedBy: []
      });
    }
  });
}
