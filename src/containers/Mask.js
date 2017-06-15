import React, {Component} from 'react';
import './Mask.css';

class Mask extends Component {
  render() {
    const {classExtension} = this.props;
    return (
      <div className={`Mask${classExtension
        ? ' ' + classExtension
        : ''}`}></div>
    );
  }
}

export default Mask;
