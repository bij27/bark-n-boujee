import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Scissors, Sparkles, Heart, Wind } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Full Grooming",
    description:
      "Complete grooming package including bath, cut, nails, and more",
    price: "From $75",
    popular: true,
  },
  {
    icon: Sparkles,
    name: "Bath & Brush",
    description:
      "Thorough bath with premium shampoo and professional brush out",
    price: "From $45",
    popular: true,
  },
  {
    icon: Heart,
    name: "Nail Trim",
    description: "Quick and gentle nail trimming service",
    price: "$20",
    popular: false,
  },
  {
    icon: Wind,
    name: "De-Shedding",
    description: "Special treatment to reduce shedding and keep coat healthy",
    price: "From $60",
    popular: true,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-5 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Our Services</h2>
          <p className="lead text-muted">
            Professional grooming services tailored to your pet's needs
          </p>
        </div>

        {/* Services Grid */}
        <Row className="g-4 mb-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Col key={index} md={6} lg={3}>
                <Card className="h-100 border-0 shadow-sm card-hover position-relative">
                  {service.popular && (
                    <Badge
                      className="badge-popular"
                      style={{ backgroundColor: "#9d8189" }}
                    >
                      Popular
                    </Badge>
                  )}
                  <Card.Body>
                    <div
                      className="rounded-circle d-inline-flex p-3 mb-3"
                      style={{ backgroundColor: "rgba(255, 202, 212, 0.2)" }}
                    >
                      <Icon size={32} style={{ color: "#f4acb7" }} />
                    </div>
                    <Card.Title className="h5 mb-2">{service.name}</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      {service.description}
                    </Card.Text>
                    <div className="fw-bold fs-5" style={{ color: "#f4acb7" }}>
                      {service.price}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* CTA */}
        <div className="text-center">
          <Button as={Link} to="/services" variant="primary" size="lg">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
