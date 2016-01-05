const colors = [
  'black',
  'white',
  'gray',
  'aqua',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'fuchsia'
];

Swatches = React.createClass({
  PropTypes: {
    currentColor: React.PropTypes.string,
    selectColor: React.PropTypes.func
  },

  render() {
    return (
      <div className="swatches">
        {colors.map((color, i) => {
          let className = classnames({
            'swatch': true,
            'cell': this.props.currentColor === color
          });
          return (
            <div
              className={`className color-${color}`}
              onClick={this.props.selectColor.bind(null, color)}/>
          );
        })}
      </div>
    );
  }
});
