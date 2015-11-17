AccountsUIWrapper = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(Blaze.Template.loginButtons,
      React.findDOMNode(this.refs.container));
  },

  componentWillUnmount() {
    Blaze.remove(this.view);
  },

  render() {
    return <span className="session-wrapper" ref="container" />;
  }
});

Header = React.createClass({
  render() {
    return (
      <header className={`drawing-container header${Meteor.user() ? ' logged-in' : null}`}>
        <aside className="column left"/>
        <NewDrawing/>
        <aside className="column right">
          <AccountsUIWrapper/>
        </aside>
      </header>
    );
  }
});
