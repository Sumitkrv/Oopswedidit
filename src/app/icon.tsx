import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#532510",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FDF9EF",
          borderRadius: 8,
          fontWeight: 800,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <span style={{ color: "#FDF9EF" }}>o</span>
        <span style={{ color: "#C46F39" }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  );
}

