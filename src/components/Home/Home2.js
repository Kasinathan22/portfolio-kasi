import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple">HTML/CSS, Tailwind ss Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  UI/UX.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Work Experience Section */}
        <Col md={12} className="home-about-work">
        <h1 style={{ marginBottom: "70px" }}>EXPERIENCE</h1>


  {/* Klenty - Software Engineer Intern */}
  <div className="work-experience">
    <Row>
      <Col md={6}>
        <h3>Klenty, Chennai, India</h3>
        <p>
          <strong>Software Engineer Intern – Call IQ</strong>
          <br />
          <span className="duration">November 2024 - December 2024</span>
        </p>
      </Col>
      <Col md={6}>
        <ul  style={{ fontSize: "12px" }}>
          <li>
            Developed a Call Summary Page with drag-and-drop functionality and interactive checkboxes, improving user engagement by 30%.
          </li>
          <li>
            Implemented clean and reusable components, ensuring scalability and maintainability of the codebase, reducing developer coding time and increasing productivity by 20%.
          </li>
        </ul>
      </Col>
    </Row>
  </div>

  {/* Weboin - Front-End Developer Intern */}
  <div className="work-experience">
    <Row>
      <Col md={6}>
        <h3>Weboin, Chennai, India</h3>
        <p>
          <strong>Front-End Developer Intern</strong>
          <br />
          <span className="duration">May 2024 - October 2024</span>
        </p>
      </Col>
      <Col md={6}>
        <ul style={{ fontSize: "12px" }}>
          <li>
            Svipes – Static Promotional Website: Created an interactive, multi-section complex static site with Next.js and Tailwind CSS, attaining 100% responsiveness for cross-device access and ensured complete accessibility. Optimized SEO strategy, resulting in a 35% increase in search engine rankings and visibility.
          </li>
          <li>
            MaxGold – Multi-Page Client Website: Designed a clean multi-page layout with fully responsive designs, scoring a 95% mobile usability score. Optimized assets and refactored code to improve page load times by 40% and overall performance.
          </li>
        </ul>
      </Col>
    </Row>
  </div>
</Col>



      </Container>
    </Container>
  );
}

export default Home2;
