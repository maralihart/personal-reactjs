import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import TwitchIcon from '../../assets/twitch-logo.png';
import axios from 'axios';

function Twitch() {
  const [online, setOnline] = useState(false);

  // Thanks to twitch.tv/WebsiteDesign for the help!
  const url = 'https://api.twitch.tv/helix/search/channels?query=MaraDrinksMilk';
  const config = {
      headers: {
          client_id: process.env.REACT_APP_TWITCH_CLIENT,
          Authorization: 'Bearer ' + process.env.REACT_APP_TWITCH_SECRET
      }
  };

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(url, config)
      console.log(response.data);
    }
    fetchItems();
    // setOnline(dummyVar);
    // const fetchItems = async () => {
    //   const { items } = await request(
    //     process.env.REACT_APP_GRAPHCMS_ENDPOINT ? process.env.REACT_APP_GRAPHCMS_ENDPOINT : "",
    //     `
    //       { 
    //         items {
    //           values
    //         }
    //       }
    //     `
    //   );
    //   setValue(items);
    // };

    // fetchItems();
  }, []);

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
