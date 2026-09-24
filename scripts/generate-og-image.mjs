import React from "react";
import { createRequire } from "node:module";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/dist/compiled/@vercel/og");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputPath = path.join(rootDir, "public", "og-image.png");

async function generateOGImage() {
  console.log("Generating enhanced OG image...");

  const element = React.createElement(
    "div",
    {
      style: {
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#060912",
        padding: "44px 52px",
        position: "relative",
        fontFamily: "sans-serif",
        overflow: "hidden",
      },
    },
    // Background Radial Glows
    React.createElement("div", {
      style: {
        position: "absolute",
        top: "-120px",
        right: "-80px",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0, 180, 255, 0.25) 0%, rgba(0, 102, 255, 0.08) 45%, transparent 70%)",
      },
    }),
    React.createElement("div", {
      style: {
        position: "absolute",
        bottom: "-140px",
        left: "-100px",
        width: "550px",
        height: "550px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0, 102, 255, 0.22) 0%, rgba(0, 180, 255, 0.05) 45%, transparent 70%)",
      },
    }),

    // Subtle background grid simulation
    React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "radial-gradient(rgba(0, 180, 255, 0.15) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.4,
      },
    }),

    // Top Bar: Terminal bar + Availability status
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        },
      },
      // Terminal Pill
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(12, 18, 32, 0.85)",
            border: "1px solid rgba(0, 180, 255, 0.28)",
            borderRadius: "9999px",
            padding: "9px 20px",
          },
        },
        React.createElement("div", {
          style: { width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#ef4444" },
        }),
        React.createElement("div", {
          style: { width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#eab308" },
        }),
        React.createElement("div", {
          style: { width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#22c55e" },
        }),
        React.createElement(
          "span",
          {
            style: {
              color: "#38bdf8",
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "6px",
              letterSpacing: "0.06em",
              fontFamily: "monospace",
            },
          },
          "cybersakki.vercel.app"
        )
      ),

      // Availability Badge
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "rgba(0, 180, 255, 0.08)",
            border: "1px solid rgba(0, 180, 255, 0.35)",
            borderRadius: "9999px",
            padding: "9px 22px",
            color: "#e8edf5",
            fontSize: "13px",
            fontWeight: "700",
            letterSpacing: "0.08em",
          },
        },
        React.createElement("div", {
          style: {
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            backgroundColor: "#22c55e",
            boxShadow: "0 0 10px #22c55e",
          },
        }),
        "AVAILABLE FOR SECURITY AUDITS & DEV"
      )
    ),

    // Main Card
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "40px",
          backgroundColor: "rgba(12, 18, 32, 0.85)",
          border: "1px solid rgba(0, 180, 255, 0.28)",
          borderRadius: "28px",
          padding: "40px 48px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(0, 180, 255, 0.2)",
        },
      },
      // Shield Icon Box
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "128px",
            height: "128px",
            borderRadius: "26px",
            backgroundColor: "rgba(0, 180, 255, 0.08)",
            border: "2px solid rgba(0, 180, 255, 0.45)",
            boxShadow: "0 0 35px rgba(0, 180, 255, 0.25)",
            flexShrink: 0,
          },
        },
        React.createElement(
          "svg",
          {
            width: "82",
            height: "82",
            viewBox: "0 0 32 32",
            fill: "none",
          },
          React.createElement("path", {
            d: "M16 5L25 9.5V17.5C25 22.5 16 27 16 27C16 27 7 22.5 7 17.5V9.5L16 5Z",
            fill: "#00b4ff",
            fillOpacity: "0.22",
            stroke: "#00b4ff",
            strokeWidth: "1.8",
            strokeLinejoin: "round",
          }),
          React.createElement("path", {
            d: "M18.5 11.5H13.5C12.5 11.5 12 12.2 12 13C12 14.5 14 14.8 16 15.2C18 15.6 20 16 20 17.8C20 19 19 20 17.5 20H12.5",
            stroke: "#00b4ff",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        )
      ),

      // Text Group
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          },
        },
        // Role pill
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#38bdf8",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            },
          },
          "Pakistani Ethical Hacker & Full Stack Engineer"
        ),

        // Name & Tag
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "baseline",
              gap: "16px",
            },
          },
          React.createElement(
            "span",
            {
              style: {
                fontSize: "50px",
                fontWeight: "800",
                color: "#ffffff",
                letterSpacing: "-0.03em",
              },
            },
            "Muhammad Saqlain"
          ),
          React.createElement(
            "span",
            {
              style: {
                fontSize: "26px",
                fontWeight: "700",
                color: "#00b4ff",
                letterSpacing: "0.01em",
              },
            },
            "@cybersakki"
          )
        ),

        // Subtitle
        React.createElement(
          "div",
          {
            style: {
              fontSize: "20px",
              fontWeight: "600",
              color: "#94a3b8",
              lineHeight: 1.35,
              maxWidth: "840px",
            },
          },
          "Web Penetration Testing • OWASP Security Audits • Next.js & React Architecture • Technical SEO"
        )
      )
    ),

    // Bottom Badges with SVGs
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        },
      },
      [
        {
          label: "Penetration Testing",
          svg: React.createElement(
            "svg",
            { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#00b4ff", strokeWidth: "2" },
            React.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
          ),
        },
        {
          label: "OWASP Top 10 Security",
          svg: React.createElement(
            "svg",
            { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#00b4ff", strokeWidth: "2" },
            React.createElement("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
            React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
          ),
        },
        {
          label: "Next.js 16 & React 19",
          svg: React.createElement(
            "svg",
            { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#00b4ff", strokeWidth: "2" },
            React.createElement("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
          ),
        },
        {
          label: "TikTok 20K+ @cybersakki",
          svg: React.createElement(
            "svg",
            { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#00b4ff", strokeWidth: "2" },
            React.createElement("path", { d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" })
          ),
        },
        {
          label: "Technical SEO & Speed",
          svg: React.createElement(
            "svg",
            { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#00b4ff", strokeWidth: "2" },
            React.createElement("path", {
              d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            }),
            React.createElement("path", {
              d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            })
          ),
        },
      ].map((item, index) =>
        React.createElement(
          "div",
          {
            key: index,
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "rgba(12, 18, 32, 0.9)",
              border: "1px solid rgba(0, 180, 255, 0.24)",
              borderRadius: "14px",
              padding: "12px 18px",
              color: "#e8edf5",
              fontSize: "14px",
              fontWeight: "600",
            },
          },
          item.svg,
          item.label
        )
      )
    )
  );

  const imageResponse = new ImageResponse(element, {
    width: 1200,
    height: 630,
  });

  const arrayBuffer = await imageResponse.arrayBuffer();
  await fs.writeFile(outputPath, Buffer.from(arrayBuffer));
  console.log(`✓ Enhanced OG image saved to: ${outputPath} (${Math.round(arrayBuffer.byteLength / 1024)} KB)`);
}

generateOGImage().catch((err) => {
  console.error("Error generating OG image:", err);
  process.exit(1);
});
