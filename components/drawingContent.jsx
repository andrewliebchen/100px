const cx = React.addons.classSet;

// Could probably do a better job simplifying the actions
DrawingContent = React.createClass({
  propTypes: {
    drawing: React.PropTypes.array.isRequired,
    editing: React.PropTypes.bool
  },

  handleLikeDrawing() {
    console.log('like');
  },

  handleCellClick() {
    console.log('cell click');
  },

  handleDoneEditing() {
    console.log('done editing');
  },

  handleEditDrawing() {
    console.log('edit');
  },

  handleDrawingClick() {
    console.log('drawing click');
  },

  handleDeleteDrawing() {
    console.log('delete drawing');
  },

  render() {
    let {drawing, editing} = this.props;
    let currentUser = Meteor.user();
    let drawingClassName = cx({
      'drawing-container': true,
      'editing': editing
    });

    return (
      <div className={drawingClassName}>
        <aside className="column left">
          <ul>
            <li>
              <strong>{drawing.ownerName} <Icon name="user"/></strong>
            </li>
            <li>
              <small>{drawing.createdAtTime} <Icon name="clock"/></small>
            </li>
            <li>
              {currentUser ?
                <a onClick={this.handleLikeDrawing}>
                  <small>
                    {this.drawing.likeCount ? `${drawing.likeCount} ` : 'Like it '}
                    <Icon name="heart"/>
                  </small>
                </a>
              :
                <small>{drawing.likeCount} <Icon name="heart"/></small>
              }
            </li>
          </ul>
        </aside>
        <div className="drawing" onClick={this.handleDrawingClick}>
          {drawing.cells.map((color, i) => {
            return <div className={`cell cell-${color}`} key={i} onClick={this.handleCellClick}>;
          })}
        </div>
        <aside className="column right">
          {editing ?
            <Swatches/>
            <a onClick={this.handleDoneEditing}>
              <strong><Icon name="file"/> Done</strong>
            </a>
          :
            <ul>
              <li>
                <a className="drawing-edit" onClick={this.handleEditDrawing}><strong><Icon name="edit"/> Edit</strong></a>
              </li>
              <li>
                <a className="bad" onClick={this.handleDeleteDrawing}><small><Icon name="trash"/> Delete</small></a>
              </li>
            </ul>
          }
        </aside>
      </div>
    );
  }
});

if(Meteor.isServer) {
  Meteor.methods({
    likeDrawing(args) {
      check(args, {
        drawingId: String,
        currentUserId: String
      });

      Drawings.update(drawingId, {
        $push: {likedBy: currentUserId}
      });
    },

    unlikeDrawing(args) {
      check(args, {
        drawingId: String,
        currentUserId: String
      });

      Drawings.update(drawingId, {
        $pull: {likedBy: currentUserId}
      });
    },

    updateDrawing(args) {
      check(args, {
        drawingId: String,
        cells: Array
      });

      Drawings.update(drawingId, {
        $set: {cells: cells}
      });
    },

    deleteDrawing(drawingId) {
      Drawings.remove(drawingId);
    }
  });
}
