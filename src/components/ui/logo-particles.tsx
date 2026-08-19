"use client";

import { useEffect, useRef } from "react";

type LogoParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
};

type DotParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
};

const LOGO_SRC = "/assets/logo-mark.png";
const LOGO_COUNT = 25;
const DOT_COUNT = 40;
const DOT_COLORS = [
  "#f17b50",
  "#f49873",
  "#f7b596",
  "#f59664",
  "#f7ab83",
  "#faa87d",
  "#f26522",
];

function hexToRgb(hex: string): [number, number, number] {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function edgeBiasedX(width: number, edge: number) {
  const roll = Math.random();
  if (roll < 0.4) {
    return Math.random() * edge + 20;
  }
  if (roll < 0.8) {
    return width - Math.random() * edge - 20;
  }
  return edge + Math.random() * Math.max(width - edge * 2, 1);
}

function createLogos(width: number, height: number): LogoParticle[] {
  const edge = Math.min(300, width * 0.28);
  return Array.from({ length: LOGO_COUNT }, () => ({
    x: edgeBiasedX(width, edge),
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    size: 20 * Math.random() + 22,
    opacity: 0.2 * Math.random() + 0.25,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.015,
  }));
}

function createDots(width: number, height: number): DotParticle[] {
  const edge = Math.min(280, width * 0.26);
  return Array.from({ length: DOT_COUNT }, () => ({
    x: edgeBiasedX(width, edge),
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    size: 2 * Math.random() + 1.5,
    opacity: 0.25 * Math.random() + 0.2,
    color:
      DOT_COLORS[Math.floor(Math.random() * DOT_COLORS.length)] ??
      DOT_COLORS[0],
  }));
}

function wrap(value: number, min: number, max: number) {
  if (value < min) {
    return max;
  }
  if (value > max) {
    return min;
  }
  return value;
}

function repel(
  particle: { x: number; y: number },
  mouse: { x: number; y: number },
  radius: number,
  strength: number,
) {
  const dx = particle.x - mouse.x;
  const dy = particle.y - mouse.y;
  const distance = Math.hypot(dx, dy);
  if (distance === 0 || distance >= radius) {
    return;
  }
  const force = ((radius - distance) / radius) * strength;
  particle.x += (dx / distance) * force;
  particle.y += (dy / distance) * force;
}

export function LogoParticles({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const mouse = { x: 0, y: 0, active: false };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let logos: LogoParticle[] = [];
    let dots: DotParticle[] = [];
    let logoImage: HTMLImageElement | null = null;
    let frame = 0;
    let reduceMotion = motion.matches;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (logos.length === 0) {
        logos = createLogos(width, height);
        dots = createDots(width, height);
      }
    };

    const drawDots = (animate: boolean) => {
      for (const dot of dots) {
        if (animate) {
          dot.x += dot.vx;
          dot.y += dot.vy;
          if (mouse.active) {
            repel(dot, mouse, 80, 1.5);
          }
          dot.x = wrap(dot.x, 0, width);
          dot.y = wrap(dot.y, 0, height);
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.globalAlpha = dot.opacity;
        ctx.fill();

        const [r, g, b] = hexToRgb(dot.color);
        const glow = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.size * 4,
        );
        glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.4 * dot.opacity})`);
        glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    };

    const drawLogos = (animate: boolean) => {
      if (!logoImage) {
        return;
      }

      for (const logo of logos) {
        if (animate) {
          logo.x += logo.vx;
          logo.y += logo.vy;
          logo.rotation += logo.rotationSpeed;
          if (mouse.active) {
            repel(logo, mouse, 120, 2);
          }
          logo.x = wrap(logo.x, -50, width + 50);
          logo.y = wrap(logo.y, -50, height + 50);
        }

        ctx.save();
        ctx.translate(logo.x, logo.y);
        ctx.rotate(logo.rotation);
        ctx.globalAlpha = logo.opacity;
        ctx.drawImage(
          logoImage,
          -logo.size / 2,
          -logo.size / 2,
          logo.size,
          logo.size,
        );
        ctx.restore();
      }
    };

    const render = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);
      drawDots(animate);
      drawLogos(animate);
    };

    const tick = () => {
      render(!reduceMotion);
      frame = requestAnimationFrame(tick);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    const onMotionChange = () => {
      reduceMotion = motion.matches;
    };

    const image = new Image();
    image.src = LOGO_SRC;
    image.onload = () => {
      logoImage = image;
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    motion.addEventListener("change", onMotionChange);
    frame = requestAnimationFrame(tick);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      motion.removeEventListener("change", onMotionChange);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <canvas ref={canvasRef} className="size-full" style={{ opacity: 0.8 }} />
    </div>
  );
}
