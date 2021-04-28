import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Headshot from '../../assets/headshot.png';
import { isMobile } from 'react-device-detect';
import { DownloadCloud } from 'react-feather';

function About() {
  return (
    <Row id="about" className="pt-4">
      <Col xs={12} md={5} className={isMobile ? "mb-3" : ""}>
        <img src={Headshot} height="100%" width="100%" style={{objectFit: 'contain'}} alt="Headshot of Mara Hart" />
      </Col>
      <Col xs={12} md={7} className="justify-content-around">
        <div className="mb-4">
          <h2>Mara Hart</h2>
          <p>Hi, I'm Mara Hart, a CS major at the University of Virginia's School of Engineering, graduating in December 2021! Since I was young, I was always intrigued by technology and the idea of making something out of seemingly nothing. Though I didn't start understanding code until college, I've learned Python, Java, and C++ and am now exploring the applications of React and React Native in real-world applications.</p>
          <p>A fun fact about me is that I actually stream on <a href="twitch.tv/MaraDrinksMilk" target="_blank" rel="noopener noreferrer">Twitch</a> where I showcase me working on personal projects as well as workshops to help other coders get started in the field! </p>
        </div>
        <div className="mb-4">
          <h2>Contact Me</h2>
          <p>If you need to reach me, feel free to connect via <a href="https://linkedin.com/in/maralihart" target="_blank" rel="noopener noreferrer" className="text-blue font-weight-bold">LinkedIn</a>!</p>
        </div>
        <div className="my-5"><a className="button" href="https://drive.google.com/file/d/1j55uUwp-R0fGbf1Tz1MSkYywvyZQSQIe/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check Out My Resume! <DownloadCloud color="white" size={24} /></a></div>
      </Col>
    </Row>
  );
}

export default About;
