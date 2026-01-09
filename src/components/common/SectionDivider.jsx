export default function SectionDivider() {
  return (
    <div style={{ position: "relative", margin: "4rem 0" }}>
      {/* Decorative Dots */}
      <div className="text-center mb-4">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#ffe2d1",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "rgba(97, 226, 148, 0.6)",
            }}
          />
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "rgba(97, 226, 148, 0.3)",
            }}
          />
        </div>
      </div>

      {/* Wave Divider */}
      <div style={{ position: "relative", height: "60px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            height: "100%",
            width: "100%",
            display: "block",
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{
              fill: "#ffe2d1",
            }}
          />
        </svg>
      </div>
    </div>
  );
}
