import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="g-4">
          {/* About */}
          <Col md={3}>
            <h5 className="text-white mb-3">Bark N Boujee</h5>
            <p className="small mb-3">
              Professional dog grooming services with a personal touch. Your
              pet's comfort and happiness is our priority.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/BarkNBoujeeGrooming"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="social-icon"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/barknboujeegrooming/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="social-icon"
              >
                <Instagram size={20} />
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
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="mb-2">
                <Link to="/staff">Our Team</Link>
              </li>
              <li className="mb-2">
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li className="mb-2">
                <Link to="/login">Rewards Program</Link>
              </li>
              <li className="mb-2">
                <Link to="/admin/login">Staff Portal</Link>
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
                  <a
                    href="tel:+13128255921"
                    className="text-white text-decoration-none"
                  >
                    (312) 825-5921
                  </a>
                </div>
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
                <span>Mon - Sat:</span>
                <span>8AM - 5PM</span>
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
            &copy; 2026 Bark N Boujee. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
