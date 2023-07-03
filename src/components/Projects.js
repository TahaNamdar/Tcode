import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/tahacode.png";
import projImg5 from "../assets/img/transport.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tahacode.vercel.app",
      description: "Design",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup - Tretanet",
      description: "Development",
      imgUrl: projImg2,
    },
    {
      title: "rms.nsw.gov.au",
      description: "Refactor and Development",
      imgUrl: projImg5,
    },
  
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>you can follow me on <a target="_blank" href='https://github.com/TahaNamdar'>github.com/TahaNamdar</a></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education History</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Working History</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <h3 style={{textAlign:'center'}}>Tehran-north-branch</h3>
                      <h5 style={{textAlign:'center', color:'gold'}}>IT Enginner</h5>
                      <p>Bachelor</p>
                      <br/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h3 style={{textAlign:'center'}}>React Developer - Freelancer- Self employed · Full-time</h3>
                      <h5 style={{textAlign:'center', color:'gold'}}>Jan 2022 - Present</h5>
                      <p>Designed and developed a Website builder app by ReactJs and Typescript Whole app designed by Styled-Component Refactored, redesigned, some web application with React native </p>
                      <br/> 
                       <h3 style={{textAlign:'center'}}>React Developer - Tabaneshahr</h3>
                      <h5 style={{textAlign:'center', color:'gold'}}>Jan 2021 - Nov 2021 · 11 mos</h5>
                      <p> Designed a fabric shop app with adobe xd and figma Refactored, redesigned, 2 web applications Discovered and resolved 100% of existing bugs and coded new features.</p>
                      <br/>
                      <h3 style={{textAlign:'center'}}>Frontend Developer Rahkarmarket · Full-time</h3>
                      <h5 style={{textAlign:'center', color:'gold'}}>Aug 2020 - Mar 2021 · 8 mos</h5>
                      <p>Developing a web application for 8 months with jQuery Developed and designed a PanelAdmin</p>
                      <br/>
                      <h3 style={{textAlign:'center'}}>Internship Frontend Developer Freelancer- Self employed</h3>
                      <h5 style={{textAlign:'center', color:'gold'}}>Mar 2020 - Nov 2020 · 9 mos</h5>
                      <p>I learned Html ,Css ,Javascript ,React ,Redux ,Typescript (self-study) I was really eager to learn new things, I started to learn patiently and I joined a little front team. I developed many websites and pushed them on gitlab and github Such as shopping cart - portfolio I developed 1 application which that get your gitlab token and show all project</p>
                      <br/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
