import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const services = [
  {
    name: "Full Service - Small",
    description:
      "Complete luxury grooming including bath, haircut, nail trim, blueberry facial, and finishing touches",
    price: "Starting at $110",
    popular: true,
  },
  {
    name: "Full Service - Medium",
    description:
      "Our signature experience with premium products, customized haircut, and chic bow tie or bandana",
    price: "Starting at $130",
    popular: true,
  },
  {
    name: "Full Service - Large",
    description:
      "Complete grooming package tailored for larger breeds with extra attention and care",
    price: "Starting at $150",
    popular: true,
  },
  {
    name: "Puppy Introduction",
    description:
      "Gentle first grooming experience for pups under 6 months to build confidence",
    price: "Starting at $70",
    popular: false,
  },
];

export default function ServicesPreview() {
  return (
    <section
      className="py-5"
      style={{
        background: "url('/images/greenpatternbackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#fff9fb" }}>
            Our Services
          </h2>
          <p className="lead" style={{ color: "#fff9fb", opacity: "0.9" }}>
            Professional grooming services tailored to your pet's needs
          </p>
        </div>

        {/* Services Grid */}
        <Row className="g-4 mb-5">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={3}>
              <Card
                className="h-100 shadow-sm card-hover position-relative"
                style={{
                  border: "2px solid #2b303a",
                  borderRadius: "1rem",
                  backgroundColor: "#ffe2d1",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                {service.popular && (
                  <Badge
                    className="position-absolute"
                    style={{
                      top: "15px",
                      right: "15px",
                      backgroundColor: "#61e294",
                      color: "#2b303a",
                      padding: "0.5rem 1rem",
                      fontWeight: "600",
                      fontSize: "0.75rem",
                    }}
                  >
                    Popular
                  </Badge>
                )}
                <Card.Body className="p-4">
                  <Card.Title
                    className="h5 mb-3"
                    style={{ color: "#2b303a", fontWeight: "700" }}
                  >
                    {service.name}
                  </Card.Title>
                  <Card.Text
                    className="mb-3"
                    style={{ color: "#6c757d", fontSize: "0.95rem" }}
                  >
                    {service.description}
                  </Card.Text>
                  <div
                    className="fw-bold mb-3"
                    style={{ color: "#0c7c59", fontSize: "1.5rem" }}
                  >
                    {service.price}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* CTA */}
        <div className="text-center">
          <Button
            as={Link}
            to="/services"
            size="lg"
            style={{
              backgroundColor: "#61e294",
              borderColor: "#61e294",
              color: "#2b303a",
              fontWeight: "600",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              boxShadow: "0 4px 14px rgba(97, 226, 148, 0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(97, 226, 148, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 14px rgba(97, 226, 148, 0.4)";
            }}
          >
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
