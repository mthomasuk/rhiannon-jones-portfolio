import React, {Component} from 'react';
import './WhatAreYouDoing.css';

class WhatAreYouDoing extends Component {
  render() {
    return (
      <section>
        <div className="WhatAreYouDoing">
          <div className="WhatAreYouDoing-Headline">
            <h2>What She Can <strong>Do</strong></h2>
          </div>
          <div className="WhatAreYouDoing-Content">
            <ul>
              <li>Collaborate closesly with UX designers, researchers, UI designers, product managers and engineers</li>
              <li>Use agile methodology to deliver outstanding content, fast, shaped by continuous feedback</li>
              <li>Drive a vision for content across digital products</li>
              <li>Design pages, modules and content chunks based on user needs &amp; content goals</li>
              <li>Take part in research to inform and improve the writing process</li>
              <li>Act as a company-wide "go to" for user experience writing</li>
              <li>Be an evangelist for readibility and usability</li>
              <li>Hypothesise, test and iterate content against product KPIs</li>
              <li>Present work to clients, and manage stakeholders and feedback</li>
              <li>Develop concepts and turn them into projects</li>
              <li>Provide data-informed insights to improve experiences</li>
              <li>Help colleagues to become better writers, by sharing best practice, collaborating, running training or just by setting a good example</li>
              <li>Create usable, practical tone of voice guidelines - for a range of writing abilities and job roles</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default WhatAreYouDoing;
