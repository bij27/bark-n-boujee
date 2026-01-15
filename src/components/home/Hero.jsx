import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "url('/images/greenpatternbackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      {/* Giant Background Logo - Fixed */}
      <div
        style={{
          position: "fixed",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1200px",
          height: "1200px",
          opacity: "1",
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
          {/* Left Content - EMPTY SPACE PRESERVED */}
          <Col lg={6}>
            <div style={{ minHeight: "500px" }}>
              {/* Space reserved for future content */}
            </div>
          </Col>

          {/* Right Side - EMPTY SPACE */}
          <Col lg={6}>
            <div style={{ minHeight: "500px" }}>
              {/* Space reserved for future content */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
