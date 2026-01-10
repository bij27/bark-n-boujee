import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Award, Sparkles, Heart } from "lucide-react";

const services = [
  {
    id: "nail-grind",
    name: "Nail Grind",
    price: "Starting at $20",
    popular: false,
    description:
      "Professional nail grinding service to keep your pup's paws healthy and comfortable.",
    features: [
      "Gentle nail grinding",
      "Smooth finish",
      "Quick and stress-free",
    ],
  },
  {
    id: "puppy-intro",
    name: "Puppy Introduction",
    price: "Starting at $70",
    popular: true,
    tagline: "The First-Timer Experience",
    description:
      "Designed for pups under 6 months, this gentle introduction helps them build confidence and love the grooming process from day one.",
    features: [
      "Gentle bath with mild, puppy-safe shampoo",
      "Soft fluff dry & gentle handling throughout",
      "Nail trim, ear cleaning & light brush-out",
      "Face, paw, and sanitary tidy to introduce the basics",
      "Teeth brushing & soothing blueberry facial",
      "Sweet finishing touch: bow tie or bandana",
    ],
    note: "Our goal is simple — create a positive, calm grooming foundation for a lifetime of stress-free visits.",
  },
  {
    id: "full-small",
    name: "Full Service - Small",
    price: "Starting at $110",
    popular: true,
    tagline: "A Signature Bark N Boujee Experience",
    description:
      "Our full-service groom gives your pup a complete, luxury refresh.",
    features: [
      "Gentle bath with premium, natural shampoo + conditioner",
      "Soothing blueberry facial",
      "Fluff dry with nourishing leave-in conditioner",
      "Nail trimming, ear cleaning, and full coat brush-out",
      "Teeth brushing for fresh breath and healthy smile",
      "Customized haircut tailored to your pup's breed and style",
      "Chic finishing touch: bow tie, bandana, or ear bows",
    ],
    note: "Your pup will leave feeling polished, pampered, and ready to turn heads.",
  },
  {
    id: "full-medium",
    name: "Full Service - Medium",
    price: "Starting at $130",
    popular: true,
    tagline: "A Signature Bark N Boujee Experience",
    description:
      "Our full-service groom gives your pup a complete, luxury refresh.",
    features: [
      "Gentle bath with premium, natural shampoo + conditioner",
      "Soothing blueberry facial",
      "Fluff dry with nourishing leave-in conditioner",
      "Nail trimming, ear cleaning, and full coat brush-out",
      "Teeth brushing for fresh breath and healthy smile",
      "Customized haircut tailored to your pup's breed and style",
      "Chic finishing touch: bow tie, bandana, or ear bows",
    ],
    note: "Your pup will leave feeling polished, pampered, and ready to turn heads.",
  },
  {
    id: "full-large",
    name: "Full Service - Large",
    price: "Starting at $150",
    popular: true,
    tagline: "A Signature Bark N Boujee Experience",
    description:
      "Our full-service groom gives your pup a complete, luxury refresh.",
    features: [
      "Gentle bath with premium, natural shampoo + conditioner",
      "Soothing blueberry facial",
      "Fluff dry with nourishing leave-in conditioner",
      "Nail trimming, ear cleaning, and full coat brush-out",
      "Teeth brushing for fresh breath and healthy smile",
      "Customized haircut tailored to your pup's breed and style",
      "Chic finishing touch: bow tie, bandana, or ear bows",
    ],
    note: "Your pup will leave feeling polished, pampered, and ready to turn heads.",
  },
  {
    id: "full-xlarge",
    name: "Full Service - X Large",
    price: "Starting at $190",
    popular: false,
    tagline: "A Signature Bark N Boujee Experience",
    description:
      "Our full-service groom gives your pup a complete, luxury refresh.",
    features: [
      "Gentle bath with premium, natural shampoo + conditioner",
      "Soothing blueberry facial",
      "Fluff dry with nourishing leave-in conditioner",
      "Nail trimming, ear cleaning, and full coat brush-out",
      "Teeth brushing for fresh breath and healthy smile",
      "Customized haircut tailored to your pup's breed and style",
      "Chic finishing touch: bow tie, bandana, or ear bows",
    ],
    note: "Your pup will leave feeling polished, pampered, and ready to turn heads.",
  },
];

export default function Services() {
  return (
    <div
      style={{
        background: "url('/images/greenpatternbackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Giant Background Logo - Fixed position */}
      <div
        style={{
          position: "fixed",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1200px",
          height: "1200px",
          opacity: "0.3",
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

      <Container style={{ position: "relative", zIndex: "1" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold mb-3" style={{ color: "#fff9fb" }}>
            Our Services
          </h1>
          <p className="lead mb-4" style={{ color: "#2b303a", opacity: "0.9" }}>
            Luxury grooming experiences tailored to your pup's needs
          </p>
          <Button
            as={Link}
            to="/book"
            size="lg"
            style={{
              backgroundColor: "#61e294",
              borderColor: "#61e294",
              color: "#2b303a",
              fontWeight: "600",
            }}
          >
            Book Appointment
          </Button>
        </div>

        {/* Services Grid */}
        <Row className="g-4 services-grid">
          {services.map((service) => (
            <Col key={service.id} xs={12} lg={6}>
              <Card
                className="shadow h-100"
                style={{
                  border: "2px solid #E6D18C",
                  borderRadius: "0.5rem",
                  backgroundColor: "#fff9fb",
                  boxShadow: "0 4px 14px rgba(230, 209, 140, 0.4)",
                }}
              >
                <Card.Body className="p-4">
                  {/* Header */}
                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start mb-3 gap-2">
                    <div>
                      <h3 className="h4 mb-2" style={{ color: "#2b303a" }}>
                        {service.name}
                      </h3>
                      <div
                        className="fw-bold mb-2"
                        style={{ color: "#E6D18C", fontSize: "1.5rem" }}
                      >
                        {service.price}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-primary mb-4">{service.description}</p>

                  {/* Features List */}
                  <div className="mb-3">
                    <h6 className="fw-bold mb-3" style={{ color: "#2b303a" }}>
                      What's Included:
                    </h6>
                    <ul className="mb-0">
                      {service.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note */}
                  {service.note && (
                    <div
                      className="p-3 rounded mt-4"
                      style={{ backgroundColor: "rgba(230, 209, 140, 0.1)" }}
                    >
                      <small className="text-primary fst-italic">
                        {service.note}
                      </small>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-4">
                    <Button
                      as={Link}
                      to="/book"
                      className="w-100"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "#E6D18C",
                        color: "#E6D18C",
                      }}
                    >
                      Book This Service
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Bottom CTA */}
        <div
          className="text-center mt-5 p-4 p-md-5 rounded-4 cta-section shadow"
          style={{
            backgroundColor: "#fff9fb",
            border: "2px solid #E6D18C",
            color: "#2b303A",
            boxShadow: "0 4px 14px rgba(230, 209, 140, 0.4)",
          }}
        >
          <h3 className="fw-bold mb-3">
            Not Sure Which Service is Right for Your Pup?
          </h3>
          <p className="lead mb-4" style={{ opacity: "0.9" }}>
            Give us a call and we'll help you choose the perfect grooming
            experience.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Button
              href="tel:+13128255921"
              size="lg"
              className="shadow"
              style={{
                backgroundColor: "#61e294",
                borderColor: "#61e294",
                color: "#2b303a",
                fontWeight: "600",
              }}
            >
              Call: (312) 825-5921
            </Button>
            <Button
              as={Link}
              to="/book"
              size="lg"
              style={{
                backgroundColor: "transparent",
                borderWidth: "2px",
                color: "#2b303a",
                borderColor: "#E6D18C",
              }}
            >
              Book Online
            </Button>
          </div>
        </div>

        {/* Additional Info */}
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
              <Award
                size={40}
                className="mb-3"
                style={{ color: "#FF3C38", opacity: ".7" }}
              />
              <h5 className="fw-bold mb-2" style={{ color: "#fff9fb" }}>
                Expert Groomers
              </h5>
              <small style={{ color: "#fff9fb", opacity: "0.9" }}>
                Our experienced team knows how to handle every breed and
                temperament with care.
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
              <Sparkles
                size={40}
                className="mb-3"
                style={{ color: "#FF3C38", opacity: ".7" }}
              />
              <h5 className="fw-bold mb-2" style={{ color: "#fff9fb" }}>
                Premium Products
              </h5>
              <small style={{ color: "#fff9fb", opacity: "0.9" }}>
                We use only natural, high-quality shampoos and conditioners that
                are gentle on your pup's skin.
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
              <Heart
                size={40}
                className="mb-3"
                style={{ color: "#FF3C38", opacity: ".7" }}
              />
              <h5 className="fw-bold mb-2" style={{ color: "#fff9fb" }}>
                Stress-Free Experience
              </h5>
              <small style={{ color: "#fff9fb", opacity: "0.9" }}>
                We take extra time with nervous or anxious pets to ensure they
                feel safe and comfortable.
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
