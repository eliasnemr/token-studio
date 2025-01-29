import type React from "react";
import { useState, useCallback } from "react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { useFormikContext } from "formik";

// Color palettes
const SKIN_COLORS = [
  "#ffdbb4", // light
  "#edb98a", // medium
  "#8d5524", // dark
  "#98ff98", // zombie green
  "#ffffff", // albino
];

const HAIR_COLORS = [
  "#000000", // black
  "#ffffff", // white
  "#ffff00", // blonde
  "#ff4500", // orange
  "#964B00", // brown
];

const ACCESSORY_COLORS = {
  sunglasses: "#000000",
  pipe: "#8b4513",
  hat: "#333333",
};

function drawPixel(x: number, y: number, color: string): string {
  return `<rect x="${x}" y="${y}" width="1" height="1" fill="${color}" />`;
}

function drawPixelRow(
  startX: number,
  y: number,
  length: number,
  color: string,
): string {
  return Array(length)
    .fill(0)
    .map((_, i) => drawPixel(startX + i, y, color))
    .join("");
}

function generateFace(skinColor: string): string {
  let face = "";
  // Face shape (12x12 pixels)
  for (let y = 3; y < 15; y++) {
    face += drawPixelRow(2, y, 12, skinColor);
  }
  return face;
}

function generateHair(
  hairColor: string,
  style: "normal" | "mohawk" | "hoodie",
): string {
  let hair = "";
  if (style === "mohawk") {
    for (let y = 0; y < 5; y++) {
      hair += drawPixelRow(7, y, 2, hairColor);
    }
  } else if (style === "hoodie") {
    for (let y = 0; y < 7; y++) {
      hair += drawPixelRow(1, y, 14, hairColor);
    }
    // Add side flaps
    for (let y = 7; y < 10; y++) {
      hair += drawPixelRow(1, y, 2, hairColor);
      hair += drawPixelRow(13, y, 2, hairColor);
    }
  } else {
    for (let y = 0; y < 5; y++) {
      hair += drawPixelRow(2, y, 12, hairColor);
    }
  }
  return hair;
}

function generateAccessory(type: "sunglasses" | "pipe" | "hat"): string {
  let accessory = "";
  if (type === "sunglasses") {
    accessory += drawPixelRow(3, 8, 10, ACCESSORY_COLORS.sunglasses);
    accessory += drawPixelRow(3, 9, 10, ACCESSORY_COLORS.sunglasses);
  } else if (type === "pipe") {
    accessory += drawPixelRow(11, 12, 5, ACCESSORY_COLORS.pipe);
    accessory += drawPixelRow(14, 13, 2, ACCESSORY_COLORS.pipe);
  } else if (type === "hat") {
    accessory += drawPixelRow(1, 0, 14, ACCESSORY_COLORS.hat);
    accessory += drawPixelRow(2, 1, 12, ACCESSORY_COLORS.hat);
  }
  return accessory;
}

const CryptoPunkGenerator: React.FC = () => {
  const [svgContent, setSvgContent] = useState<React.ReactElement | null>(null);
  const { setFieldValue } = useFormikContext();

  const generatePunk = useCallback(() => {
    const skinColor =
      SKIN_COLORS[Math.floor(Math.random() * SKIN_COLORS.length)];
    const hairColor =
      HAIR_COLORS[Math.floor(Math.random() * HAIR_COLORS.length)];
    const hairStyles = ["normal", "mohawk", "hoodie"] as const;
    const hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
    const accessories = ["sunglasses", "pipe", "hat"] as const;
    const accessory =
      accessories[Math.floor(Math.random() * accessories.length)];

    const pixelArt = `
      <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <g>
          ${generateFace(skinColor)}
          ${generateHair(hairColor, hairStyle)}
          ${generateAccessory(accessory)}
        </g>
      </svg>
    `;

    const newSvgContent = (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html: pixelArt }}
      />
    );

    setSvgContent(newSvgContent);
    const svgString = pixelArt;
    const base64 = btoa(unescape(encodeURIComponent(svgString)));
    setFieldValue("url", `${base64}`);
    setFieldValue("mimeType", `svg+xml`);
  }, [setFieldValue]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center justify-center p-6">
        <div className="mb-4 w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
          {svgContent ? (
            <div className="w-full h-full pixelated">{svgContent}</div>
          ) : (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="100%" fill="#e2e8f0" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="6"
                fill="#718096"
              >
                Gen
              </text>
            </svg>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 space-x-4">
        <PrimaryButton
          type="button"
          onClick={() => {}}
          extraClass="!bg-black !text-white dark:bg-white"
        >
          Create Custom
        </PrimaryButton>
        <SecondaryButton
          type="button"
          onClick={generatePunk}
          extraClass="!bg-grey20 hover:bg-grey10"
        >
          Generate Random
        </SecondaryButton>
      </div>
    </div>
  );
};

export default CryptoPunkGenerator;
