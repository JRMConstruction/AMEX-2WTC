import { BadgeDollarSign, Building2, CalendarCheck, MapPin, ShieldCheck, Sparkles, SquareStack, UsersRound } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Location", value: "270 Park Avenue, New York, NY" },
  { icon: Building2, label: "Client / Owner", value: "JPMorgan Chase & Co." },
  { icon: ShieldCheck, label: "Role", value: "Interiors General Contractor" },
  { icon: SquareStack, label: "Interior Buildout Scope", value: "28 floors" },
  { icon: Building2, label: "Interior Buildout Area", value: "1.3M+ SF" },
  { icon: UsersRound, label: "Supported Population", value: "10,000 employees" },
  { icon: BadgeDollarSign, label: "Interior Budget", value: "$500M+" },
  { icon: CalendarCheck, label: "Completion", value: "October 2025" },
  { icon: Sparkles, label: "Program", value: "Offices, dining, conference, wellness, security, sustainable interiors" },
  { icon: ShieldCheck, label: "Base Building Interface", value: "Coordinated with Tishman Construction" },
];

const numbers = [
  ["28 floors", "Interior buildout scope"],
  ["1.3M+ SF", "Headquarters interiors"],
  ["10,000", "Employees supported"],
  ["$500M+", "Interior GC budget"],
  ["LEED Platinum", "WELL + Fitwel pursuit"],
  ["104", "Pricing exercises"],
];

export default function ProofSourcePanel() {
  return (
    <aside className="proof-source proof-panel">
      <span className="proof-eyebrow">Proof Source</span>
      <h2>270 Park Avenue</h2>
      <img src="assets/renderings/amex-2wtc-day-crown.jpg" alt="" />
      <p>A proven delivery platform for complex, high-performance corporate headquarters interiors.</p>
      <div className="proof-fact-list">
        {facts.map(({ icon: Icon, label, value }) => (
          <div key={label}>
            <Icon size={20} />
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <section className="proof-numbers">
        <h3>270 Park by the Numbers</h3>
        {numbers.map(([value, label]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
        <small>Source: AXP CM RFI response submitted May 29, 2026.</small>
      </section>
    </aside>
  );
}
