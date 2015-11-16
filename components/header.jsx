const cx = React.addons.classSet;

Header = React.createClass({
  render() {
    let headerClassName = cx({
      'drawing-container': true,
      'header': true,
      'logged-in': Meteor.user()
    });
    return (
      <header className={headerClassName}>
        <aside className="column left"/>
        <NewDrawing/>
        <aside className="column right">
          {/*}{{>loginButtons}}*/}
        </aside>
      </header>
    );
  }
});
