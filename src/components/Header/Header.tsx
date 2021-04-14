import React from "react";
import {Row, Col} from 'react-bootstrap';
import JobList from "./JobList";
import Twitch from './Twitch';

function Header() {

  const currently: string[] = ["Major League Hacking Coach", "Girls Who Code at UVA Technical Lead", "CS1501 Teaching Assistant", "Twitch Content Creator"];
  const previously: string[] = ["Microsoft Software Engineer Intern", "Girls Who Code at Founding President ", "Kode With Klossy Instructor Assistant"];

  return (
    <Row>
      <Col>
        <Twitch />
        <h1>Mara.</h1>
        <h2>software developer</h2>
        {/* Social Media */}
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
