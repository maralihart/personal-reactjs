import request from 'graphql-request';
import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import pfp from '../../assets/brunch_pic.jpeg';
import TwitterIcon from '../../assets/twitter-logo.svg';
import TwitchIcon from '../../assets/twitch-logo.png';
import DiscordIcon from '../../assets/discord-logo-blurple.svg';
import TikTokIcon from '../../assets/tiktok-logo.png';
import InstagramIcon from '../../assets/instagram-logo.png';

function Links() {
  
  const [links, setLinks] = useState([{'title': '', 'link': '', 'id': ''}]);
  
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
      setLinks(links);
    };

    fetchLinks();
  }, []);

  return (
    <Col>
      <Row className="justify-content-around pt-5 pb-3">
        <img 
          className="img-circle" 
          src={pfp}
          width="125px" height="125px" 
          alt="Mara drinking juice at brunch"/>
      </Row>
      <Row className="justify-content-center">
        <h2>@MaraDrinksMilk</h2>
        <p className="text-center">👋 Hi, I'm Mara!</p>
      </Row>
      <Row className="justify-content-center my-2 faded-bg py-3 rounded">
        <Col>
          <a href="https://twitch.tv/MaraDrinksMilk" target="_blank" rel="noreferrer noopener">
            <img src={TwitchIcon} width="28px" alt="Twitch logo"/>
          </a>
        </Col>
        <Col>
          <a href="https://discord.gg/ebMsPKpkBu" target="_blank" rel="noreferrer noopener">
            <img src={DiscordIcon} width="28px" alt="Discord logo"/>
          </a>
        </Col>
        <Col>
          <a href="https://instagram.com/mi.lk" target="_blank" rel="noreferrer noopener">
            <img src={InstagramIcon} width="28px" alt="Instagram logo"/>
          </a>
        </Col>
        <Col>
          <a href="https://tiktok.com/@maradrinksmilk" target="_blank" rel="noreferrer noopener">
            <img src={TikTokIcon} width="28px" alt="Tiktok logo"/>
          </a>
        </Col>
        <Col>
          <a href="https://twitter.com/maradrinksmilk" target="_blank" rel="noreferrer noopener">
            <img src={TwitterIcon} width="28px" alt="Twitter logo"/>
          </a>
        </Col>
      </Row>
      <Col>
        {links.map((item) => 
          <Row className="mt-3 mx-2" key={item.id}>
            <Button className="py-3 button" href={item.link} block>{item.title}</Button>
          </Row>)}
      </Col>
    </Col>
  );
}

export default Links;