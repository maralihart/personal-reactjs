import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export function Row(props) {
  return (
    <div style={{ flexDirection: 'row' }}>
      { props.children }
    </div>
  );
}

export function Text(props) {

  const h1 = {
    font: "Spartan",
    weight: 900,
    size: 48,
    letter_spacing: "15%",
    color: "black",
    text_transform: "lowercase",
  }

  const h2 = {
    font: "Source Sans Pro",
    text_transform: "uppercase",
    weight: 700,
    size: 36,
    letter_spacing: "10%",
    color: "black"
  }

  const h3 = {
    font: "Spartan",
    weight: 700,
    size: 28,
    letter_spacing: "15%",
    color: "black",
    text_transform: "lowercase",
  }

  const p = {
    font: "Source Sans Pro",
    weight: 400,
    size: 18,
    letter_spacing: "15%",
    color: "black"
  }

  const mobile_h1 = {
    font: "Spartan",
    weight: 900,
    size: 32,
    letter_spacing: "15%",
    color: "black",
    text_transform: "lowercase",
  }

  const mobile_h2 = {
    font: "Source Sans Pro",
    text_transform: "uppercase",
    weight: 700,
    size: 24,
    letter_spacing: "15%",
    color: "black"
  }

  const mobile_h3 = {
    font: "Spartan",
    weight: 700,
    size: 18,
    letter_spacing: "15%",
    color: "black",
    text_transform: "lowercase",
  }

  const mobile_p = {
    font: "Source Sans Pro",
    weight: 400,
    size: 14,
    letter_spacing: "15%",
    color: "black"
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
    font-color: ${props.color ? props.color : mode.color};
    letter-spacing: ${mode.letter_spacing};
    font-family: ${mode.font};
    text-transform: ${mode.text_transform && mode.text_transform};
    text-align: ${props.center && "center"};
  `
  // font-family: ${mode.font};

  return (
    <Text>
      { props.children }
    </Text>
  );
}

export const TikTok = "https://tiktok.com/@maradrinksmilk"
export const Instagram = "https://instagram.com/mi.lk"
export const Email = "mailto:pr@mara.fyi"