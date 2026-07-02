export default function PixelGrid({ className = '' }) {
  // A loose scatter of rounded squares, echoing the source design's
  // decorative grid motif behind the hero imagery.
  const cells = [
    [0, 0], [1, 0], [0, 1], [1, 1], [2, 1],
    [1, 2], [2, 2], [3, 2], [2, 3], [3, 3],
  ];
  const size = 18;
  const gap = 5;

  return (
    <svg className={className} width={size * 4 + gap * 3} height={size * 4 + gap * 3} viewBox={`0 0 ${size * 4 + gap * 3} ${size * 4 + gap * 3}`} fill="none" aria-hidden="true">
      {cells.map(([x, y], i) => (
        <rect
          key={i}
          x={x * (size + gap)}
          y={y * (size + gap)}
          width={size}
          height={size}
          rx={4}
          className="fill-brand-100"
        />
      ))}
    </svg>
  );
}
