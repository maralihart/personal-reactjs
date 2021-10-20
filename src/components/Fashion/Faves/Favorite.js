import { Col, Row } from "react-bootstrap";
import { Card, primary } from "../../Essentials/Essentials";


export default function Favorite (props) {
  // orientation is whether the image is on the left or right
  return (
    <div style={{ marginBottom: "15px" }}>
      <Card width="100%" height="150px" background={primary} noPadding>
        <Row>
          <img src={props.img} height="150px" width="150px" alt={props.alt}/>
          <Col style={{ paddingTop: "10px" }}>
            <p className="white"><strong>{props.brand}</strong></p>
            <p className="white"><strong>{props.product}</strong></p>
            <p className="white">{props.description}</p>
            {props.discount && <p className="white">Use code {props.discount} to save $$</p>}
          </Col>
        </Row>
      </Card>
    </div>
  )
}