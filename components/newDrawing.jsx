NewDrawing = React.createClass({
  render() {
    return (
      <a className="drawing drawing-new mtr_new-drawing">
        {{#if currentUser}}+{{/if}}
      </a>
    );
  }
});

if(Meteor.isServer) {
  Meteor.methods({
    newDrawing() {
      return Drawings.insert({
        cells :    CellTemplate,
        createdAt: Date.now(),
        ownerId:   Meteor.userId(),
        ownerName: Meteor.user().profile.name,
        likedBy: []
      });
    }
  });
}
