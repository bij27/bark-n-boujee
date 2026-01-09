import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer py-5" style={{ backgroundColor: "#2b303a" }}>
      <Container>
        <Row className="g-4">
          {/* About */}
          <Col md={3}>
            <h5 className="mb-3" style={{ color: "#fff9fb" }}>
              Bark N Boujee
            </h5>
            <p className="small mb-3" style={{ color: "#fff9fb" }}>
              The happiest, boujee-est grooming shop in Chicago.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/BarkNBoujeeGrooming"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="social-icon"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(97, 226, 148, 0.2)",
                  color: "#fff9fb",
                  transition: "all 0.3s ease",
                }}
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/barknboujeechicago/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="social-icon"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(97, 226, 148, 0.2)",
                  color: "#fff9fb",
                  transition: "all 0.3s ease",
                }}
              >
                <Instagram size={20} />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3}>
            <h5 className="mb-3" style={{ color: "#fff9fb" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="/services" style={{ color: "#fff9fb" }}>
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/gallery" style={{ color: "#fff9fb" }}>
                  Gallery
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/staff" style={{ color: "#fff9fb" }}>
                  Our Team
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/testimonials" style={{ color: "#fff9fb" }}>
                  Testimonials
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/login" style={{ color: "#fff9fb" }}>
                  Rewards Program
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/admin/login" style={{ color: "#fff9fb" }}>
                  Staff Portal
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h5 className="mb-3" style={{ color: "#fff9fb" }}>
              Contact Us
            </h5>
            <ul className="list-unstyled small">
              <li className="mb-2 d-flex gap-2">
                <Phone
                  size={16}
                  className="mt-1"
                  style={{ color: "#61e294" }}
                />
                <div>
                  <a
                    href="tel:+13128255921"
                    className="text-decoration-none"
                    style={{ color: "#fff9fb" }}
                  >
                    (312) 825-5921
                  </a>
                </div>
              </li>
              <li className="mb-2 d-flex gap-2">
                <MapPin
                  size={16}
                  className="mt-1"
                  style={{ color: "#61e294" }}
                />
                <span style={{ color: "#fff9fb" }}>Chicago, IL</span>
              </li>
            </ul>
          </Col>

          {/* Hours */}
          <Col md={3}>
            <h5 className="mb-3" style={{ color: "#fff9fb" }}>
              Hours
            </h5>
            <ul className="list-unstyled small">
              <li
                className="mb-1 d-flex justify-content-between"
                style={{ color: "#fff9fb" }}
              >
                <span>Mon - Sat:</span>
                <span>8AM - 5PM</span>
              </li>
              <li
                className="mb-1 d-flex justify-content-between"
                style={{ color: "#fff9fb" }}
              >
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </Col>
        </Row>

        <hr
          style={{ borderColor: "rgba(97, 226, 148, 0.3)", margin: "2rem 0" }}
        />

        <div className="text-center small" style={{ color: "#fff9fb" }}>
          <p className="mb-0">
            &copy; 2026 Bark N Boujee. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
