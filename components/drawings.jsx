Drawings = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      drawings: Drawings.find({}, {sort: {createdAt: -1}})
    };
  },

  render() {
    return (
      <div className="drawings">
        {this.data.drawings.map((drawing, i) => {
          return <DrawingContent drawing={drawing} key={i}/>
        })}
      </div>
    );
  }
});

if(Meteor.isClient) {
  FlowRouter.route('/', {
    subscriptions(params) {
      this.register('drawings', Meteor.subscribe('drawings'));
    },

    action(params) {
      FlowRouter.subsReady('drawings', () => {
        ReactLayout.render(App, {
          content() {
            return <Drawings/>;
          }
        });
      });
    }
  });
}
