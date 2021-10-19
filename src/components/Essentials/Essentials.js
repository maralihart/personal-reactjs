import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export function Row(props) {
  return (
    <div style={{ flexDirection: 'row' }}>
      { props.children }
    </div>
  );
}

export function Column(props) {
  return (
    <div style={{ flexDirection: 'column' }}>
      { props.children }
    </div>
  );
}

export function Card(props) {
  return (
    <div style={{ 
      background: props.background, 
      width: props.width, 
      height: props.height,
      justifyContent: 'center',
      padding: '10px 25px',
      lineheight: '6px',
      }}>
      {props.children}
    </div>
  )
}

export function Text(props) {

  const h1 = {
    font: "Spartan",
    weight: 900,
    size: 48,
    letter_spacing: "15%",
    text_transform: "lowercase",
  }

  const h2 = {
    font: "Source Sans Pro",
    text_transform: "uppercase",
    weight: 700,
    size: 36,
    letter_spacing: "10%",
  }

  const h3 = {
    font: "Spartan",
    weight: 700,
    size: 28,
    letter_spacing: "15%",
    text_transform: "lowercase",
  }

  const p = {
    font: "Source Sans Pro",
    weight: 400,
    size: 18,
    letter_spacing: "15%",
  }

  const mobile_h1 = {
    font: "Spartan",
    weight: 900,
    size: 32,
    letter_spacing: "15%",
    text_transform: "lowercase",
  }

  const mobile_h2 = {
    font: "Source Sans Pro",
    text_transform: "uppercase",
    weight: 700,
    size: 24,
    letter_spacing: "15%",
  }

  const mobile_h3 = {
    font: "Spartan",
    weight: 700,
    size: 18,
    letter_spacing: "15%",
    text_transform: "lowercase",
  }

  const mobile_p = {
    font: "Source Sans Pro",
    weight: 400,
    size: 14,
    letter_spacing: "15%",
  }

  let mode;

  if (props.h1) {
    if (isMobile) mode = mobile_h1
    else mode = h1
  } else if (props.h2) {
    if (isMobile) mode = mobile_h2
    else mode = h2
  } else if (props.h3) {
    if (isMobile) mode = mobile_h3
    else mode = h3
  } else {
    if (isMobile) mode = mobile_p
    else mode = p
  }

  const Text = styled.p`
    font-size: ${mode.size + "px"};
    font-weight: ${props.bold ? 700 : mode.weight};
    font-color: ${props.color ? props.color : "black"};
    letter-spacing: ${mode.letter_spacing};
    font-family: ${mode.font};
    text-transform: ${mode.text_transform && mode.text_transform};
    text-align: ${props.center && "center"};
    margin-bottom: ${props.p && '5px'};
  `
  // font-family: ${mode.font};

  return (
    <Text>
      { props.children }
    </Text>
  );
}

export function Left(props) {
  const Left = styled.div`
    width: 75%;
  `;

  return (
    <Left>
      {props.children}
    </Left>
  )
}

export function Right(props) {
  const Right = styled.div`
    width: 14%;
    position: fixed;
    display: flex;
    right: 5%;
    justify-content: center;
    align-items: center;
    height: 50%;
  `;

  return (
    <Right>
      {props.children}
    </Right>
  )
}

export const TikTok = "https://tiktok.com/@maradrinksmilk"
export const Instagram = "https://instagram.com/mi.lk"
export const Email = "mailto:pr@mara.fyi"