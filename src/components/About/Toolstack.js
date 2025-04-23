import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
   DiLinux,
   DiTerminal,
   DiUbuntu,
  DiJava,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu />
      </Col>
    </Row>
  );
}

export default Toolstack;
