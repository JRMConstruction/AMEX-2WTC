export default function MiniStackContext({ onViewStack }: { onViewStack: () => void }) {
  const labels = [
    ["Executive Committee", "Level 55", 8],
    ["Executive Workplace", "Levels 53-54", 14],
    ["High-Rise Workplace", "Levels 47-52", 23],
    ["Food Service", "Level 46", 31],
    ["Convening + Workplace", "Level 44", 38],
    ["Central Exchange", "Level 35", 51],
    ["Food Service", "Levels 24-26", 64],
    ["Large Convening", "Levels 23-24", 70],
    ["Low-Rise Workplace", "Levels 9-15, 18-22", 80],
    ["Fitness + Wellness", "Level 16", 88],
    ["Auditorium", "Levels 7-8", 94],
    ["Lobby", "Ground Floor", 98],
  ];

  return (
    <section className="mini-stack-context">
      <div className="proof-section-head">
        <span>2WTC Stack Context</span>
        <strong>Central Exchange focus</strong>
      </div>
      <div className="mini-stack-body">
        <svg viewBox="0 0 360 520" role="img" aria-label="Simplified 2 WTC stack context">
          <rect x="82" y="20" width="78" height="470" rx="2" className="tower-core" />
          <rect x="74" y="95" width="94" height="64" className="tower-zone high" />
          <rect x="64" y="174" width="116" height="118" className="tower-zone mid" />
          <rect x="56" y="300" width="132" height="132" className="tower-zone low" />
          <rect x="50" y="430" width="144" height="60" className="tower-base" />
          <rect x="62" y="246" width="126" height="28" className="tower-zone active" />
          <text x="125" y="265" className="active-text">Central Exchange / Level 35</text>
          {Array.from({ length: 22 }).map((_, index) => <line key={index} x1="58" x2="188" y1={52 + index * 18} y2={52 + index * 18} />)}
          {labels.map(([title, level, y], index) => (
            <g key={`${title}-${level}-${index}`} className={title === "Central Exchange" ? "active-label" : ""}>
              <line x1="190" x2="252" y1={Number(y) * 5} y2={Number(y) * 5} />
              <text x="260" y={Number(y) * 5 - 4}>{title}</text>
              <text x="260" y={Number(y) * 5 + 10}>{level}</text>
            </g>
          ))}
        </svg>
      </div>
      <button onClick={onViewStack}>View Full Stack →</button>
    </section>
  );
}
