import { Card, Column, Text } from '../../Essentials/Essentials'
import styled from 'styled-components';

export default function Navbar (props) {
  const NavbarCard = styled.div`
    background-color: 'black';
    color: 'grey';
    display: 'block';
  `;
  return (
    <div id={props.id}>
      <Card background="grey" width="150px" height="215px">
        <Column>
          <Text p><a href="#home">home</a></Text>
          <Text p><a href="#about">about</a></Text>
          <Text p><a href="#looks">looks</a></Text>
          <Text p><a href="#faves">faves</a></Text>
          <Text p><a href="#collab">collab</a></Text>
          <Text p><a href="/tech">tech</a></Text>
        </Column>
      </Card>
    </div>
  )
}