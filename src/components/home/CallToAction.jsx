import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Calendar, Gift, Award, Heart } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="py-5 cta-gradient"
      style={{
        background: "linear-gradient(135deg, #0c7c59 0%, #0a6347 100%)",
        color: "#fff9fb",
      }}
    >
      <Container>
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
                variant="light"
                size="lg"
                className="d-flex align-items-center justify-content-center gap-2 shadow"
                style={{
                  backgroundColor: "#ffe2d1",
                  borderColor: "#ffe2d1",
                  color: "#2b303a",
                  fontWeight: "600",
                }}
              >
                <Calendar size={20} />
                Book Appointment
              </Button>
              <Button
                as={Link}
                to="/login"
                variant="outline-light"
                size="lg"
                className="d-flex align-items-center justify-content-center gap-2"
                style={{
                  borderWidth: "2px",
                  color: "#ffe2d1",
                  borderColor: "#fff9fb",
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
              className="text-center p-3 rounded"
              style={{ backgroundColor: "rgba(97, 226, 148, 0.2)" }}
            >
              <Gift size={40} className="mb-2" style={{ color: "#61e294" }} />
              <h5 className="fw-bold mb-1">Earn Points</h5>
              <small>Get 10 points for every $1 spent</small>
            </div>
          </Col>
          <Col md={4}>
            <div
              className="text-center p-3 rounded"
              style={{ backgroundColor: "rgba(97, 226, 148, 0.2)" }}
            >
              <Award size={40} className="mb-2" style={{ color: "#61e294" }} />
              <h5 className="fw-bold mb-1">Tier Benefits</h5>
              <small>Unlock exclusive perks as you climb</small>
            </div>
          </Col>
          <Col md={4}>
            <div
              className="text-center p-3 rounded"
              style={{ backgroundColor: "rgba(97, 226, 148, 0.2)" }}
            >
              <Heart size={40} className="mb-2" style={{ color: "#61e294" }} />
              <h5 className="fw-bold mb-1">Special Rewards</h5>
              <small>Free services & birthday treats</small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
