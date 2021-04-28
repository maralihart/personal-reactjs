import React from 'react';
import {Row, Col} from 'react-bootstrap';
import headshot from './headshot.png';

function About() {
  return (
    <Row>
      <Col xs={12} md={5}>
        <img src={headshot} height="100%" width="100%" style={{objectFit: 'contain'}} alt="Headshot of Mara Hart" />
      </Col>
      <Col xs={12} md={7}>
        <div className="mb-4">
          <h2>Mara Hart</h2>
          <p>Hi, I'm Mara, a fourth year undergraduate CS major at the University of Virginia, graduating in December 2021!</p>
          <p>Hi, I'm Mara Hart, a CS major at the University of Virginia's School of Engineering, graduating in December 2021! Since I was young, I was always intrigued by technology and the idea of making something out of seemingly nothing. Though I didn't start understanding code until college, I've learned Python, Java, and C++ and am now exploring the applications of React and React Native in real-world applications.</p>
          <p>A fun fact about me is that I actually stream on Twitch (twitch.tv/MaraDrinksMilk) where I showcase me working on personal projects as well as workshops to help other coders get started in the field! </p>
        </div>
        {/* <div className="my-4">
          <h2>Contact Me</h2>
          <p>If you need to reach me, feel free to email me or connect via LinkedIn!</p>
          <p>hello@mara.fyi</p>
          <a href="https://linkedin.com/in/maralihart"><p>LinkedIn</p></a>
          <p>Charlottesville, Virginia</p>
        </div> */}
        <button>Check Out My Resume!</button>
      </Col>
    </Row>
  );
}

export default About;
