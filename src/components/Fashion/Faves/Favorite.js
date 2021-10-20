import { Col, Row } from "react-bootstrap";
import { Card, primary } from "../../Essentials/Essentials";


export default function Favorite (props) {
  // orientation is whether the image is on the left or right
  const { item } = props
  return (
    <div style={{ marginBottom: "15px" }}>
      <Card width="100%" height="150px" background={primary} noPadding>
        <a href={item.link} target="_blank" rel="noreferrer" className="favorite" style={{ textDecoration: "none", width: "100%", height:"150px"}}>
          <Row>
            <img src={item.img} height="150px" width="150px" alt={item.alt}/>
            <Col style={{ paddingTop: "10px" }}>
              <p className="white"><strong>{item.brand}</strong></p>
              <p className="white"><strong>{item.product}</strong></p>
              <p className="white">{item.description}</p>
              {item.discount && <p className="white">Use code {item.discount} to save $$</p>}
            </Col>
          </Row>
        </a>
      </Card>
    </div>
  )
}