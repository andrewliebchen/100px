Icon = React.createClass({
  propTypes: {
    name: React.PropTypes.oneOf(['clock', 'heart', 'user', 'trash', 'edit', 'file']).isRequired
  },

  renderIcon() {
    switch (this.props.name){
      case 'clock':
      return (
        <g>
          <rect x="3" y="3" width="3" height="3"/>
          <rect x="6" width="9" height="3"/>
          <rect x="15" y="3" width="3" height="3"/>
          <polygon points="12,6 9,6 9,12 15,12 15,9 12,9"/>
          <rect y="6" width="3" height="9"/>
          <rect x="3" y="15" width="3" height="3"/>
          <rect x="15" y="15" width="3" height="3"/>
          <rect x="18" y="6" width="3" height="9"/>
          <rect x="6" y="18" width="9" height="3"/>
        </g>
      );
      case 'heart':
        return (
          <g>
            <rect x="3" width="6" height="3"/>
            <rect x="12" width="6" height="3"/>
            <rect x="9" y="3" width="3" height="3"/>
            <rect x="3" y="12" width="3" height="3"/>
            <rect x="6" y="15" width="3" height="3"/>
            <rect x="9" y="18" width="3" height="3"/>
            <rect x="15" y="12" width="3" height="3"/>
            <rect x="12" y="15" width="3" height="3"/>
            <rect x="18" y="3" width="3" height="9"/>
            <rect y="3" width="3" height="9"/>
          </g>
        );
      case 'user':
        return (
          <g>
            <rect x="6" y="3" width="3" height="6"/>
            <polygon points="15,0 15,12 12,12 12,15 6,15 6,18 12,18 12,21 21,21 21,0 "/>
          </g>
        );
      case 'trash':
        return <path d="M12,3V0H9v3H0v3h3v15h15V6h3V3H12z M15,18H6V6h3h3h3V18z"/>;
      case 'edit':
        return (
          <g>
            <polygon points="0,0 0,6 3,6 3,3 6,3 6,0 "/>
            <polygon points="21,0 15,0 15,3 18,3 18,6 21,6 "/>
            <polygon points="21,21 21,15 18,15 18,18 15,18 15,21 "/>
            <polygon points="0,21 6,21 6,18 3,18 3,15 0,15 "/>
            <rect x="9" width="3" height="3"/>
            <rect x="9" y="18" width="3" height="3"/>
            <rect x="18" y="9" width="3" height="3"/>
            <rect x="0" y="9" width="3" height="3"/>
          </g>
        );
      case 'file':
        return (
          <g>
            <path d="M18,6V3h-3V0H0v21h21V6H18z M18,18H3V3h9v6h6V18z"/>
            <rect x="6" y="6" width="3" height="3"/>
            <rect x="6" y="12" width="3" height="3"/>
            <rect x="12" y="12" width="3" height="3"/>
          </g>
        );
    }
  },

  render() {
    return (
      <svg version="1.1" viewBox="0 0 21 21" className="icon">
        {this.renderIcon()}
      </svg>
    );
  }
});
