import Faves from './Faves'
import Home from './Home'
import Looks from './Looks'
import Collab from './Collab'
import { Left, Right } from '../Essentials/Essentials'
import About from './About'
import Navbar from './Navbar'
import { Row } from 'react-bootstrap'

export default function Fashion () {
  return (
    <Row>
      <Left>
        <Home id="home"/>
        <About id="about"/>
        <Looks id="looks"/>
        <Faves id="faves"/>
        <Collab id="collab"/>
      </Left>
      <Right>
        <Navbar />
      </Right>
    </Row>
  )
}