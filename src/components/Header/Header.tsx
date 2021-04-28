import React from "react";
import {Row, Col} from 'react-bootstrap';
import JobList from "./JobList";
import Twitch from './Twitch';
import GitHub from './github-icon.svg';
import LinkedIn from './linkedin-icon.svg';
import Email from './email-icon.svg';

function Header() {

  const currently: string[] = ["Major League Hacking Coach", "Girls Who Code at UVA Technical Lead", "CS1501 Teaching Assistant", "Twitch Content Creator"];
  const previously: string[] = ["Microsoft Software Engineer Intern", "Girls Who Code at Founding President ", "Kode With Klossy Instructor Assistant"];

  return (
    <Row className="mb-3">
      <Col>
        <Twitch />
        <h1>Mara.</h1>
        <h2 className="mb-5">software developer</h2>
        <Col xs={11} sm={5} className="mb-5">
          <Row className="justify-content-between mb-4">
            <a href="https://github.com/maralihart" target="_blank" rel="noopener noreferrer">
              <img src={GitHub} alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/maralihart" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Email} alt="Email" />
            </a>
          </Row>
        </Col>
        <JobList title="Currently" jobList={currently} />
        <JobList title="Previously" jobList={previously} />
      </Col>
      <Col>
        {/* Transparent Photo Of Me */}
      </Col>
    </Row>
  );
}

export default Header;