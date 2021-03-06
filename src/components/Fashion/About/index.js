import { Row } from 'react-bootstrap'
import { Instagram, TikTok } from '../../Essentials/Essentials'

export default function About (props) {
  return (
    <div id={props.id}>
      <h2 className="header">About</h2>
      <Row>
        <img src="https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="200px" height="200px" alt="Headshot of Mara Hart"/>
        <div style={{ width: "75%", marginLeft: "20px" }}>
          <p>Salaam, I’m a Virginia-based modest fashion/lifestyle content creator on platforms like <a href={TikTok} target="_blank" rel="noreferrer">TikTok</a> and <a href={Instagram} target="_blank" rel="noreferrer">Instagram</a> I review modest businesses and love to highlight Muslim-owned brands. I also enjoy sharing useful hacks that I find help me in my everyday life! Fun fact: I’m also a software developer and designed and developed this site. If you’d like to hear more about that side, check out the <a href="/tech">tech</a> page.</p>
          <Row>
            {/* TODO: Include socials here */}
          </Row>
        </div>
      </Row>
    </div>
  )
}