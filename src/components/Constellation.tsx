'use client';

import { useEffect, useRef } from 'react';
import { PERSONAS } from '@/lib/data';

/**
 * Constellation — the signature hero piece.
 *
 * Najmu at the center (real photo), the six AI personas orbiting
 * around him, with pulses of "conversation" travelling along the
 * links. Cursor-reactive: nodes lean in toward the pointer.
 *
 * Canvas-based, DPR-aware, theme-aware, respects reduced motion.
 */

interface NodeState {
  /** orbit ellipse radii as fraction of canvas half-size */
  rx: number;
  ry: number;
  /** radians */
  phase: number;
  /** radians per second */
  speed: number;
  /** current cursor-lean offset (springy) */
  ox: number;
  oy: number;
  /** resolved color, refreshed on theme change */
  color: string;
}

interface Pulse {
  nodeIndex: number;
  /** 0 → 1 along the link */
  t: number;
  /** progress per second */
  speed: number;
}

// Hand-placed orbits so labels never collide: mix of radii, phases, speeds.
const ORBITS: Array<Pick<NodeState, 'rx' | 'ry' | 'phase' | 'speed'>> = [
  { rx: 0.78, ry: 0.52, phase: 0.4, speed: 0.11 },  // Umai
  { rx: 0.62, ry: 0.74, phase: 1.6, speed: -0.09 }, // Bastian
  { rx: 0.82, ry: 0.60, phase: 2.7, speed: 0.08 },  // Steward
  { rx: 0.58, ry: 0.66, phase: 3.9, speed: -0.12 }, // Lex
  { rx: 0.74, ry: 0.70, phase: 5.0, speed: 0.10 },  // Onyx
  { rx: 0.66, ry: 0.56, phase: 6.0, speed: -0.07 }, // Atlas
];

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── state ──────────────────────────────────
    const nodes: NodeState[] = ORBITS.map((o) => ({ ...o, ox: 0, oy: 0, color: '#999' }));
    const pulses: Pulse[] = [];
    let pulseTimer = 0;
    let nextPulseNode = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let pointerX: number | null = null;
    let pointerY: number | null = null;
    let hovered = -1;
    let raf = 0;
    let last = performance.now();
    let textColor = '#999';
    let ringFrom = '#ff5d3a';
    let ringTo = '#ffb93d';
    let bgElevated = '#fff';

    // ── photo ──────────────────────────────────
    const photo = new Image();
    let photoReady = false;
    photo.onload = () => { photoReady = true; };
    photo.src = '/profile_pic.jpg';

    // ── theme colors ───────────────────────────
    const refreshColors = () => {
      const cs = getComputedStyle(document.documentElement);
      nodes.forEach((n, i) => {
        n.color = cs.getPropertyValue(PERSONAS[i].colorVar).trim() || '#999';
      });
      textColor = cs.getPropertyValue('--color-text-muted').trim() || '#999';
      ringFrom = cs.getPropertyValue('--color-accent-from').trim() || '#ff5d3a';
      ringTo = cs.getPropertyValue('--color-accent-to').trim() || '#ffb93d';
      bgElevated = cs.getPropertyValue('--color-bg-elevated').trim() || '#fff';
    };
    refreshColors();

    const themeObserver = new MutationObserver(refreshColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // ── sizing ─────────────────────────────────
    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // ── pointer ────────────────────────────────
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointerX = null;
      pointerY = null;
    };
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);

    // ── helpers ────────────────────────────────
    const alpha = (hex: string, a: number) => {
      // supports #rgb / #rrggbb
      let h = hex.replace('#', '');
      if (h.length === 3) h = h.split('').map((c) => c + c).join('');
      const r = parseInt(h.slice(0, 2), 16);
      const g = parseInt(h.slice(2, 4), 16);
      const b = parseInt(h.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    };

    const nodePosition = (n: NodeState, t: number, cx: number, cy: number, half: number) => {
      const angle = n.phase + (reducedMotion ? 0 : t * n.speed);
      return {
        x: cx + Math.cos(angle) * n.rx * half + n.ox,
        y: cy + Math.sin(angle) * n.ry * half + n.oy,
      };
    };

    // quadratic control point: perpendicular bow for an organic curve
    const controlPoint = (cx: number, cy: number, x: number, y: number) => {
      const mx = (cx + x) / 2;
      const my = (cy + y) / 2;
      const dx = x - cx;
      const dy = y - cy;
      const len = Math.hypot(dx, dy) || 1;
      const bow = len * 0.12;
      return { x: mx - (dy / len) * bow, y: my + (dx / len) * bow };
    };

    // ── draw ───────────────────────────────────
    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const t = now / 1000;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const half = Math.min(width, height) / 2;
      const centerR = half * 0.22;
      const nodeR = Math.max(half * 0.085, 14);

      // cursor lean — nodes drift a few px toward the pointer (they're friendly)
      hovered = -1;
      nodes.forEach((n, i) => {
        const pos = nodePosition(n, t, cx, cy, half * 0.92);
        let tx = 0;
        let ty = 0;
        if (pointerX !== null && pointerY !== null) {
          const dx = pointerX - pos.x;
          const dy = pointerY - pos.y;
          const dist = Math.hypot(dx, dy);
          if (dist < nodeR * 1.4) hovered = i;
          const influence = Math.max(0, 1 - dist / (half * 0.9));
          tx = dx * influence * 0.18;
          ty = dy * influence * 0.18;
        }
        // spring toward target offset
        n.ox += (tx - n.ox) * Math.min(dt * 6, 1);
        n.oy += (ty - n.oy) * Math.min(dt * 6, 1);
      });

      // pulses — spawn round-robin every ~1.4s
      if (!reducedMotion) {
        pulseTimer += dt;
        if (pulseTimer > 1.4) {
          pulseTimer = 0;
          pulses.push({ nodeIndex: nextPulseNode, t: 0, speed: 0.55 + Math.abs(Math.sin(nextPulseNode * 7.3)) * 0.3 });
          nextPulseNode = (nextPulseNode + 1) % nodes.length;
        }
        for (let i = pulses.length - 1; i >= 0; i--) {
          pulses[i].t += pulses[i].speed * dt;
          if (pulses[i].t >= 1) pulses.splice(i, 1);
        }
      }

      // links
      nodes.forEach((n, i) => {
        const pos = nodePosition(n, t, cx, cy, half * 0.92);
        const cp = controlPoint(cx, cy, pos.x, pos.y);
        const isHovered = hovered === i;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.quadraticCurveTo(cp.x, cp.y, pos.x, pos.y);
        ctx.strokeStyle = alpha(n.color, isHovered ? 0.55 : 0.22);
        ctx.lineWidth = isHovered ? 1.8 : 1.2;
        ctx.stroke();
      });

      // travelling pulses
      pulses.forEach((p) => {
        const n = nodes[p.nodeIndex];
        const pos = nodePosition(n, t, cx, cy, half * 0.92);
        const cp = controlPoint(cx, cy, pos.x, pos.y);
        const u = p.t;
        // point on quadratic bezier
        const ix = (1 - u) * (1 - u) * cx + 2 * (1 - u) * u * cp.x + u * u * pos.x;
        const iy = (1 - u) * (1 - u) * cy + 2 * (1 - u) * u * cp.y + u * u * pos.y;
        const fade = Math.sin(u * Math.PI); // fade in and out
        ctx.beginPath();
        ctx.arc(ix, iy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = alpha(n.color, 0.85 * fade);
        ctx.fill();
        // soft glow
        ctx.beginPath();
        ctx.arc(ix, iy, 6, 0, Math.PI * 2);
        ctx.fillStyle = alpha(n.color, 0.18 * fade);
        ctx.fill();
      });

      // persona nodes
      nodes.forEach((n, i) => {
        const pos = nodePosition(n, t, cx, cy, half * 0.92);
        const isHovered = hovered === i;
        const r = nodeR * (isHovered ? 1.18 : 1);

        // glow
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r * 1.9, 0, Math.PI * 2);
        ctx.fillStyle = alpha(n.color, isHovered ? 0.2 : 0.1);
        ctx.fill();

        // body
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = bgElevated;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = alpha(n.color, isHovered ? 1 : 0.75);
        ctx.stroke();

        // inner dot
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r * 0.38, 0, Math.PI * 2);
        ctx.fillStyle = alpha(n.color, 0.9);
        ctx.fill();

        // label
        ctx.font = `500 ${Math.max(half * 0.045, 10)}px var(--font-mono), monospace`;
        ctx.fillStyle = isHovered ? n.color : textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(PERSONAS[i].name, pos.x, pos.y + r + 6);
      });

      // center — Najmu
      // parallax tilt toward cursor
      let px = 0;
      let py = 0;
      if (pointerX !== null && pointerY !== null) {
        px = ((pointerX - cx) / half) * 5;
        py = ((pointerY - cy) / half) * 5;
      }
      const ccx = cx + px;
      const ccy = cy + py;

      // gradient ring
      const ringGrad = ctx.createLinearGradient(ccx - centerR, ccy - centerR, ccx + centerR, ccy + centerR);
      ringGrad.addColorStop(0, ringFrom);
      ringGrad.addColorStop(1, ringTo);
      ctx.beginPath();
      ctx.arc(ccx, ccy, centerR + 4, 0, Math.PI * 2);
      ctx.strokeStyle = ringGrad;
      ctx.lineWidth = 3;
      ctx.stroke();

      // soft halo
      ctx.beginPath();
      ctx.arc(ccx, ccy, centerR * 1.6, 0, Math.PI * 2);
      ctx.fillStyle = alpha(ringFrom.startsWith('#') ? ringFrom : '#ff5d3a', 0.07);
      ctx.fill();

      // photo (circular clip) or fallback
      ctx.save();
      ctx.beginPath();
      ctx.arc(ccx, ccy, centerR, 0, Math.PI * 2);
      ctx.clip();
      if (photoReady) {
        // cover-fit the photo into the circle
        const size = centerR * 2;
        const scale = Math.max(size / photo.width, size / photo.height);
        const dw = photo.width * scale;
        const dh = photo.height * scale;
        ctx.drawImage(photo, ccx - dw / 2, ccy - dh / 2, dw, dh);
      } else {
        ctx.fillStyle = ringGrad;
        ctx.fillRect(ccx - centerR, ccy - centerR, centerR * 2, centerR * 2);
        ctx.fillStyle = '#fff';
        ctx.font = `700 ${centerR * 0.8}px var(--font-display), sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('N', ccx, ccy + centerR * 0.05);
      }
      ctx.restore();

      canvas.style.cursor = hovered >= 0 ? 'pointer' : 'default';

      if (!reducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    raf = requestAnimationFrame(draw);
    // reduced motion: draw one static frame once the photo is in
    if (reducedMotion) {
      photo.onload = () => {
        photoReady = true;
        requestAnimationFrame(draw);
      };
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      themeObserver.disconnect();
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-label="Najmu and his AI team — Umai, Bastian, Steward, Lex, Onyx, and Atlas — visualized as a living constellation"
      role="img"
      style={{ width: '100%', height: '100%', minHeight: 320 }}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
