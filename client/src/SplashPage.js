import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./index.css";
import twitterContainer from "./clipart-2-13-12-55-41.png";

function SplashPage() {
  return (
    <Container className="container splash-main" fluid>
      <Row>
        <Col className="d-inline mt-5 mb-5">
        <h2 id="welcome" className="welcome-text text-center">Welcome To Twitter Mashup</h2>
        <Image className="d-block mt-3 mb-4 ml-5 mx-auto twitter-logo" src={twitterContainer} />
        </Col>
      </Row>
    
    </Container>
  );
}

export default SplashPage;
