import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h4>Middle Level Frontend-Developer </h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/taha-namdar-367283168/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/taha__namdar" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Taha Namdar . 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
