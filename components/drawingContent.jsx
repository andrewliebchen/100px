const cx = React.addons.classSet;
const _ = lodash;

// Could probably do a better job simplifying the actions
DrawingContent = React.createClass({
  propTypes: {
    drawing: React.PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      editing: false,
      color: null
    };
  },

  handleLikeDrawing() {
    console.log('click like');
    const currentUserId = Meteor.userId();
    if(_.contains(this.props.likedBy, currentUserId)) {
      Meteor.call('unlikeDrawing', {
        drawingId: this.props.drawing._id,
        currentUserId: currentUserId
      });
    } else {
      Meteor.call('likeDrawing', {
        drawingId: this.props.drawing._id,
        currentUserId: currentUserId
      });
    }
  },

  handleCellClick(event) {
    console.log('cell click');

    // To change the color of a cell, we get the cell array for the drawing,
    // update the array, and then shove it back into the Drawings collection
    const newCellIndex = $(event.target).index();
    cells.splice(newCellIndex, 1, this.state.color);

    Meteor.call('updateDrawing', {
      drawingId: this.props.drawing._id,
      cells: this.props.drawing.cells
    });
  },

  handleToggleEditing() {
    console.log('edit toggle');
    this.setState({editing: !this.state.editing});
  },

  handleDrawingClick() {
    console.log('drawing click');
      if(!this.state.editing) {
        FlowRouter.go(`drawings/${this.props.drawing._id}`);
      }
  },

  handleDeleteDrawing() {
    console.log('delete drawing');
    if(window.confirm('Are you sure you want to delete this drawing?')) {
      Meteor.call('deleteDrawing', this._id);
    };
  },

  handleSelectColor(color) {
    console.log(`selected color ${color}`);
    this.setState({color: color});
  },

  render() {
    let {drawing} = this.props;
    let currentUser = Meteor.user();
    let drawingClassName = cx({
      'drawing-container': true,
      'editing': this.state.editing
    });

    return (
      <div className={drawingClassName}>
        <aside className="column left">
          <ul>
            <li>
              {/* TODO: remove ownerName from drawing collection */}
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
            return (
              <div
                key={i}
                className={`cell cell-${color}`}
                onClick={this.handleCellClick}/>
            );
          })}
        </div>
        <aside className="column right">
          {this.state.editing ?
            <span>
              {/* TODO: put all this into one component */}
              <Swatches currentColor={this.state.color} selectColor={this.handleSelectColor}/>
              <a onClick={this.handleToggleEditing}>
                <strong><Icon name="file"/> Done</strong>
              </a>
            </span>
          :
            <ul>
              <li>
                <a className="drawing-edit" onClick={this.handleToggleEditing}><strong><Icon name="edit"/> Edit</strong></a>
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

      Drawings.update(args.drawingId, {
        $push: {likedBy: args.currentUserId}
      });
    },

    unlikeDrawing(args) {
      check(args, {
        drawingId: String,
        currentUserId: String
      });

      Drawings.update(args.drawingId, {
        $pull: {likedBy: args.currentUserId}
      });
    },

    updateDrawing(args) {
      check(args, {
        drawingId: String,
        cells: Array
      });

      Drawings.update(args.drawingId, {
        $set: {cells: args.cells}
      });
    },

    deleteDrawing(drawingId) {
      check(drawingId, String);
      Drawings.remove(drawingId);
    }
  });
}
