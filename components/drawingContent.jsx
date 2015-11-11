DrawingContent = React.createClass({
  render() {
    return (
      <div className="drawing-container{{#if editing}} editing{{/if}}">
        <aside className="column left">
          <ul>
            <li>
              <strong>{{ownerName}} {{>iconUser}}</strong>
            </li>
            <li>
              <small>{{createdAtTime}} {{>iconClock}}</small>
            </li>
            <li>
              {{#if likeCount}}
                {{#if currentUser}}
                  <a className="mtr_like-drawing">
                    <small>{{likeCount}} {{>iconHeart}}</small>
                  </a>
                {{else}}
                  <small>{{likeCount}} {{>iconHeart}}</small>
                {{/if}}
              {{else}}
                {{#if currentUser}}
                  <a className="mtr_like-drawing">
                    <small>Like it {{>iconHeart}}</small>
                  </a>
                {{/if}}
              {{/if}}
            </li>
          </ul>
        </aside>
        <div className="drawing mtr_drawing">
          {{#each cells}}
            <div className="cell mtr_editable-cell" data-color="{{this}}"></div>
          {{/each}}
        </div>
        <aside className="column right">
          {{#if editing}}
            {{>swatches}}
            <a className="mtr_done-editing"><strong>{{>iconFile}} Done</strong></a>
          {{else}}
            <ul>
              <li><a className="drawing-edit mtr_edit-drawing"><strong>{{>iconEdit}} Edit</strong></a></li>
              <li><a className="bad mtr_delete-drawing"><small>{{>iconTrash}} Delete</small></a></li>
            </ul>
          {{/if}}
        </aside>
      </div>
    );
  }
});

if(Meteor.isServer) {
  Meteor.methods({
    likeDrawing(drawingId, currentUserId) {
      Drawings.update(drawingId, {$push: {likedBy: currentUserId}});
    },

    unlikeDrawing(drawingId, currentUserId) {
      Drawings.update(drawingId, {$pull: {likedBy: currentUserId}});
    },

    updateDrawing(drawingId, cells) {
      Drawings.update(drawingId, {
        $set: {cells: cells}
      });
    },

    deleteDrawing(drawingId) {
      Drawings.remove(drawingId);
    }
  });
}
