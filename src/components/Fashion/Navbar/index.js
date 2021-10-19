import { Text } from '../../Essentials/Essentials'
import styled from 'styled-components';

export default function Navbar () {
  const Navbar = styled.div`
    background-color: 'black';
    color: 'grey';
  `;
  return (
    <Navbar>
      <Text h1>Navbar</Text>
    </Navbar>
  )
}