"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Globe geometry
    const radius = 1;
    const geometry = new THREE.SphereGeometry(radius, 64, 64);

    // Create canvas texture for the dotted map
    const texCanvas = document.createElement("canvas");
    texCanvas.width = 2048;
    texCanvas.height = 1024;
    const ctx = texCanvas.getContext("2d")!;

    // Dark background
    ctx.fillStyle = "#1a0a3a";
    ctx.fillRect(0, 0, 2048, 1024);

    // Draw dot grid
    const cols = 160;
    const rows = 80;
    const dotRadius = 2.5;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = (col / cols) * 2048 + 2048 / cols / 2;
        const y = (row / rows) * 1024 + 1024 / rows / 2;

        // Rough land mask (simplified continents using lat/lon)
        const lon = (col / cols) * 360 - 180;
        const lat = 90 - (row / rows) * 180;

        if (isLand(lon, lat)) {
          const brightness = 0.3 + Math.random() * 0.5;
          ctx.fillStyle = `rgba(160, 100, 255, ${brightness})`;
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = "rgba(80, 50, 140, 0.15)";
          ctx.beginPath();
          ctx.arc(x, y, dotRadius * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const texture = new THREE.CanvasTexture(texCanvas);

    // Globe material
    const material = new THREE.MeshPhongMaterial({
      map: texture,
      transparent: true,
      opacity: 0.95,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Atmosphere glow (outer sphere)
    const atmosGeometry = new THREE.SphereGeometry(radius * 1.06, 64, 64);
    const atmosMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x6600ff),
      transparent: true,
      opacity: 0.12,
      side: THREE.FrontSide,
    });
    const atmosphere = new THREE.Mesh(atmosGeometry, atmosMaterial);
    scene.add(atmosphere);

    // Rim glow (back side)
    const rimGeometry = new THREE.SphereGeometry(radius * 1.12, 64, 64);
    const rimMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x8800ff),
      transparent: true,
      opacity: 0.06,
      side: THREE.BackSide,
    });
    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    scene.add(rim);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x220033, 2);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x8844ff, 4, 10);
    purpleLight.position.set(-3, 2, 2);
    scene.add(purpleLight);

    const blueLight = new THREE.PointLight(0x4488ff, 2, 10);
    blueLight.position.set(3, -1, 2);
    scene.add(blueLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 0.3);
    frontLight.position.set(0, 0, 5);
    scene.add(frontLight);

    // Animation
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      atmosphere.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}

// Simplified land mask based on lat/lon
function isLand(lon: number, lat: number): boolean {
  // North America
  if (lon > -140 && lon < -55 && lat > 25 && lat < 72) {
    if (lon > -80 && lat < 30) return false;
    return true;
  }
  // Greenland
  if (lon > -55 && lon < -18 && lat > 60 && lat < 84) return true;
  // South America
  if (lon > -82 && lon < -35 && lat > -56 && lat < 12) return true;
  // Europe
  if (lon > -10 && lon < 40 && lat > 35 && lat < 71) return true;
  // Africa
  if (lon > -18 && lon < 52 && lat > -35 && lat < 37) return true;
  // Asia (rough)
  if (lon > 26 && lon < 145 && lat > 5 && lat < 75) return true;
  // Southeast Asia islands
  if (lon > 95 && lon < 141 && lat > -10 && lat < 20) return true;
  // Australia
  if (lon > 113 && lon < 154 && lat > -39 && lat < -10) return true;
  // Japan
  if (lon > 129 && lon < 146 && lat > 31 && lat < 46) return true;
  // UK / Iceland
  if (lon > -25 && lon < 0 && lat > 50 && lat < 68) return true;
  // Scandinavia
  if (lon > 4 && lon < 32 && lat > 55 && lat < 72) return true;
  // Antarctica
  if (lat < -65) return true;

  return false;
}
