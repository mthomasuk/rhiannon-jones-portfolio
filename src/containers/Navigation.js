import React, {Component} from 'react';
import './Navigation.css';
import Link from '../components/Link';

class Navigation extends Component {
  render() {
    return (
      <section>
        <div className="Navigation">
          <Link href="/" alt="Home" title="Home" classExtension="Threes-Up"/>
          <Link href="/work" alt="Work" title="Work" classExtension="Threes-Up"/>
          <Link href="/contact" alt="Contact" title="Contact" classExtension="Threes-Up"/>
        </div>
      </section>
    );
  }
}

export default Navigation;
