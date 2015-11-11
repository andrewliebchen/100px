Header = React.createClass({
  render() {
    return (
      <header className={`drawing-container header ${Meteor.user() ? 'logged-in' : null}`}>
        <aside className="column left"/>
        <NewDrawing/>
        <aside className="column right">
          {{>loginButtons}}
        </aside>
      </header>
    );
  }
});
