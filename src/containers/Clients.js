import React, {Component} from 'react';
import './Clients.css';
import Mask from './Mask';
import Button from '../components/Button';

class Clients extends Component {
  render() {
    return (
      <section>
        <div className="Clients">
          <div className="Clients-Headline">
            <h2>Clients</h2>
          </div>
          <div className="Clients-Content">
            <p>Rhiannon's past roles include content strategy at Microsoft and work for clients such as Thomson &amp; First Choice Holidays, Coca-Cola, Skype, Experian, EasyJet and eBay, along with high-street banks and major rail operators.</p>
            <p>She has just finished work on designing and crafting all content for BOXT, a world-first online boiler service.</p>
          </div>
          <div className="Clients-Buttons">
            <Button href="/portfolio" title="View Portfolio" classExtension="Two-Tone"/>
          </div>
        </div>
        <Mask classExtension="Teal"/>
        <Mask classExtension="Green"/>
        <Mask classExtension="Dark-Green"/>
      </section>
    );
  }
}

export default Clients;
