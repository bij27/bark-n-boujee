import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/beagle.png",
    alt: "Happy Beagle after grooming",
    title: "Beagle Grooming",
    description: "Full grooming with adorable bandana finish",
  },
  {
    id: 2,
    src: "/images/gallery/french.png",
    alt: "French Bulldog at the park",
    title: "French Bulldog",
    description: "Fresh and clean, ready for adventure",
  },
  {
    id: 3,
    src: "/images/gallery/golden.png",
    alt: "Golden Retriever on grooming table",
    title: "Golden Retriever",
    description: "Full service grooming with pink bows",
  },
  {
    id: 4,
    src: "/images/gallery/schnau.png",
    alt: "Schnauzer Mix on grooming table",
    title: "Schnauzer Mix",
    description: "Professional cut and styling",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="bg-light py-5">
        <Container>
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold mb-3">Our Work</h1>
            <p className="lead text-muted">
              See the happy pups we've pampered at Bark N Boujee
            </p>
          </div>

          {/* Gallery Grid */}
          <Row className="g-4">
            {galleryImages.map((image) => (
              <Col key={image.id} md={6} lg={3}>
                <Card
                  className="border-0 shadow-sm h-100 card-hover"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div
                    style={{
                      height: "300px",
                      overflow: "hidden",
                      borderRadius: "0.5rem 0.5rem 0 0",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="h6 mb-2">{image.title}</Card.Title>
                    <Card.Text className="text-muted small mb-0">
                      {image.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Instagram CTA */}
          <div
            className="text-center mt-5 p-5 rounded-4"
            style={{
              background: "linear-gradient(135deg, #ffcad4 0%, #f4acb7 100%)",
            }}
          >
            <h3 className="fw-bold mb-3">See More on Instagram</h3>
            <p className="lead mb-4">
              Follow us for daily grooming transformations and happy pup photos
            </p>

            <a
              href="https://www.instagram.com/barknboujeegrooming/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light btn-lg shadow"
              style={{ color: "#f4acb7", fontWeight: "600" }}
            >
              Follow @barknboujeegrooming
            </a>
          </div>

          {/* Info Cards */}
          <Row className="mt-5 g-4">
            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mb-3" style={{ color: "#f4acb7" }}>
                    Professional Results
                  </h5>
                  <p className="text-muted mb-0">
                    Every pup receives personalized attention and expert
                    grooming tailored to their breed and style.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mb-3" style={{ color: "#f4acb7" }}>
                    Happy & Healthy
                  </h5>
                  <p className="text-muted mb-0">
                    We prioritize your pet's comfort and wellbeing throughout
                    the entire grooming experience.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mb-3" style={{ color: "#f4acb7" }}>
                    Luxury Experience
                  </h5>
                  <p className="text-muted mb-0">
                    Premium products, gentle techniques, and finishing touches
                    that make your pup shine.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            cursor: "pointer",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="position-relative"
            style={{ maxWidth: "90%", maxHeight: "90vh" }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
            <button
              className="btn btn-light position-absolute top-0 end-0 m-3"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
