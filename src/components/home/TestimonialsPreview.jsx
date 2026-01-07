import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Star, Quote } from "lucide-react";
import { mockTestimonials } from "../../data/mockData";

export default function TestimonialsPreview() {
  const featuredTestimonials = mockTestimonials.slice(0, 3);

  return (
    <section className="py-5" style={{ backgroundColor: "#d8e2dc" }}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">What Our Customers Say</h2>
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
                style={{ borderTop: "4px solid #ffcad4" }}
              >
                <Card.Body>
                  {/* Quote Icon */}
                  <div className="mb-3">
                    <Quote size={32} style={{ color: "#f4acb7" }} />
                  </div>

                  {/* Rating */}
                  <div className="d-flex gap-1 mb-3 star-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>

                  {/* Content */}
                  <Card.Title className="h5 mb-2">
                    {testimonial.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-4">
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
                        border: "2px solid #ffcad4",
                      }}
                    />
                    <div>
                      <div className="fw-semibold">{testimonial.userName}</div>
                      <small className="text-muted">
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
            variant="outline-primary"
            size="lg"
          >
            Read More Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
