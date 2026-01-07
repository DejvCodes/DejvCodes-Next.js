'use client';
import * as THREE from 'three';
import {useEffect, useRef} from 'react';

export default function StarfieldBG() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      1,
      2000
    );
    camera.position.z = 600;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Particles
    const count = 1800;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3 + 0] = (Math.random() - 0.5) * 1600; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 1600; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 1600; // z
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2.0,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Resize
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, ));
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(mount);

    // Animate
    let raf = 0;
    const speed = 0.2;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      // jemná rotace “vesmír”
      points.rotation.y += 0.0008;
      points.rotation.x += 0.0004;

      // fake “let dopředu”: posouváme body v z a recyklujeme
      const pos = geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        const zIndex = i * 3 + 2;
        pos.array[zIndex] = (pos.array[zIndex] as number) + speed;
        if ((pos.array[zIndex] as number) > 800) {
          pos.array[zIndex] = -800;
          // lehká randomizace x/y při recyklaci
          pos.array[i * 3 + 0] = (Math.random() - 0.5) * 1600;
          pos.array[i * 3 + 1] = (Math.random() - 0.5) * 1600;
        }
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div
    ref={mountRef}
    style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      background: 'transparent',
      opacity: 0.7,
    }}
  />
}