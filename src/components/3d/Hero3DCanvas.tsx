"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Hero3DCanvasProps {
  className?: string;
}

export default function Hero3DCanvas({ className = "" }: Hero3DCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // References to keep Three.js instances for dynamic toggles
  const sceneRef = useRef<THREE.Scene | null>(null);
  const materialsRef = useRef<THREE.Material[]>([]);
  const isRotatingRef = useRef<boolean>(true);
  const wireframeModeRef = useRef<boolean>(false);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    wireframeModeRef.current = wireframeMode;
    materialsRef.current.forEach((mat) => {
      if (mat instanceof THREE.MeshStandardMaterial || mat instanceof THREE.MeshBasicMaterial) {
        mat.wireframe = wireframeMode;
      }
    });
  }, [wireframeMode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 380;

    // 2. Camera Setup (Architectural Perspective)
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(5.5, 4.2, 7.5);
    camera.lookAt(0, 1.2, 0);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 4. Lighting System
    // Ambient Light - Warm Daylight Architectural Sky
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    // Main Golden Key Light (Simulating sunlight on facade)
    const goldSpotLight = new THREE.DirectionalLight(0xffedd5, 3.2);
    goldSpotLight.position.set(6, 9, 6);
    goldSpotLight.castShadow = true;
    goldSpotLight.shadow.mapSize.width = 1024;
    goldSpotLight.shadow.mapSize.height = 1024;
    scene.add(goldSpotLight);

    // Cool Azure Rim Light (Glass reflection)
    const coolRimLight = new THREE.DirectionalLight(0x0284c7, 1.8);
    coolRimLight.position.set(-7, 5, -5);
    scene.add(coolRimLight);

    // Warm Underglow Point Light (LED Cove Balcony Accent)
    const coveLight = new THREE.PointLight(0xd4af37, 4.0, 9);
    coveLight.position.set(0, 1.6, 1.5);
    scene.add(coveLight);

    // 5. Materials Registry
    const darkStoneMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.35,
      metalness: 0.25,
      wireframe: wireframeModeRef.current,
    });

    const champagneGoldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: wireframeModeRef.current,
    });

    const warmWoodLouverMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      roughness: 0.6,
      metalness: 0.1,
      wireframe: wireframeModeRef.current,
    });

    const architecturalGlassMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.42,
      wireframe: wireframeModeRef.current,
    });

    const ledGlowMat = new THREE.MeshBasicMaterial({
      color: 0xfff1c5,
      wireframe: wireframeModeRef.current,
    });

    materialsRef.current = [
      darkStoneMat,
      champagneGoldMat,
      warmWoodLouverMat,
      architecturalGlassMat,
      ledGlowMat,
    ];

    // 6. Build Architectural Model Group
    const buildingGroup = new THREE.Group();

    // -- Ground Podium Plinth
    const podiumGeo = new THREE.BoxGeometry(4.4, 0.25, 4.4);
    const podiumMesh = new THREE.Mesh(podiumGeo, darkStoneMat);
    podiumMesh.position.y = -0.125;
    podiumMesh.receiveShadow = true;
    buildingGroup.add(podiumMesh);

    // -- Podium Gold Border Rim
    const rimGeo = new THREE.BoxGeometry(4.5, 0.04, 4.5);
    const rimMesh = new THREE.Mesh(rimGeo, champagneGoldMat);
    rimMesh.position.y = 0.02;
    buildingGroup.add(rimMesh);

    // -- Floor 1: Main Obsidian Enclosure
    const groundFloorGeo = new THREE.BoxGeometry(3.2, 1.7, 3.0);
    const groundFloorMesh = new THREE.Mesh(groundFloorGeo, darkStoneMat);
    groundFloorMesh.position.set(-0.2, 0.85, 0);
    groundFloorMesh.castShadow = true;
    groundFloorMesh.receiveShadow = true;
    buildingGroup.add(groundFloorMesh);

    // -- Floor 1: Front Floor-to-Ceiling Glazing
    const glassFacadeGeo = new THREE.BoxGeometry(2.0, 1.5, 0.06);
    const glassFacadeMesh = new THREE.Mesh(glassFacadeGeo, architecturalGlassMat);
    glassFacadeMesh.position.set(-0.2, 0.85, 1.53);
    buildingGroup.add(glassFacadeMesh);

    // -- Floor 1: Structural Gold Mullions (Window Frames)
    const mullionVGeo = new THREE.BoxGeometry(0.04, 1.5, 0.08);
    [-0.8, -0.2, 0.4].forEach((xPos) => {
      const mullion = new THREE.Mesh(mullionVGeo, champagneGoldMat);
      mullion.position.set(xPos, 0.85, 1.54);
      buildingGroup.add(mullion);
    });

    // -- Cantilevered Intermediate Slab (Balcony Projection)
    const cantileverSlabGeo = new THREE.BoxGeometry(4.0, 0.22, 3.8);
    const cantileverSlabMesh = new THREE.Mesh(cantileverSlabGeo, darkStoneMat);
    cantileverSlabMesh.position.set(0.1, 1.81, 0.3);
    cantileverSlabMesh.castShadow = true;
    cantileverSlabMesh.receiveShadow = true;
    buildingGroup.add(cantileverSlabMesh);

    // -- Warm Recessed LED Strip Underneath Cantilever
    const ledStripGeo = new THREE.BoxGeometry(3.8, 0.04, 0.06);
    const ledStripMesh = new THREE.Mesh(ledStripGeo, ledGlowMat);
    ledStripMesh.position.set(0.1, 1.69, 2.15);
    buildingGroup.add(ledStripMesh);

    // -- Floor 2: Upper Penthouse Volume (Asymmetric Modern Architectural Mass)
    const upperFloorGeo = new THREE.BoxGeometry(2.6, 1.6, 2.6);
    const upperFloorMesh = new THREE.Mesh(upperFloorGeo, darkStoneMat);
    upperFloorMesh.position.set(0.5, 2.72, 0.2);
    upperFloorMesh.castShadow = true;
    upperFloorMesh.receiveShadow = true;
    buildingGroup.add(upperFloorMesh);

    // -- Floor 2: Signature Vertical Louver Screen (WPC Timber Fins)
    const louverGeo = new THREE.BoxGeometry(0.05, 1.6, 0.25);
    const louverCount = 10;
    const startX = -0.9;
    for (let i = 0; i < louverCount; i++) {
      const louver = new THREE.Mesh(louverGeo, warmWoodLouverMat);
      louver.position.set(startX + i * 0.16, 2.72, 1.55);
      louver.castShadow = true;
      buildingGroup.add(louver);
    }

    // -- Upper Glass Balustrade (Toughened Glass Railing)
    const railingGeo = new THREE.BoxGeometry(1.6, 0.6, 0.04);
    const railingMesh = new THREE.Mesh(railingGeo, architecturalGlassMat);
    railingMesh.position.set(-0.8, 2.22, 2.15);
    buildingGroup.add(railingMesh);

    // -- Gold Top Cap Railing
    const railingCapGeo = new THREE.BoxGeometry(1.64, 0.03, 0.06);
    const railingCapMesh = new THREE.Mesh(railingCapGeo, champagneGoldMat);
    railingCapMesh.position.set(-0.8, 2.52, 2.15);
    buildingGroup.add(railingCapMesh);

    // -- Modern Architectural Roof Pergola Canopy (Cantilevered Slats)
    const roofSlabGeo = new THREE.BoxGeometry(3.6, 0.14, 3.4);
    const roofSlabMesh = new THREE.Mesh(roofSlabGeo, darkStoneMat);
    roofSlabMesh.position.set(0.3, 3.59, 0.3);
    buildingGroup.add(roofSlabMesh);

    const roofSlatsGeo = new THREE.BoxGeometry(0.06, 0.12, 1.4);
    for (let i = 0; i < 7; i++) {
      const slat = new THREE.Mesh(roofSlatsGeo, champagneGoldMat);
      slat.position.set(-0.6 + i * 0.28, 3.68, 1.8);
      buildingGroup.add(slat);
    }

    // -- Center Building in World coordinates
    buildingGroup.position.set(0, -0.6, 0);
    scene.add(buildingGroup);

    // 7. Ambient Floating 3D Sparkle Particles (Atmospheric Depth)
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12;
      particlePositions[i + 1] = Math.random() * 8 - 1;
      particlePositions[i + 2] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xfef08a,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 8. Interactive Drag to Orbit / Mouse Parallax
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotationY = 0.45;
    let targetRotationX = 0.12;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;
      prevMouseX = clientX;
      prevMouseY = clientY;

      targetRotationY += deltaX * 0.008;
      targetRotationX = Math.max(
        -0.2,
        Math.min(0.45, targetRotationX + deltaY * 0.005)
      );
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", handlePointerDown);
    domElement.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);

    // 9. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 10. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Slow Auto-Rotation if user is not actively dragging and rotate is on
      if (isRotatingRef.current && !isDragging) {
        targetRotationY += 0.35 * delta;
      }

      // Smooth Lerp Rotation
      buildingGroup.rotation.y += (targetRotationY - buildingGroup.rotation.y) * 0.08;
      buildingGroup.rotation.x += (targetRotationX - buildingGroup.rotation.x) * 0.08;

      // Gentle floating elevation bobbing
      buildingGroup.position.y = -0.6 + Math.sin(time * 1.4) * 0.06;

      // Particles subtle upward drift
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        positions[i] += 0.004;
        if (positions[i] > 7) {
          positions[i] = -1;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Cove light breathing glow
      coveLight.intensity = 4.2 + Math.sin(time * 2.5) * 1.0;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      domElement.removeEventListener("mousedown", handlePointerDown);
      domElement.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);

      renderer.dispose();
      podiumGeo.dispose();
      rimGeo.dispose();
      groundFloorGeo.dispose();
      glassFacadeGeo.dispose();
      mullionVGeo.dispose();
      cantileverSlabGeo.dispose();
      ledStripGeo.dispose();
      upperFloorGeo.dispose();
      louverGeo.dispose();
      railingGeo.dispose();
      railingCapGeo.dispose();
      roofSlabGeo.dispose();
      roofSlatsGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      materialsRef.current.forEach((m) => m.dispose());

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-white via-[#FAF9F6] to-[#F1F5F9] border border-[#D4AF37]/35 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.1),0_0_25px_rgba(212,175,55,0.15)] backdrop-blur-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Header Badge */}
      <div className="absolute top-3.5 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4AF37]"></span>
          </span>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#926A06] drop-shadow-sm">
            Interactive 3D Facade
          </span>
        </div>

        <span className="text-[10px] uppercase font-bold text-slate-700 bg-white/85 px-2 py-0.5 rounded border border-slate-200 shadow-sm backdrop-blur-md">
          WebGL • 60 FPS
        </span>
      </div>

      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className="w-full h-[320px] sm:h-[360px] cursor-grab active:cursor-grabbing relative select-none"
      />

      {/* Subtle Hint Overlay */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider bg-white/90 px-3 py-1 rounded-full border border-[#D4AF37]/30 shadow-sm backdrop-blur-sm">
          ✦ Drag to rotate • Scroll to inspect
        </span>
      </div>

      {/* Interactive Controls Bar at Bottom */}
      <div className="relative z-20 p-3 sm:p-3.5 bg-slate-50/95 border-t border-slate-200 flex items-center justify-between gap-2">
        {/* Toggle Blueprint Wireframe vs Solid Render */}
        <button
          type="button"
          onClick={() => setWireframeMode(!wireframeMode)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
            wireframeMode
              ? "bg-[#D4AF37] text-slate-900 border-[#D4AF37] shadow-sm"
              : "bg-white text-slate-700 hover:text-slate-950 border-slate-200 hover:border-[#D4AF37]/50 shadow-xs"
          }`}
        >
          <span>📐</span>
          <span>{wireframeMode ? "Wireframe Active" : "Blueprint Mode"}</span>
        </button>

        {/* Toggle Auto Rotation */}
        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
            isRotating
              ? "bg-amber-50 text-[#926A06] border-[#D4AF37]/40 shadow-xs"
              : "bg-white text-slate-500 border-slate-200 hover:text-slate-800"
          }`}
        >
          <span>{isRotating ? "⏸ Pause 3D" : "▶ Rotate 3D"}</span>
        </button>
      </div>
    </div>
  );
}
