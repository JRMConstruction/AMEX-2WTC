const legend = [
  ["Executive / Leadership", "executive"],
  ["High-Rise Workplace", "workplace-high"],
  ["Food Service", "food"],
  ["Convening + Workplace", "exchange"],
  ["Central Exchange / Convening", "central"],
  ["Large Convening + Food Service", "large"],
  ["Fitness & Wellness", "wellness"],
  ["Low-Rise Workplace", "workplace-low"],
  ["Auditorium", "auditorium"],
  ["Lobby / Arrival", "lobby"],
  ["Outdoor Space", "outdoor"],
];

export default function StackLegend() {
  return (
    <div className="stack-legend">
      {legend.map(([label, tone]) => (
        <div key={label}>
          <span className={`legend-swatch ${tone}`} />
          <strong>{label}</strong>
        </div>
      ))}
    </div>
  );
}
