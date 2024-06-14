"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

export default function GlobeAnimation() {
  const canvasRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const vwToPixels = (vw) => {
      return (vw / 100) * window.innerWidth;
    };

    const updateCanvasSize = () => {
      const viewWidthTemp = (600 / 1920) * 100;
      const pixels = vwToPixels(viewWidthTemp);
      setWidth(pixels);
      setHeight(pixels);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
  }, []);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 1000,
      baseColor: [9.57, 9.57, 9.57],
      markerColor: [0, 0, 0],
      glowColor: [0.9, 0.9, 0.9],
      markers: [
        { location: [37.7595, -122.4367], size: 0 },
        { location: [40.7128, -74.006], size: 0 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "31.25vw",
        height: "31.25vw",
        maxWidth: "100%",
        aspectRatio: 1,
      }}
    />
  );
}
