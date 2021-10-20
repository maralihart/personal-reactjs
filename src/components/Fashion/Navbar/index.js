import { Card, Column, secondary, Text } from '../../Essentials/Essentials'
import styled from 'styled-components';

export default function Navbar (props) {
  return (
    <div 
      id={props.id} 
      className="navbar" 
      style={{
        width: "14%",
        position: "fixed",
        display: "flex",
        right: "5%",
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
      }}>
      <Card background={secondary} width="150px" height="200px">
        <Column>
          <p><a href="#home">home</a></p>
          <p><a href="#about">about</a></p>
          <p><a href="#looks">looks</a></p>
          <p><a href="#faves">faves</a></p>
          <p><a href="#collab">collab</a></p>
          <p><a href="/tech">tech</a></p>
        </Column>
      </Card>
    </div>
  )
}