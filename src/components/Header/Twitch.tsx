import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TwitchIcon from './twitch-logo.png';

function Twitch() {
  return (
    <div className="my-5">
      <a className="live" href="https://www.twitch.tv/MaraDrinksMilk" target="_blank" rel="noopener noreferrer">
        <Row id="live">
          <Col><h2 className="pt-1 live">LIVE</h2></Col>
          <Col><img src={TwitchIcon} height="40px" alt="Twitch Icon"/></Col>
        </Row>
      </a>
    </div>
  );
}

export default Twitch;
