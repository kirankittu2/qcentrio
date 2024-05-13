"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function OfferingGlobeAnimation() {
  const canvasRef = useRef();

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      1050
    );
    camera.position.x = 750;
    camera.position.y = 500;
    camera.position.z = 500;

    // Mesh
    const geometry = new THREE.IcosahedronGeometry(200, 2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x089768,
      wireframe: true,
      wireframeLinewidth: 2,
      opacity: 0.25,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    // renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(window.devicePixelRatio);
    const tempWidth = (88.33 / 100) * window.innerWidth;
    const tempHeight = (42.5 / 100) * window.innerWidth;
    renderer.setSize(tempWidth, tempHeight);
    const canvas = renderer.domElement;
    canvasRef.current.appendChild(canvas);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      mesh.rotation.y = Date.now() * 0.00009;
      mesh.rotation.x = Date.now() * -0.00009;
      renderer.render(scene, camera);
      updateScreenPosition(renderer, camera);
    }

    animate();
  }, []);

  // Update Screen Position
  function updateScreenPosition(renderer, camera) {
    const vector = new THREE.Vector3(250, 250, 250);
    const canvas = renderer.domElement;

    vector.project(camera);

    vector.x = Math.round(
      (0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio)
    );
    vector.y = Math.round(
      (0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio)
    );
  }

  return <div id="canvas" ref={canvasRef} />;
}
