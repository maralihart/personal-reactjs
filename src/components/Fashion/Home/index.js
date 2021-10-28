import { Row } from 'react-bootstrap'
import { Card, primary } from '../../Essentials/Essentials'

export default function Home (props) {
  return (
    <div id={props.id}>
      <h1 color={primary}>mara hart</h1>
      <h2 style={{ marginBottom: "30px" }}>modest fashion content creator</h2>
      <Row>
        <img width="80%" height="500px" src="https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Probably some kind of look"/>
        <div style={{
          position: "absolute",
          right: "25%",
          top: "30%"
        }}>
          <Card 
            width="300px" 
            height="200px" 
            background={primary} 
            center>
            <h3 className="white" style={{ margin: "15px" }}>i need to fill something in here.</h3>
          </Card>
        </div>
      </Row>
    </div>
  )
}