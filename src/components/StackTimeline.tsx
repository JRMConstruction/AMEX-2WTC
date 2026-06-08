import { deliveryTimeline } from "../data/stackBands";

type StackTimelineProps = {
  activePhase: string;
  onPhaseChange: (phase: string) => void;
};

export default function StackTimeline({ activePhase, onPhaseChange }: StackTimelineProps) {
  return (
    <section className="stack-timeline">
      {deliveryTimeline.map((phase, index) => (
        <button className={activePhase === phase.id ? "active" : ""} key={phase.id} onClick={() => onPhaseChange(phase.id)}>
          <span>{index + 1}</span>
          <strong>{phase.title}</strong>
          <small>{phase.detail}</small>
        </button>
      ))}
    </section>
  );
}
