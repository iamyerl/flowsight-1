export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9a6bff" stopOpacity="0" />
          <stop offset="50%" stopColor="#d36bff" stopOpacity="1" />
          <stop offset="100%" stopColor="#4a7bff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9a6bff" />
          <stop offset="100%" stopColor="#4a7bff" />
        </linearGradient>
        <linearGradient id="donutG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9a6bff" />
          <stop offset="100%" stopColor="#d36bff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
