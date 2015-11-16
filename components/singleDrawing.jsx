SingleDrawing = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      drawing: Drawings.findOne()
    };
  },

  render() {
    return (
      <div className="single-drawing">
        <drawingContent drawing={this.data.drawing}/>
      </div>
    );
  }
});

if(Meteor.isClient) {
  FlowRouter.route('/drawings/:_id', {
    subscriptions(params) {
      this.register('singleDrawing', Meteor.subscribe('singleDrawing', params._id));
    },

    action(params) {
      FlowRouter.subsReady('singleDrawing', () => {
        ReactLayout.render(App, {
          content() {
            return <SingleDrawing/>;
          }
        });
      });
    }
  });
}
