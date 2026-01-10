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
        position: "relative", // Added this
      }}
    >
      <Container style={{ position: "relative", zIndex: 1 }}>
        {" "}
        {/* Added z-index */}
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#fff9fb" }}>
            What Our Customers Say
          </h2>
          <p className="lead" style={{ color: "#fff9fb", opacity: "0.9" }}>
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
                  borderTop: "4px solid #61e294",
                  backgroundColor: "rgba(255, 249, 251, 0.95)", // Semi-transparent!
                  backdropFilter: "blur(10px)", // Frosted glass effect
                  border: "none",
                }}
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
                        border: "2px solid #61e294",
                      }}
                    />
                    <div>
                      <div className="fw-semibold" style={{ color: "#2b303a" }}>
                        {testimonial.userName}
                      </div>
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
            size="lg"
            style={{
              backgroundColor: "#E6D18C",
              borderColor: "#E6D18C",
              color: "#2b303a",
              fontWeight: "600",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              boxShadow: "0 4px 14px rgba(97, 226, 148, 0.4)",
            }}
          >
            Read More Reviews
          </Button>
        </div>
      </Container>
    </section>
  );
}
