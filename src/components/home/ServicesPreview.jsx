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
          <p className="lead" style={{ color: "#2b303a", opacity: "1" }}>
            Professional grooming services tailored to your pet's needs
          </p>
        </div>

        {/* Services Grid */}
        <Row className="g-4 mb-5">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={3}>
              <Card
                className="h-100 position-relative"
                style={{
                  border: "none",
                  borderRadius: "1rem",
                  backgroundColor: "#fff9fb",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Card.Body className="p-4">
                  <Card.Title
                    className="h5 mb-3"
                    style={{ color: "#2b303a", fontWeight: "700" }}
                  >
                    {service.name}
                  </Card.Title>
                  <Card.Text
                    className="mb-3"
                    style={{ color: "#2b303a", fontSize: "0.95rem" }}
                  >
                    {service.description}
                  </Card.Text>
                  <div
                    className="fw-bold mb-3"
                    style={{ color: "#e6d18c", fontSize: "1.5rem" }}
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
              backgroundColor: "#c2c5bb",
              borderColor: "#c2c5bb",
              color: "#fff9fb",
              fontWeight: "600",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              boxShadow: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2b303a";
              e.target.style.borderColor = "#2b303a";
              e.target.style.color = "#fff9fb";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#c2c5bb";
              e.target.style.borderColor = "#c2c5bb";
              e.target.style.color = "#fff9fb";
            }}
          >
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
