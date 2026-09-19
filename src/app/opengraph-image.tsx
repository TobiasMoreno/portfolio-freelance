import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Tobias Moreno — Desarrollo web para negocios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f0e9",
          color: "#171914",
          padding: "70px 78px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 27, fontWeight: 700 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 54, height: 54, borderRadius: 27, background: "#ff5c35", color: "#171914", fontSize: 18 }}>TM</div>
          Tobias Moreno
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 950 }}>
          <div style={{ fontSize: 76, lineHeight: 1.04, letterSpacing: "-4px", fontWeight: 600 }}>
            Páginas web que ayudan a tu negocio a crecer.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#5e6158" }}>Diseño y desarrollo web · Córdoba, Argentina</div>
        </div>
        <div style={{ width: "100%", height: 10, borderRadius: 10, background: "#ff5c35" }} />
      </div>
    ),
    size,
  );
}
