import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Calendar, Gift, Award, Heart } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="py-5"
      style={{
        background: "url('/images/greenpatternbackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff9fb",
        position: "relative",
      }}
    >
      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row className="align-items-center py-5">
          <Col lg={7} className="mb-4 mb-lg-0">
            <h2 className="display-4 fw-bold mb-3">
              Ready to Pamper Your Pup?
            </h2>
            <p className="lead mb-0 opacity-90">
              Book your appointment today and join our rewards program to start
              earning points with every visit!
            </p>
          </Col>

          <Col lg={5}>
            <div className="d-flex flex-column gap-3">
              <Button
                as={Link}
                to="/book"
                size="lg"
                className="d-flex align-items-center justify-content-center gap-2 shadow"
                style={{
                  backgroundColor: "#61e294",
                  borderColor: "#61e294",
                  color: "#2b303a",
                  fontWeight: "600",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  boxShadow: "0 4px 14px rgba(97, 226, 148, 0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(97, 226, 148, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 4px 14px rgba(97, 226, 148, 0.4)";
                }}
              >
                <Calendar size={20} />
                Book Appointment
              </Button>
              <Button
                as={Link}
                to="/login"
                size="lg"
                className="d-flex align-items-center justify-content-center gap-2"
                style={{
                  backgroundColor: "transparent",
                  borderWidth: "2px",
                  color: "#fff9fb",
                  borderColor: "#fff9fb",
                  fontWeight: "600",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                <Gift size={20} />
                Join Rewards Program
              </Button>
            </div>
          </Col>
        </Row>

        {/* Rewards Benefits */}
        <Row className="mt-5 g-4">
          <Col md={4}>
            <div
              className="text-center p-4 rounded"
              style={{
                backgroundColor: "rgba(255, 249, 251, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 249, 251, 0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 249, 251, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Gift size={40} className="mb-3" style={{ color: "#61e294" }} />
              <h5 className="fw-bold mb-2">Earn Points</h5>
              <small style={{ opacity: "0.9" }}>
                Get 10 points for every $1 spent
              </small>
            </div>
          </Col>
          <Col md={4}>
            <div
              className="text-center p-4 rounded"
              style={{
                backgroundColor: "rgba(255, 249, 251, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 249, 251, 0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 249, 251, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Award size={40} className="mb-3" style={{ color: "#61e294" }} />
              <h5 className="fw-bold mb-2">Tier Benefits</h5>
              <small style={{ opacity: "0.9" }}>
                Unlock exclusive perks as you climb
              </small>
            </div>
          </Col>
          <Col md={4}>
            <div
              className="text-center p-4 rounded"
              style={{
                backgroundColor: "rgba(255, 249, 251, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 249, 251, 0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 249, 251, 0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Heart size={40} className="mb-3" style={{ color: "#61e294" }} />
              <h5 className="fw-bold mb-2">Special Rewards</h5>
              <small style={{ opacity: "0.9" }}>
                Free services & birthday treats
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
