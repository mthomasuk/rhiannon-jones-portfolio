import React, {Component} from 'react';
import './Header.css';
import Mask from './Mask';
import Button from '../components/Button';

const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

class Header extends Component {

  componentDidMount() {
      const debouncedScroll = debounce(this.handleScroll, 25);
      document.addEventListener('scroll', debouncedScroll);
  }

  componentWillUnmount() {
      const debouncedScroll = debounce(this.handleScroll, 25);
      document.removeEventListener('scroll', debouncedScroll);
  }

  handleScroll = () => {
      const headerButtons = document.getElementsByClassName('Header-Buttons')[0];
      if(window.scrollY > 750) {
          headerButtons.classList.add('Scrolled');
      } else {
          headerButtons.classList.remove('Scrolled');
      }
  }

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
            <Button href="tel:+447717746135" title="Call" classExtension="Twos-Up"/>
          </div>
        </div>
        <Mask classExtension="Orange"/>
      </section>
    );
  }
}

export default Header;
