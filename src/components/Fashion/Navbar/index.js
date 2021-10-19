import { Text } from '../../Essentials/Essentials'
import styled from 'styled-components';

export default function Navbar () {
  const Navbar = styled.div`
    width: 10%;
    justify-content: end;
    position: fixed;
    margin-top: 5%;
  `;
  return (
    // <Navbar>
      <Text h1>Navbar</Text>
    // </Navbar>
  )
}