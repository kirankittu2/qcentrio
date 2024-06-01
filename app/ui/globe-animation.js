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
      console.log(pixels);
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
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 100,
      baseColor: [0.031, 0.592, 0.408],
      markerColor: [0, 0, 0],
      glowColor: [0.8, 0.8, 0.8],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
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
