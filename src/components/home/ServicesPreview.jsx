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
    <section className="py-5" style={{ backgroundColor: "#0c7c59" }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#fff9fb" }}>
            Our Services
          </h2>
          <p className="lead text-muted">
            Professional grooming services tailored to your pet's needs
          </p>
        </div>

        {/* Services Grid */}
        <Row className="g-4 mb-5">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="h-100 border-0 shadow-sm card-hover position-relative">
                {service.popular && (
                  <Badge
                    className="badge-popular"
                    style={{
                      backgroundColor: "#ffe2d1",
                      color: "#2b303a",
                    }}
                  >
                    Popular
                  </Badge>
                )}
                <Card.Body>
                  <Card.Title className="h5 mb-3" style={{ color: "#2b303a" }}>
                    {service.name}
                  </Card.Title>
                  <Card.Text className="text-primary mb-3">
                    {service.description}
                  </Card.Text>
                  <div
                    className="fw-bold fs-5 mb-3"
                    style={{ color: "#0c7c59" }}
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
              backgroundColor: "#0c7c59",
              borderColor: "#0c7c59",
              color: "#fff9fb",
              fontWeight: "600",
            }}
          >
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
