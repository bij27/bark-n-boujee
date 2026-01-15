import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Star, Quote } from "lucide-react";
import { mockTestimonials } from "../../data/mockData";

export default function TestimonialsPreview() {
  const featuredTestimonials = mockTestimonials.slice(0, 3);

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
            What Our Customers Say
          </h2>
          <p className="lead" style={{ color: "#2b303a", opacity: "0.9" }}>
            Don't just take our word for it - hear from happy pet parents
          </p>
        </div>
        {/* Testimonials Grid */}
        <Row className="g-4 mb-5">
          {featuredTestimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderTop: "4px solid #FF3C38",
                  backgroundColor: "rgba(255, 249, 251, 0.95)",
                  backdropFilter: "blur(10px)",
                  border: "none",
                }}
              >
                <Card.Body>
                  {/* Quote Icon */}
                  <div className="mb-3">
                    <Quote size={32} style={{ color: "#2b303a" }} />
                  </div>

                  {/* Rating */}
                  <div
                    className="d-flex gap-1 mb-3"
                    style={{ color: "#E6D18C" }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>

                  {/* Content */}
                  <Card.Title className="h5 mb-2" style={{ color: "#2b303a" }}>
                    {testimonial.title}
                  </Card.Title>
                  <Card.Text style={{ color: "#2b303a" }} className="mb-4">
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
                        border: "2px solid #FF3C38",
                      }}
                    />
                    <div>
                      <div className="fw-semibold" style={{ color: "#2b303a" }}>
                        {testimonial.userName}
                      </div>
                      <small style={{ color: "#2b303a" }}>
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
              backgroundColor: "#E6D18C",
              borderColor: "#E6D18C",
              color: "#2b303a",
              fontWeight: "600",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
            }}
          >
            Read More Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
