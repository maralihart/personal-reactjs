import React from "react";
import {Row, Col} from 'react-bootstrap';
import JobList from "./JobList";
// import Twitch from './Twitch';
import GitHub from '../../assets/github-icon.svg';
import LinkedIn from '../../assets/linkedin-icon.svg';
import StickerMe from '../../assets/sticker mara hart.png';
import { isMobile } from 'react-device-detect';
import { ChevronsDown, DownloadCloud } from 'react-feather';

function Header() {

  const currently: string[] = ["Major League Hacking Coach", "Intel Design Automation Intern"];
  const previously: string[] = ["Girls Who Code at Founding President ", "2x Microsoft Software Engineer Intern", "Elevate Meal Plan Mobile App Development Intern"];

  return (
    <>
      {/* <Twitch /> */}
      <Row className="my-5 py-4">
        <Col xs={12} sm={6}>
          <h1>Mara.</h1>
          <h2>software developer</h2>
          <Col>
            <Row className="mt-3">
              <a className="mr-5" href="https://github.com/maralihart" target="_blank" rel="noopener noreferrer">
                <img src={GitHub} alt="GitHub" />
              </a>
              <a className="mr-5" href="https://linkedin.com/in/maralihart" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
              <a className="mr-5" href="https://drive.google.com/file/d/1j55uUwp-R0fGbf1Tz1MSkYywvyZQSQIe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <DownloadCloud color="white" size={50} />
              </a>
            </Row>
          </Col>
          <JobList title="Currently" jobList={currently} />
          <JobList title="Previously" jobList={previously} />
        </Col>

        {!isMobile && <Col xs={6} className="justify-content-center">
          <img src={StickerMe} alt="Sticker version of Mara, provided by MLH" width="75%" />
        </Col>}
      </Row>

      <Row className="justify-content-center mb-3 mt-3">
        <a href="#about"><ChevronsDown color="white" size={48}/></a>
      </Row>
      {/* scroll down */}
    </>
  );
}

export default Header;