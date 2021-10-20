import { primary, Text } from '../../Essentials/Essentials'

export default function Home (props) {
  return (
    <div id={props.id}>
      <h1 color={primary}>mara hart</h1>
      <h2>modest fashion content creator</h2>
      <img width="80%" height="500px" src="https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Probably some kind of look"/>
      <h3>I'll put a tagline here</h3>
    </div>
  )
}