Swatches = React.createClass({
  PropTypes: {
    currentColor: React.PropTypes.string,
    selectColor: React.PropTypes.func
  },

  getInitialState() {
    return {
      colors: [
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
      ]
    }
  },

  render() {
    return (
      <div className="swatches">
        {this.state.colors.map((color, i) => {
          let swatchClassName = classnames({
            'swatch': true,
            'cell': this.props.currentColor === color
          });
          return (
            <div
              key={i}
              className={`${swatchClassName} color-${color}`}
              onClick={this.props.selectColor.bind(null, color)}/>
          );
        })}
      </div>
    );
  }
});
