import request from 'graphql-request';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import pfp from '../../assets/profile.jpg';
import TikTokIcon from '../../assets/tiktok-logo.png';
import InstagramIcon from '../../assets/instagram-logo.png';
import { Instagram, TikTok, LinkButton, secondary } from '../Essentials/Essentials';

export default function Links() {

  const [links, setLinks] = useState([{ 'title': '', 'link': '', 'id': '', 'discount': '' }]);

  useEffect(() => {
    const fetchLinks = async () => {
      const { links } = await request(
        "https://api-us-east-1.graphcms.com/v2/cknukiy6yga6w01yzfte93hr7/master",
        `
          {
            links {
              id
              link
              title
              discount
            }
          }
        `
      );
      setLinks(links.reverse());
    };    fetchLinks();
  }, []);

  return (
    <>
      <Row style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "20px 0 7px 0"
      }}>
        <a href={Instagram} target="_blank" rel="noreferrer noopener">
          <img src={InstagramIcon} width={isMobile ? "40px" : "80px"} alt="Instagram logo" />
        </a>
        <img
          className="circle"
          src={pfp}
          width="125px" height="125px"
          alt="Mara drinking juice at brunch" />
        <a href={TikTok} target="_blank" rel="noreferrer noopener">
          <img src={TikTokIcon} width={isMobile ? "35px" : "75px"} alt="Tiktok logo" />
        </a>
      </Row>
      <h1 className="text-center">mara</h1>
      {/* <h2 className="text-center">assalamu alaiykum</h2> */}
      <Row style={{ justifyContent: "space-evenly", alignItems: "center" }}>
        <p className="text-center">collab: pr@mara.fyi</p>
        <p style={{ background: secondary, padding: "10px"}}><a className="text-white" href="./MARA_HART_MEDIAKIT_PUBLIC.pdf" 
        download="MARA_HART_MEDIAKIT">
          download media kit</a></p>
      </Row>
      <Col>
        {/* TODO: Add support button <LinkDropdownButton>support me</LinkDropdownButton> */}
        {links.map((item) => <LinkButton link={item.link} key={item.id}>{item.title.toLowerCase()}{item.discount && ` | ${item.discount.toUpperCase()} to save`}</LinkButton>)}
      </Col>
    </>
  );
}