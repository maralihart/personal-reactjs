import Faves from './Faves'
import Home from './Home'
import Looks from './Looks'
import Collab from './Collab'
import { Row, Text } from '../Essentials/Essentials'
import About from './About'
import Navbar from './Navbar'
import styled from 'styled-components';

export default function Fashion () {
  const Left = styled.div`
    width: 75%;
  `;
  return (
    <Row>
      <Left>
        <Home />
        <About />
        <Looks />
        <Faves />
        <Collab />
      </Left>
      <Text h1>cry</Text>
      <Navbar />
    </Row>
  )
}