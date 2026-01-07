import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="g-4">
          {/* About */}
          <Col md={3}>
            <h5 className="text-white mb-3">Pawfect Grooming</h5>
            <p className="small mb-3">
              Professional dog grooming services with a personal touch. Your
              pet's comfort and happiness is our priority.
            </p>
            <div className="d-flex gap-3">
              <a href="#">
                <Facebook size={20} />
              </a>
              <a href="#">
                <Instagram size={20} />
              </a>
              <a href="#">
                <Twitter size={20} />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/services">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/staff">Our Team</Link>
              </li>
              <li className="mb-2">
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li className="mb-2">
                <Link to="/rewards">Rewards Program</Link>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h5 className="text-white mb-3">Contact Us</h5>
            <ul className="list-unstyled small">
              <li className="mb-2 d-flex gap-2">
                <Phone size={16} className="mt-1" />
                <div>
                  <div>(555) 123-4567</div>
                  <div>(555) 234-5678</div>
                </div>
              </li>
              <li className="mb-2 d-flex gap-2">
                <Mail size={16} className="mt-1" />
                <span>info@pawfectgrooming.com</span>
              </li>
              <li className="mb-2 d-flex gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Chicago, IL</span>
              </li>
            </ul>
          </Col>

          {/* Hours */}
          <Col md={3}>
            <h5 className="text-white mb-3">Hours</h5>
            <ul className="list-unstyled small">
              <li className="mb-1 d-flex justify-content-between">
                <span>Mon - Wed:</span>
                <span>9AM - 6PM</span>
              </li>
              <li className="mb-1 d-flex justify-content-between">
                <span>Thu - Fri:</span>
                <span>9AM - 7PM</span>
              </li>
              <li className="mb-1 d-flex justify-content-between">
                <span>Saturday:</span>
                <span>10AM - 5PM</span>
              </li>
              <li className="mb-1 d-flex justify-content-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <div className="text-center small">
          <p className="mb-0">
            &copy; 2025 Pawfect Grooming. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
