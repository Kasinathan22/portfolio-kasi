import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Invoice from "../../Assets/Invoice.png";
import svipes from "../../Assets/svipes.webp";
import Gamehu from "../../Assets/Gamehu.webp";
import Bone from "../../Assets/Bone.webp";

function Projects() {
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Invoice}
              isBlog={false}
              title="Invoice Generate"
              description="A streamlined invoicing tool featuring pre-designed templates and integrated GST API for automatic tax calculations. It simplifies the process of creating professional invoices, ensuring compliance with tax regulations while saving time and effort."
              ghLink="https://github.com/Kasinathan22/Bill"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bone}
              isBlog={false}
              title="Bone"
              description="A clean and simple website designed to showcase skills, projects, and achievements. It highlights personal expertise and experience through an organized layout, serving as a professional digital resume.
"
                          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gamehu}
              isBlog={false}
              title="Game-Hub"
              description="Game-Hub is an innovative website designed to sell online games and provide the latest gaming news. It features an intuitive layout for browsing and purchasing games, alongside a dedicated section for news and updates to keep gaming enthusiasts informed"
              demoLink="https://lokeshgandhi19.github.io/GameHub/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={svipes}
              isBlog={false}
              title="Svipes"
              description="Svipes is a visually stunning promotion website designed to showcase key features with modern animations and responsive design. It emphasizes a user-friendly interface and captivating visuals to engage users and highlight the product's value effectively."
              demoLink="https://svipes.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;