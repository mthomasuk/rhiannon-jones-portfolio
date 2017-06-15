import React, {Component} from 'react';
import './Header.css';
import Mask from './Mask';
import Button from '../components/Button';

class Header extends Component {
  render() {
    return (
      <section>
        <div className="Header">
          <div className="Header-Headline">
            <h1>Rhiannon Jones</h1>
            <h2>Freelance<br/>UX Writer</h2>
          </div>
          <div className="Header-Content">
            <h3>Rhiannon has a wealth of experience writing effective copy for some of the biggest brands in the world.</h3>
            <p>She believes that words are a crucial part of any customer experience, and specialises in delivering robust insight-driven content built on research, followed by continuous testing and improvement. She works at the forefront of innovative content creation, delivered within a UX framework.</p>
          </div>
          <div className="Header-Buttons">
            <Button href="mailto:rhiannon.f.jones@gmail.com" title="Email" classExtension="Twos-Up"/>
            <Button href="tel:07890333777" title="Call" classExtension="Twos-Up"/>
          </div>
        </div>
        <Mask classExtension="Orange"/>
      </section>
    );
  }
}

export default Header;
