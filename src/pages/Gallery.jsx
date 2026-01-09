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
      <div
        style={{
          backgroundColor: "#0c7c59",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        {/* Giant Background Logo - Fixed */}
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            opacity: "0.05",
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
        <Container>
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold mb-3" style={{ color: "#fff9fb" }}>
              Our Boujee Work
            </h1>
            <p className="lead text-muted">
              See the boujee pups we've pampered.
            </p>
          </div>
          {/* Gallery Grid */}
          <Row className="g-4 gallery-grid">
            {galleryImages.map((image) => (
              <Col key={image.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  className="border-0 shadow-sm h-100 card-hover"
                  style={{
                    cursor: "pointer",
                    border: "2px solid rgba(97, 226, 148, 0.2)",
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div
                    className="gallery-image"
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
                    <Card.Title
                      className="h6 mb-2"
                      style={{ color: "#2b303a" }}
                    >
                      {image.title}
                    </Card.Title>
                    <Card.Text className="text-primary small mb-0">
                      {image.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/* Instagram CTA */}
          <div
            className="text-center mt-5 p-4 p-md-5 rounded-4 cta-section"
            style={{
              background: "linear-gradient(135deg, #0c7c59 0%, #0a6347 100%)",
              color: "#fff9fb",
            }}
          >
            <h3 className="fw-bold mb-3">See More on Instagram</h3>
            <p className="lead mb-4">
              Follow us for daily grooming transformations and happy pup photos
            </p>

            <a
              href="https://www.instagram.com/barknboujeechicago/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg shadow"
              style={{
                backgroundColor: "#ffe2d1",
                borderColor: "#61e294",
                color: "#2b303a",
                fontWeight: "600",
              }}
            >
              Follow @barknboujeechicago
            </a>
          </div>
          {/* Info Cards */}
          <Row className="mt-5 g-4">
            <Col xs={12} md={4}>
              <Card
                className="border-0 shadow-sm h-100"
                style={{ backgroundColor: "#ffe2d1" }}
              >
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mb-3" style={{ color: "#0c7c59" }}>
                    Professional Results
                  </h5>
                  <p className="text-primary mb-0">
                    Every pup receives personalized attention and expert
                    grooming tailored to their breed and style.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card
                className="border-0 shadow-sm h-100"
                style={{ backgroundColor: "#ffe2d1" }}
              >
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mb-3" style={{ color: "#0c7c59" }}>
                    Happy & Healthy
                  </h5>
                  <p className="text-primary mb-0">
                    We prioritize your pet's comfort and wellbeing throughout
                    the entire grooming experience.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card
                className="border-0 shadow-sm h-100"
                style={{ backgroundColor: "#ffe2d1" }}
              >
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mb-3" style={{ color: "#0c7c59" }}>
                    Luxury Experience
                  </h5>
                  <p className="text-primary mb-0">
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
            backgroundColor: "rgba(43, 48, 58, 0.95)",
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
              className="btn position-absolute top-0 end-0 m-3"
              style={{
                backgroundColor: "#61e294",
                borderColor: "#61e294",
                color: "#2b303a",
                fontWeight: "600",
              }}
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
