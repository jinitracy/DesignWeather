import React, { useEffect, useRef, useState } from "react";

const WaveSVG = ({ percentages }) => {
  const svgRef = useRef(null);
  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    const updateSvgDimensions = () => {
      if (svgRef.current) {
        const containerWidth = svgRef.current.clientWidth;
        const containerHeight = svgRef.current.clientHeight;

        const waveHeight = 10;
        const svgComputedHeight = containerHeight - waveHeight;

        setSvgWidth(containerWidth);
        setSvgHeight(containerHeight);

        const svgElement = svgRef.current;
        svgElement.setAttribute(
          "viewBox",
          `0 0 ${containerWidth} ${containerHeight}`
        );
        svgElement.style.height = `${svgComputedHeight}px`;
      }
    };

    updateSvgDimensions();
    window.addEventListener("resize", updateSvgDimensions);
    return () => {
      window.removeEventListener("resize", updateSvgDimensions);
    };
  }, [percentages]);

  const generateWavePath = () => {
    const waveCount = percentages.length;
    const waveSpacing = svgWidth / (waveCount - 1);
    let path = `M 0 ${svgHeight} `;
    for (let i = 0; i < waveCount; i++) {
      const x = waveSpacing * i;
      const y = svgHeight - (svgHeight * percentages[i]) / 100;
      path += `L ${x} ${y} `;
    }
    path += `L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`;
    return path;
  };

  return (
    <div ref={svgRef} className="z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "90%", opacity: 0.7 }}
      >
        rgba
        <path d={generateWavePath()} fill="#5C9CE5" />
      </svg>
    </div>
  );
};

export default WaveSVG;
