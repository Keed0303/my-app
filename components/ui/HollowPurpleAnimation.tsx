'use client';

import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

interface HollowPurpleAnimationProps {
  isPlaying: boolean;
  onComplete: () => void;
}

const TOTAL_DURATION = 4.0;
const PHASE_GATHER_END = 1.5;
const PHASE_PULSE_END = 2.5;

const HollowPurpleAnimation = ({ isPlaying, onComplete }: HollowPurpleAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const cleanedUpRef = useRef(false);
  const hasCompletedRef = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  const cleanup = useCallback((
    renderer?: THREE.WebGLRenderer,
    scene?: THREE.Scene,
    geometries?: THREE.BufferGeometry[],
    materials?: THREE.ShaderMaterial[]
  ) => {
    if (cleanedUpRef.current) return;
    cleanedUpRef.current = true;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    geometries?.forEach(g => g.dispose());
    materials?.forEach(m => m.dispose());

    if (renderer) {
      renderer.dispose();
      renderer.forceContextLoss();
    }

    if (scene) {
      scene.clear();
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    cleanedUpRef.current = false;
    hasCompletedRef.current = false;

    // Defer initialization to next frame to ensure canvas is in the DOM
    const initTimeout = setTimeout(() => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      // Reduced motion check
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        container.classList.add('visible');
        setTimeout(() => {
          container.classList.remove('visible');
          container.classList.add('fade-out');
          onComplete();
        }, 600);
        return;
      }

      const isMobile = window.innerWidth < 768;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !isMobile,
        });
      } catch {
        // WebGL not available - fall back to simple theme switch
        onComplete();
        return;
      }
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      // --- Particle System ---
      const particleCount = isMobile ? 500 : 1000;
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);
      const initialPositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const radius = 2 + Math.random() * 6;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;
        initialPositions[i3] = x;
        initialPositions[i3 + 1] = y;
        initialPositions[i3 + 2] = z;

        // Purple/violet color palette
        const variant = Math.random();
        colors[i3] = 0.4 + variant * 0.2;
        colors[i3 + 1] = 0.1 + variant * 0.15;
        colors[i3 + 2] = 0.8 + variant * 0.2;

        sizes[i] = 2.0 + Math.random() * 4.0;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uPhase: { value: 0 },
          uProgress: { value: 0 },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
          uOpacity: { value: 1.0 },
        },
        vertexShader: `
          attribute float size;
          uniform float uTime;
          uniform float uPhase;
          uniform float uProgress;
          uniform float uPixelRatio;
          varying vec3 vColor;

          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

            float pulse = 1.0 + 0.3 * sin(uTime * 3.0 + position.x * 2.0);

            float phaseScale = 1.0;
            if (uPhase > 0.5 && uPhase < 1.5) {
              phaseScale = 1.0 + uProgress * 2.0;
            }

            gl_PointSize = size * pulse * phaseScale * uPixelRatio * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          uniform float uTime;
          uniform float uOpacity;

          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;

            float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
            alpha *= 0.8 * uOpacity;

            vec3 finalColor = vColor + 0.1 * sin(uTime * 5.0);
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        vertexColors: true,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // --- Central Sphere ---
      const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const sphereMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uPhase: { value: 0 },
          uProgress: { value: 0 },
          uIntensity: { value: 0 },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float uTime;
          uniform float uPhase;
          uniform float uProgress;

          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;

            float displacement = 0.0;

            if (uPhase < 0.5) {
              displacement = sin(position.x * 10.0 + uTime * 3.0) * 0.1 * uProgress;
            } else if (uPhase < 1.5) {
              displacement = sin(position.x * 8.0 + uTime * 5.0) * 0.3 * uProgress
                           + sin(position.y * 6.0 + uTime * 4.0) * 0.2 * uProgress;
            } else {
              displacement = sin(position.x * 12.0 + uTime * 8.0) * 0.5 * uProgress;
            }

            vec3 newPosition = position + normal * displacement;

            float scale = 1.0;
            if (uPhase < 0.5) {
              scale = uProgress;
            } else if (uPhase < 1.5) {
              scale = 1.0 + uProgress * 0.5;
            } else {
              scale = max(0.0, 1.5 - uProgress * 2.0);
            }
            newPosition *= scale;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float uTime;
          uniform float uIntensity;

          void main() {
            float rimFactor = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
            rimFactor = pow(rimFactor, 2.0);

            vec3 coreColor = vec3(0.58, 0.2, 0.92);
            vec3 rimColor = vec3(0.73, 0.47, 0.98);
            vec3 whiteCore = vec3(1.0, 0.9, 1.0);

            vec3 finalColor = mix(coreColor, rimColor, rimFactor);
            finalColor = mix(finalColor, whiteCore, uIntensity * 0.4);

            float alpha = 0.6 + rimFactor * 0.4;
            alpha *= uIntensity;

            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      scene.add(sphere);

      // --- Energy Ring ---
      const ringGeometry = new THREE.TorusGeometry(1.2, 0.08, 16, 64);
      const ringMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uIntensity: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float uTime;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(uv.x * 6.2831 * 3.0 + uTime * 4.0) * 0.05;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          varying vec2 vUv;
          uniform float uTime;
          uniform float uIntensity;
          void main() {
            vec3 color = mix(
              vec3(0.3, 0.0, 0.8),
              vec3(0.6, 0.2, 1.0),
              sin(vUv.x * 6.2831 + uTime * 3.0) * 0.5 + 0.5
            );
            float alpha = uIntensity * 0.7;
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      scene.add(ring);

      // --- Second ring for depth ---
      const ring2Geometry = new THREE.TorusGeometry(1.6, 0.04, 16, 64);
      const ring2Material = ringMaterial.clone();
      const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
      ring2.rotation.x = Math.PI / 3;
      ring2.rotation.y = Math.PI / 6;
      scene.add(ring2);

      // Collect for cleanup
      const geometries = [particleGeometry, sphereGeometry, ringGeometry, ring2Geometry];
      const materials = [particleMaterial, sphereMaterial, ringMaterial, ring2Material];

      // --- Show overlay ---
      requestAnimationFrame(() => {
        container.classList.add('visible');
      });

      // --- Animation loop ---
      const clock = new THREE.Clock();
      const posAttr = particleGeometry.getAttribute('position') as THREE.BufferAttribute;

      // Pre-compute target radii for gather phase (avoid random in loop)
      const targetRadii = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        targetRadii[i] = 0.3 + Math.random() * 0.2;
      }
      // Pre-compute scatter speeds for dissipate phase
      const scatterSpeeds = new Float32Array(particleCount);
      for (let i = 0; i < particleCount; i++) {
        scatterSpeeds[i] = 3.0 + Math.random() * 2.0;
      }

      const animate = () => {
        const elapsed = clock.getElapsedTime();

        if (elapsed >= TOTAL_DURATION) {
          // Start fade-out
          container.classList.remove('visible');
          container.classList.add('fade-out');

          cleanup(renderer, scene, geometries, materials);

          if (!hasCompletedRef.current) {
            hasCompletedRef.current = true;
            setTimeout(() => {
              onComplete();
            }, 800);
          }
          return;
        }

        let phase: number;
        let progress: number;

        if (elapsed < PHASE_GATHER_END) {
          phase = 0;
          progress = elapsed / PHASE_GATHER_END;
          progress = progress * progress; // ease in

          // Particles converge toward center
          for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const ix = initialPositions[i3];
            const iy = initialPositions[i3 + 1];
            const iz = initialPositions[i3 + 2];
            const len = Math.sqrt(ix * ix + iy * iy + iz * iz);
            const tr = targetRadii[i];

            const tx = (ix / len) * tr;
            const ty = (iy / len) * tr;
            const tz = (iz / len) * tr;

            posAttr.array[i3] = ix + (tx - ix) * progress;
            posAttr.array[i3 + 1] = iy + (ty - iy) * progress;
            posAttr.array[i3 + 2] = iz + (tz - iz) * progress;
          }
          posAttr.needsUpdate = true;
        } else if (elapsed < PHASE_PULSE_END) {
          phase = 1;
          progress = (elapsed - PHASE_GATHER_END) / (PHASE_PULSE_END - PHASE_GATHER_END);

          // Particles orbit tightly around center
          for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const angle = elapsed * 2.0 + i * 0.1;
            const orbitRadius = 0.3 + Math.sin(elapsed * 3 + i) * 0.15;
            const ix = initialPositions[i3];
            const iy = initialPositions[i3 + 1];
            const iz = initialPositions[i3 + 2];
            const len = Math.sqrt(ix * ix + iy * iy + iz * iz);

            posAttr.array[i3] = (ix / len) * orbitRadius * Math.cos(angle);
            posAttr.array[i3 + 1] = (iy / len) * orbitRadius + Math.sin(angle) * 0.1;
            posAttr.array[i3 + 2] = (iz / len) * orbitRadius * Math.sin(angle);
          }
          posAttr.needsUpdate = true;

          // Camera shake
          camera.position.x = Math.sin(elapsed * 20) * 0.03 * (1 - progress);
          camera.position.y = Math.cos(elapsed * 15) * 0.03 * (1 - progress);
        } else {
          phase = 2;
          progress = (elapsed - PHASE_PULSE_END) / (TOTAL_DURATION - PHASE_PULSE_END);
          const eased = 1 - (1 - progress) * (1 - progress); // ease out

          // Particles scatter outward
          for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const speed = scatterSpeeds[i];
            posAttr.array[i3] = initialPositions[i3] * eased * speed * 0.3;
            posAttr.array[i3 + 1] = initialPositions[i3 + 1] * eased * speed * 0.3;
            posAttr.array[i3 + 2] = initialPositions[i3 + 2] * eased * speed * 0.3;
          }
          posAttr.needsUpdate = true;

          // Fade particles out
          particleMaterial.uniforms.uOpacity.value = 1 - eased;

          // Reset camera
          camera.position.x = 0;
          camera.position.y = 0;
        }

        // Update all uniforms
        particleMaterial.uniforms.uTime.value = elapsed;
        particleMaterial.uniforms.uPhase.value = phase;
        particleMaterial.uniforms.uProgress.value = progress;

        sphereMaterial.uniforms.uTime.value = elapsed;
        sphereMaterial.uniforms.uPhase.value = phase;
        sphereMaterial.uniforms.uProgress.value = progress;
        sphereMaterial.uniforms.uIntensity.value = phase === 2 ? Math.max(0, 1 - progress * 1.5) : progress;

        ringMaterial.uniforms.uTime.value = elapsed;
        ringMaterial.uniforms.uIntensity.value = phase === 2 ? Math.max(0, 1 - progress * 1.5) : Math.min(progress * 2, 1);

        ring2Material.uniforms.uTime.value = elapsed;
        ring2Material.uniforms.uIntensity.value = phase === 2 ? Math.max(0, 1 - progress * 1.5) : Math.min(progress * 1.5, 0.6);

        // Rotate rings
        ring.rotation.z += 0.02;
        ring2.rotation.z -= 0.015;
        ring2.rotation.x += 0.01;

        renderer.render(scene, camera);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Store cleanup for unmount
      cleanupRef.current = () => {
        window.removeEventListener('resize', handleResize);
        cleanup(renderer, scene, geometries, materials);
      };
    }, 50); // Small delay ensures canvas is in the DOM after dynamic import

    return () => {
      clearTimeout(initTimeout);
      cleanupRef.current?.();
    };
  }, [isPlaying, onComplete, cleanup]);

  if (!isPlaying) return null;

  return (
    <div
      ref={containerRef}
      className="hollow-purple-overlay"
    >
      <canvas ref={canvasRef} className="hollow-purple-canvas" />
    </div>
  );
};

export default HollowPurpleAnimation;
