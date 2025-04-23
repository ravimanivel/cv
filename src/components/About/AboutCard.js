import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ravi M </span>
            from <span className="purple"> Salem, Tamilnadu, India.</span>
            <br />
            I am currently employed as a web developer at Bishop Heber College.
            <br />
            I have completed BSc in Computer Science from <b className="purple">Bishop Heber College</b>, Trichy.
            <br />    
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What ever happens life has to go on"{" "}
          </p>
          <footer className="blockquote-footer">ravi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
