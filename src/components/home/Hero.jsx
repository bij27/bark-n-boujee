import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Calendar, Award, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#fff9fb",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      {/* Giant Background Logo - Fixed */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          opacity: "0.05",
          zIndex: "0",
          pointerEvents: "none",
        }}
      >
        <img
          src="/images/bark-n-boujee-logo.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Content - Above the logo */}
      <Container style={{ position: "relative", zIndex: "1" }}>
        <Row className="align-items-center g-5">
          {/* Left Content */}
          <Col lg={6}>
            <h1 className="display-3 fw-bold mb-4" style={{ color: "#2b303A" }}>
              Professional Dog Grooming with a
              <span
                style={{
                  color: "#2b303A",
                  WebkitTextFillColor: "#ffe2d1",
                  display: "inline",
                }}
              >
                {" "}
                Boujee Touch
              </span>
            </h1>
            <p
              className="lead mb-4"
              style={{ color: "#2b303A", opacity: "0.9" }}
            >
              Expert care for your furry family members. Book your appointment
              today and see why Chicago's pet parents trust us with their
              beloved companions.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
              <Button
                as={Link}
                to="/book"
                size="lg"
                className="d-flex align-items-center justify-content-center gap-2"
                style={{
                  backgroundColor: "#61e294",
                  borderColor: "#0c7c59",
                  color: "#2b303a",
                  fontWeight: "600",
                }}
              >
                <Calendar size={20} />
                Book Appointment
              </Button>
              <Button
                as={Link}
                to="/services"
                size="lg"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "#fff9fb",
                  borderWidth: "2px",
                  color: "#fff9fb",
                }}
              >
                View Services
              </Button>
            </div>

            {/* Features */}
            <Row className="g-4">
              <Col sm={4}>
                <div className="d-flex gap-3">
                  <div
                    className="text-white p-2 rounded"
                    style={{
                      height: "fit-content",
                      backgroundColor: "#ffe2d1",
                    }}
                  >
                    <Award size={24} style={{ color: "#2b303a" }} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: "#2b303A" }}>
                      Expert Groomers
                    </h6>
                    <small style={{ color: "#2b303A", opacity: "0.8" }}>
                      Professional care
                    </small>
                  </div>
                </div>
              </Col>

              <Col sm={4}>
                <div className="d-flex gap-3">
                  <div
                    className="text-white p-2 rounded"
                    style={{
                      height: "fit-content",
                      backgroundColor: "#ffe2d1",
                    }}
                  >
                    <Heart size={24} style={{ color: "#2b303a" }} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: "#2b303A" }}>
                      Gentle Care
                    </h6>
                    <small style={{ color: "#2b303A", opacity: "0.8" }}>
                      Stress-free experience
                    </small>
                  </div>
                </div>
              </Col>

              <Col sm={4}>
                <div className="d-flex gap-3">
                  <div
                    className="text-white p-2 rounded"
                    style={{
                      height: "fit-content",
                      backgroundColor: "#ffe2d1",
                    }}
                  >
                    <Award size={24} style={{ color: "#2b303a" }} />
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ color: "#2b303A" }}>
                      Premium Products
                    </h6>
                    <small style={{ color: "#2b303A", opacity: "0.8" }}>
                      Natural & safe
                    </small>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Right Image */}
          <Col lg={6}>
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop"
                alt="Happy groomed dog"
                className="img-fluid rounded-4 shadow-lg"
                style={{ border: "4px solid #0c7c59" }}
              />
              {/* Floating card */}
              <Card
                className="position-absolute shadow-lg floating-card"
                style={{
                  bottom: "-30px",
                  left: "-30px",
                  maxWidth: "250px",
                  border: "2px solid #fff9fb",
                  backgroundColor: "#fff9fb",
                }}
              >
                <Card.Body>
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="text-white p-3 rounded-circle"
                      style={{ backgroundColor: "rgba(97, 226, 148, 0.2)" }}
                    >
                      <Award size={32} style={{ color: "#0c7c59" }} />
                    </div>
                    <div>
                      <h3
                        className="h2 fw-bold mb-0"
                        style={{ color: "#2b303a" }}
                      >
                        500+
                      </h3>
                      <div className="text-primary">Happy Customers</div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
