import { VISUAL_SEGMENTS, GOLD, GOLD_LIGHT, SPIN_DURATION_MS } from "../constants";

const SEGMENT_COUNT = VISUAL_SEGMENTS.length;
const ANGLE = 360 / SEGMENT_COUNT;
const RADIUS = 170;
const CX = 200;
const CY = 200;

function segmentPath(index: number): string {
  const a = ((index * ANGLE - 90) * Math.PI) / 180;
  const b = (((index + 1) * ANGLE - 90) * Math.PI) / 180;
  const x1 = CX + RADIUS * Math.cos(a);
  const y1 = CY + RADIUS * Math.sin(a);
  const x2 = CX + RADIUS * Math.cos(b);
  const y2 = CY + RADIUS * Math.sin(b);
  return `M ${CX} ${CY} L ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 0 1 ${x2} ${y2} Z`;
}

function textPos(index: number): { x: number; y: number; angle: number } {
  const mid = ((index + 0.5) * ANGLE - 90) * (Math.PI / 180);
  const r = RADIUS * 0.62;
  return {
    x: CX + r * Math.cos(mid),
    y: CY + r * Math.sin(mid),
    angle: (index + 0.5) * ANGLE,
  };
}

export function Wheel({ rotation, spinning }: { rotation: number; spinning: boolean }) {
  return (
    <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] mx-auto">
      <div
        className="w-full h-full rounded-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning
            ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.17, 0.67, 0.12, 0.99)`
            : "none",
          boxShadow: spinning
            ? `0 0 40px ${GOLD}44, 0 0 80px ${GOLD}22`
            : `0 0 20px ${GOLD}33, 0 0 40px ${GOLD}11`,
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {VISUAL_SEGMENTS.map((seg, i) => (
            <g key={i}>
              <path d={segmentPath(i)} fill={seg.color} stroke={GOLD} strokeWidth="1.5" />
              <text
                x={textPos(i).x}
                y={textPos(i).y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={seg.value >= 40 ? GOLD_LIGHT : "#f0f0f0"}
                fontSize="18"
                fontWeight="bold"
                fontFamily="system-ui, sans-serif"
                transform={`rotate(${textPos(i).angle}, ${textPos(i).x}, ${textPos(i).y})`}
              >
                {seg.label}
              </text>
            </g>
          ))}
          <circle cx={CX} cy={CY} r="28" fill="#1a1a1a" stroke={GOLD} strokeWidth="3" />
          <circle cx={CX} cy={CY} r="8" fill={GOLD} />
        </svg>
      </div>

      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 z-10"
        style={{ filter: "drop-shadow(0 0 6px rgba(212, 168, 83, 0.6))" }}
      >
        <svg width="28" height="36" viewBox="0 0 28 36">
          <polygon points="14,36 0,0 28,0" fill={GOLD} />
        </svg>
      </div>
    </div>
  );
}
