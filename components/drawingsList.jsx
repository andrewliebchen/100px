DrawingsList = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      drawings: Drawings.find().fetch()
    };
  },

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <div className="drawings">
          {this.data.drawings.map((drawing, i) => {
            return <DrawingContent drawing={drawing} key={i}/>
          })}
        </div>
      </div>
    );
  }
});

if(Meteor.isClient) {
  FlowRouter.route('/', {
    subscriptions() {
      this.register('drawings', Meteor.subscribe('drawings'));
    },

    action() {
      DocHead.setTitle('100px');
      FlowRouter.subsReady('drawings', () => {
        ReactLayout.render(DrawingsList);
      });
    }
  });
}
