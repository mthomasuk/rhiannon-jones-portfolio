import React, {Component} from 'react';
import './Link.css';

class Link extends Component {
  render() {
    const {classExtension, href, title, alt} = this.props;
    return (
      <a className={`Link${classExtension
        ? ' ' + classExtension
        : ''}`} href={href} alt={alt}>
        {title}
      </a>
    );
  }
}

export default Link;
