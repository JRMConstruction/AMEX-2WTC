import { ArrowRight, MoveVertical } from "lucide-react";

const cards = [
  { title: "270 Park Playbook", text: "Proven strategies from 270 Park applied to productivity, quality, agility, and speed.", image: "/assets/renderings/amex-2wtc-fulton.jpg" },
  { title: "Outdoor Space Network", text: "Terraces, corner gardens, and sedum roofs that connect people to nature.", image: "/assets/renderings/amex-2wtc-looking-up.jpg" },
  { title: "Elevator / Mobility", text: "Efficient vertical transportation designed for people, goods, and building operations.", image: "" },
  { title: "Delivery Heatmap", text: "Real-time view of activity density, conflicts, and mitigation planning.", image: "heatmap" },
  { title: "Executive Reporting", text: "Dashboards and KPIs for visibility, performance, and decision support.", image: "/assets/renderings/amex-2wtc-day-crown.jpg" },
];

export default function StackBottomCards() {
  return (
    <section className="stack-bottom-cards">
      {cards.map((card) => (
        <button key={card.title}>
          <div className={`bottom-card-image ${card.image === "heatmap" ? "heatmap" : ""}`}>
            {card.image && card.image !== "heatmap" && <img src={card.image} alt="" />}
            {!card.image && <MoveVertical size={42} />}
          </div>
          <div>
            <strong>{card.title}</strong>
            <p>{card.text}</p>
          </div>
          <ArrowRight size={18} />
        </button>
      ))}
    </section>
  );
}
