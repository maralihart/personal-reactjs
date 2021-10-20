import { Card, secondary } from '../../Essentials/Essentials'
import { Col } from 'react-bootstrap'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar (props) {
  return (
    <div 
      id={props.id} 
      className="navbar" 
      style={{
        width: "12%",
        position: "fixed",
        display: "flex",
        right: "5%",
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
      }}>
      <Card background={secondary} width="130px" height="180px">
        <Col>
        <p className="white">
          <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}>
              home
          </Link>
          <br/>
          <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}>
              about
          </Link>
          <br/>
          <Link
              activeClass="active"
              to="looks"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}>
              looks
          </Link>
          <br/>
          <Link
              activeClass="active"
              to="faves"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}>
              faves
          </Link>
          <br/>
          <Link
              activeClass="active"
              to="collab"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}>
              collab
          </Link>
          <br/><a href="/tech">tech</a></p>
        </Col>
      </Card>
    </div>
  )
}