import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="btn">
        {this.props.title}
      </div>
    )
  }
}

export default Button;