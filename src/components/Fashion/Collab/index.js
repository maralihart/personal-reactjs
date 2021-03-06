import { Email, Text } from '../../Essentials/Essentials'

export default function Collab (props) {
  return (
    <div id={props.id}>
      <h2 className="header">Collab</h2>
      <img src="https://images.pexels.com/photos/660266/pexels-photo-660266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="200px" height="200px" alt="Headshot of Mara Hart"/>
      {/* TODO: Make the email link work */}
      <p>Speel about me as a content creator</p>
      {/* TODO: Include a media kit */}
      <p>Download my media kit</p>
      <p>If you'd like to collab, feel free to reach out at <a href={Email} target="_blank" rel="noreferrer">pr@mara.fyi</a></p>
    </div>
  )
}