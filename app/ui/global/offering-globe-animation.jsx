"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function OfferingGlobeAnimation() {
  const canvasRef = useRef(null);
  let wireframe, camera, renderer, scene, controls;

  useEffect(() => {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      410,
      window.innerWidth / window.innerHeight,
      1,
      510
    );
    camera.position.z = 550;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    canvasRef.current.appendChild(renderer.domElement);

    // Wireframe setup
    const geometry = new THREE.IcosahedronGeometry(200, 2);
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      wireframe: true,
      wireframeLinewidth: 1,
      transparent: true,
      opacity: 1,
    });
    wireframe = new THREE.Mesh(geometry, material);
    scene.add(wireframe);

    // Lights setup
    const light1 = new THREE.DirectionalLight(0x4c00ff, 0.75);
    scene.add(light1);
    light1.position.set(1.5, 2, 2);
    // Add other lights here...

    // Orbit controls setup
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Responsive resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Your animation logic here
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} className="globe-animation" />;
}
