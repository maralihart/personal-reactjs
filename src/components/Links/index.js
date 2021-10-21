import request from 'graphql-request';
import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import pfp from '../../assets/brunch_pic.jpeg';
import TikTokIcon from '../../assets/tiktok-logo.png';
import InstagramIcon from '../../assets/instagram-logo.png';
import { Instagram, TikTok, LinkButton } from '../Essentials/Essentials';

export default function Links() {

  const [links, setLinks] = useState([{ 'title': '', 'link': '', 'id': '' }]);

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
        margin: "20px 0"
      }}>
        <a href={Instagram} target="_blank" rel="noreferrer noopener">
          <img src={InstagramIcon} width="28px" alt="Instagram logo" />
        </a>
        <img
          className="circle"
          src={pfp}
          width="125px" height="125px"
          alt="Mara drinking juice at brunch" />
        <a href={TikTok} target="_blank" rel="noreferrer noopener">
          <img src={TikTokIcon} width="28px" alt="Tiktok logo" />
        </a>
      </Row>
      <h1 className="text-center">mara</h1>
      <h2 className="text-center">assalamu alaiykum</h2>
      <Row style={{ justifyContent: "space-evenly" }}>
        <p className="text-center">collab: pr@mara.fyi</p>
        {/* TODO: Add download link to media kit */}
        <p><a href="#">download media kit</a></p>
      </Row>
      <Col>
        <LinkButton>brand name here | MARA to save</LinkButton>
        <LinkButton>support me</LinkButton>
        {/* <Row className="mt-3 mx-0">
          <Button className="py-3" href="https://discord.gg/evMxtJ8nmA" target="_ blank" block>muslimah discord server</Button>
        </Row>
        {links.map((item) =>
          <Row className="mt-3 mx-0" key={item.id}>
            <Button className="py-3 button full-width smaller-text" href={item.link} target="_ blank" block>{item.title}</Button>
          </Row>)} */}
      </Col>
    </>
  );
}