import DomeGallery from "../components/DomeGallery";

export default function Gallery() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "url('/images/greenpatternbackground.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Giant Background Logo - Fixed */}
      <div
        style={{
          position: "fixed",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1000px",
          height: "1000px",
          opacity: "0.3",
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
      <div
        style={{
          position: "relative",
          zIndex: "1",
          width: "100%",
          height: "100%",
        }}
      >
        <DomeGallery />
      </div>
    </div>
  );
}
