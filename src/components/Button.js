import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

  onClick = () => {
    const {href} = this.props;
    return window.location = href;
  }

  render() {
    const {classExtension, title} = this.props;
    return (
      <div onClick={this.onClick}
        className={`Button${classExtension
        ? ' ' + classExtension
        : ''}`}>
          {title}
      </div>
    );
  }
}

export default Button;
