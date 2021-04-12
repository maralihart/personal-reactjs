import React from 'react';
import {Row, Col} from 'react-bootstrap';

function About() {
  return (
    <Row>
      <Col xs={12} md={4}>
        <img src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="604px" alt="Headshot of Mara Hart"/>
      </Col>
      <Col xs={12} md={8}>
        <h2>Mara Hart</h2>
        <p>This is where I type more about me and let others know who I am!</p>
        <h2>Contact Me</h2>
        <p>hello@mara.fyi</p>
        <p>Charlottesville, Virginia</p>
        <button>Check Out My Resume!</button>
      </Col>
    </Row>
  );
}

export default About;
