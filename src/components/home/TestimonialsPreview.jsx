import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Star, Quote } from "lucide-react";
import { mockTestimonials } from "../../data/mockData";

export default function TestimonialsPreview() {
  const featuredTestimonials = mockTestimonials.slice(0, 3);

  return (
    <section className="py-5" style={{ backgroundColor: "#0c7c59" }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#fff9fb" }}>
            What Our Customers Say
          </h2>
          <p className="lead text-muted">
            Don't just take our word for it - hear from happy pet parents
          </p>
        </div>

        {/* Testimonials Grid */}
        <Row className="g-4 mb-5">
          {featuredTestimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4}>
              <Card
                className="h-100 border-0 shadow-sm"
                style={{ borderTop: "4px solid #61e294" }}
              >
                <Card.Body>
                  {/* Quote Icon */}
                  <div className="mb-3">
                    <Quote size={32} style={{ color: "#0c7c59" }} />
                  </div>

                  {/* Rating */}
                  <div
                    className="d-flex gap-1 mb-3"
                    style={{ color: "#0c7c59" }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>

                  {/* Content */}
                  <Card.Title className="h5 mb-2" style={{ color: "#2b303a" }}>
                    {testimonial.title}
                  </Card.Title>
                  <Card.Text className="text-primary mb-4">
                    "{testimonial.content}"
                  </Card.Text>

                  {/* Author */}
                  <div className="d-flex align-items-center gap-3 pt-3 border-top">
                    <img
                      src={testimonial.petPhoto}
                      alt={testimonial.petName}
                      className="rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        border: "2px solid #61e294",
                      }}
                    />
                    <div>
                      <div className="fw-semibold" style={{ color: "#2b303a" }}>
                        {testimonial.userName}
                      </div>
                      <small className="text-primary">
                        Pet parent of {testimonial.petName}
                      </small>
                    </div>
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
            to="/testimonials"
            size="lg"
            style={{
              backgroundColor: "transparent",
              borderColor: "#0c7c59",
              color: "#0c7c59",
              fontWeight: "600",
            }}
          >
            Read More Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
