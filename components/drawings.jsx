Drawings = React.createClass({
  render() {
    return (
      <div className="drawings">
        {{#each drawing}}
          {{>drawingContent}}
        {{/each}}
      </div>
    );
  }
});
