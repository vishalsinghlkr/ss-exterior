"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Material3DViewerProps {
  materialId: string;
  materialTitle: string;
  className?: string;
}

export default function Material3DViewer({
  materialId,
  materialTitle,
  className = "",
}: Material3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const isRotatingRef = useRef<boolean>(true);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 260;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Studio Key + Rim + Gold Fill)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffedd5, 3.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const goldAccentLight = new THREE.PointLight(0xd4af37, 2.5, 6);
    goldAccentLight.position.set(0, 2, 2);
    scene.add(goldAccentLight);

    // 4. Build Procedural 3D Material Sample based on materialId
    const group = new THREE.Group();
    meshGroupRef.current = group;

    // Disposables tracking
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    const createSample = (id: string) => {
      // Clear previous children
      while (group.children.length > 0) {
        group.remove(group.children[0]);
      }

      if (id.includes("louver") || id.includes("wpc")) {
        // Vertical WPC Louver Screen with 7 fins
        const finGeo = new THREE.BoxGeometry(0.12, 2.4, 0.45);
        geometries.push(finGeo);
        const finMat = new THREE.MeshStandardMaterial({
          color: 0xb45309,
          roughness: 0.55,
          metalness: 0.15,
        });
        materials.push(finMat);

        const backerGeo = new THREE.BoxGeometry(2.4, 0.08, 0.08);
        geometries.push(backerGeo);
        const backerMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          roughness: 0.3,
          metalness: 0.8,
        });
        materials.push(backerMat);

        for (let i = -3; i <= 3; i++) {
          const fin = new THREE.Mesh(finGeo, finMat);
          fin.position.set(i * 0.32, 0, 0);
          group.add(fin);
        }

        const runner1 = new THREE.Mesh(backerGeo, backerMat);
        runner1.position.set(0, 0.8, -0.22);
        group.add(runner1);

        const runner2 = new THREE.Mesh(backerGeo, backerMat);
        runner2.position.set(0, -0.8, -0.22);
        group.add(runner2);
      } else if (id.includes("acp")) {
        // Metallic Champagne Gold ACP Composite Sheet
        const panelGeo = new THREE.BoxGeometry(2.3, 2.3, 0.12);
        geometries.push(panelGeo);
        const panelMat = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          roughness: 0.2,
          metalness: 0.88,
        });
        materials.push(panelMat);

        const panel = new THREE.Mesh(panelGeo, panelMat);
        group.add(panel);

        // Core Black Polyethylene layer edge
        const coreGeo = new THREE.BoxGeometry(2.28, 2.28, 0.08);
        geometries.push(coreGeo);
        const coreMat = new THREE.MeshStandardMaterial({
          color: 0x090d16,
          roughness: 0.9,
          metalness: 0.1,
        });
        materials.push(coreMat);
        const core = new THREE.Mesh(coreGeo, coreMat);
        group.add(core);

        // Metallic corner brackets
        const rivetGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.16, 16);
        geometries.push(rivetGeo);
        const rivetMat = new THREE.MeshStandardMaterial({
          color: 0xf1f5f9,
          metalness: 0.95,
          roughness: 0.1,
        });
        materials.push(rivetMat);

        [-0.95, 0.95].forEach((x) => {
          [-0.95, 0.95].forEach((y) => {
            const rivet = new THREE.Mesh(rivetGeo, rivetMat);
            rivet.rotation.x = Math.PI / 2;
            rivet.position.set(x, y, 0.06);
            group.add(rivet);
          });
        });
      } else if (id.includes("glass")) {
        // Toughened Structural Glass Slab with SS 304 Spigot Brackets
        const glassGeo = new THREE.BoxGeometry(2.2, 2.4, 0.12);
        geometries.push(glassGeo);
        const glassMat = new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          roughness: 0.05,
          metalness: 0.95,
          transparent: true,
          opacity: 0.55,
        });
        materials.push(glassMat);
        const glass = new THREE.Mesh(glassGeo, glassMat);
        group.add(glass);

        // Stainless Steel Base Spigots
        const spigotGeo = new THREE.BoxGeometry(0.24, 0.6, 0.32);
        geometries.push(spigotGeo);
        const spigotMat = new THREE.MeshStandardMaterial({
          color: 0xf8fafc,
          roughness: 0.15,
          metalness: 0.95,
        });
        materials.push(spigotMat);

        const s1 = new THREE.Mesh(spigotGeo, spigotMat);
        s1.position.set(-0.6, -1.0, 0);
        group.add(s1);

        const s2 = new THREE.Mesh(spigotGeo, spigotMat);
        s2.position.set(0.6, -1.0, 0);
        group.add(s2);
      } else if (id.includes("hpl")) {
        // High Pressure Laminate Woodgrain Architectural Board
        const boardGeo = new THREE.BoxGeometry(2.3, 2.3, 0.14);
        geometries.push(boardGeo);
        const boardMat = new THREE.MeshStandardMaterial({
          color: 0x78350f,
          roughness: 0.45,
          metalness: 0.1,
        });
        materials.push(boardMat);
        const board = new THREE.Mesh(boardGeo, boardMat);
        group.add(board);

        // Beveled gold trim rim
        const trimGeo = new THREE.BoxGeometry(2.36, 0.04, 0.16);
        geometries.push(trimGeo);
        const trimMat = new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.85,
          roughness: 0.25,
        });
        materials.push(trimMat);
        const topTrim = new THREE.Mesh(trimGeo, trimMat);
        topTrim.position.set(0, 1.16, 0);
        group.add(topTrim);
        const botTrim = new THREE.Mesh(trimGeo, trimMat);
        botTrim.position.set(0, -1.16, 0);
        group.add(botTrim);
      } else {
        // Default: Engineered Multi-Plank Interlocking Wood Flooring
        const plankGeo = new THREE.BoxGeometry(2.3, 0.4, 0.1);
        geometries.push(plankGeo);
        const plankMat1 = new THREE.MeshStandardMaterial({
          color: 0xa16207,
          roughness: 0.5,
          metalness: 0.1,
        });
        const plankMat2 = new THREE.MeshStandardMaterial({
          color: 0x854d0e,
          roughness: 0.45,
          metalness: 0.12,
        });
        materials.push(plankMat1, plankMat2);

        for (let i = -2; i <= 2; i++) {
          const plank = new THREE.Mesh(plankGeo, i % 2 === 0 ? plankMat1 : plankMat2);
          plank.position.set(0, i * 0.44, 0);
          group.add(plank);
        }
      }
    };

    createSample(materialId);
    scene.add(group);

    // Initial slight angle
    group.rotation.y = 0.5;
    group.rotation.x = 0.2;

    // 5. Interactive Drag to Orbit
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetRotY = 0.5;
    let targetRotX = 0.2;

    const handleDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const cx = "touches" in e ? e.touches[0].clientX : e.clientX;
      const cy = "touches" in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = cx;
      prevMouseY = cy;
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const cx = "touches" in e ? e.touches[0].clientX : e.clientX;
      const cy = "touches" in e ? e.touches[0].clientY : e.clientY;
      const dx = cx - prevMouseX;
      const dy = cy - prevMouseY;
      prevMouseX = cx;
      prevMouseY = cy;

      targetRotY += dx * 0.01;
      targetRotX = Math.max(-0.6, Math.min(0.6, targetRotX + dy * 0.008));
    };

    const handleUp = () => {
      isDragging = false;
    };

    const canvas = renderer.domElement;
    canvas.addEventListener("mousedown", handleDown);
    canvas.addEventListener("touchstart", handleDown, { passive: true });
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);

    // 6. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotatingRef.current && !isDragging) {
        targetRotY += 0.45 * delta;
      }

      group.rotation.y += (targetRotY - group.rotation.y) * 0.08;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.08;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", handleDown);
      canvas.removeEventListener("touchstart", handleDown);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);

      renderer.dispose();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());

      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [materialId]);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-slate-50/90 border border-[#D4AF37]/35 shadow-lg flex flex-col justify-between ${className}`}
    >
      {/* Header Badge */}
      <div className="p-3 bg-white border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[11px] font-bold text-[#926A06] uppercase tracking-wider">
            3D Material Specimen
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          className="text-[10px] uppercase font-bold text-slate-700 hover:text-slate-950 px-2 py-0.5 rounded bg-slate-100 border border-slate-200 transition-colors"
        >
          {isRotating ? "Pause Spin" : "Auto Spin"}
        </button>
      </div>

      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-[220px] sm:h-[260px] cursor-grab active:cursor-grabbing relative select-none"
      />

      {/* Footer Info */}
      <div className="p-2.5 bg-white/95 border-t border-slate-200 text-center">
        <span className="text-[10px] text-slate-600 font-medium">
          ✦ Drag 360° to inspect texture, depth & finish
        </span>
      </div>
    </div>
  );
}
