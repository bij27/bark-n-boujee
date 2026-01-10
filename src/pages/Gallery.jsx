import DomeGallery from "../components/DomeGallery";

export default function Gallery() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Giant Background Logo - Fixed */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          opacity: ".7",
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
      <DomeGallery />
    </div>
  );
}
