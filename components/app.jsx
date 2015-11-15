App = React.createClass({
  propTypes: {
    content: React.PropTypes.func().isRequired
  },

  render() {
    return (
      <div className="wrapper">
        <Header/>
        {this.props.content()}
      </div>
    );
  }
});
