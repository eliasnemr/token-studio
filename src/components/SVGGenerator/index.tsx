import type React from "react";
import { useState, useCallback } from "react";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
};

const getRandomShape = () => {
  const shapes = ["circle", "square", "triangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const getRandomEyes = () => {
  const eyes = ["circle", "oval", "rectangle"];
  return eyes[Math.floor(Math.random() * eyes.length)];
};

const getRandomMouth = () => {
  const mouths = ["smile", "line", "open"];
  return mouths[Math.floor(Math.random() * mouths.length)];
};

const SVGProfileGenerator: React.FC = () => {
  const [svgContent, setSvgContent] = useState<any>("");
  const [customCreation, setCustomCreation] = useState(false);

  const generateSVG = useCallback(() => {
    const backgroundColor = getRandomColor();
    const faceShape = getRandomShape();
    const eyeShape = getRandomEyes();
    const mouthShape = getRandomMouth();

    let face;
    if (faceShape === "circle") {
      face = <circle cx="0" cy="0" r="48" fill={backgroundColor} />;
    } else if (faceShape === "square") {
      face = (
        <rect x="-34" y="-34" width="68" height="68" fill={backgroundColor} />
      );
    } else {
      face = <polygon points="0,-40 35,20 -35,20" fill={backgroundColor} />;
    }

    let eyes;
    if (eyeShape === "circle") {
      eyes = (
        <>
          <circle cx="-15" cy="-10" r="5" fill="black" />
          <circle cx="15" cy="-10" r="5" fill="black" />
        </>
      );
    } else if (eyeShape === "oval") {
      eyes = (
        <>
          <ellipse cx="-15" cy="-10" rx="5" ry="3" fill="black" />
          <ellipse cx="15" cy="-10" rx="5" ry="3" fill="black" />
        </>
      );
    } else {
      eyes = (
        <>
          <rect x="-20" y="-12" width="10" height="4" fill="black" />
          <rect x="10" y="-12" width="10" height="4" fill="black" />
        </>
      );
    }

    let mouth;
    if (mouthShape === "smile") {
      mouth = (
        <path
          d="M-20 15 Q0 30 20 15"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
        />
      );
    } else if (mouthShape === "line") {
      mouth = (
        <line x1="-20" y1="15" x2="20" y2="15" stroke="black" strokeWidth="2" />
      );
    } else {
      mouth = <circle cx="0" cy="15" r="8" fill="black" />;
    }

    const newSvgContent = (
      <svg
        width="100%"
        height="100%"
        viewBox="-50 -50 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {face}
        {eyes}
        {mouth}
      </svg>
    );

    setSvgContent(newSvgContent);
  }, []);

  const downloadSVG = useCallback(() => {
    const svgBlob = new Blob([svgContent], {
      type: "image/svg+xml;charset=utf-8",
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "profile-picture.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, [svgContent]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col items-center justify-center p-6">
        <div className="mb-4 w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
          {svgContent || (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100%" height="100%" fill="#e2e8f0" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="14"
                fill="#718096"
              >
                Generate SVG
              </text>
            </svg>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 space-x-4">
        <PrimaryButton
          type="button"
          onClick={() => setCustomCreation(true)}
          extraClass="!bg-black !text-white dark:bg-white"
        >
          Create Custom
        </PrimaryButton>
        <SecondaryButton
          // disabled={!svgContent}
          type="button"
          onClick={generateSVG}
          extraClass="!bg-grey20 hover:bg-grey10"
        >
          Generate Random
        </SecondaryButton>
      </div>
    </div>
  );
};

export default SVGProfileGenerator;
