import { Col, Row } from "react-bootstrap";

export default function MenuItem({ menuName, price, description }) {

  return (
    <>
      <Row style={{ width: '100%' }} className="pt-2"  >
        <Col sm={8}>
          <Row>
            <Col>
              <h5>{menuName}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ fontSize: '16px' }} >{description}</p>
            </Col>
          </Row>
        </Col>
        <Col sm={4} className="d-flex align-items-center justify-content-center" >
          <p>{price}</p>
        </Col>
      </Row>
    </>
  )
}