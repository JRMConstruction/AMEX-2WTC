import { Quote } from "lucide-react";

type GalleryItem = {
  title: string;
  image: string;
};

export default function ProofGallery({ items }: { items: GalleryItem[] }) {
  return (
    <section className="proof-gallery proof-panel">
      <div className="client-voice">
        <span>Source-Backed Proof</span>
        <Quote size={30} />
        <p>
          270 Park included 28 floors, more than 1.3M SF of interiors, 10,000 employees, premium office, dining,
          conference, wellness, security, and sustainable workplace environments.
        </p>
        <strong>AXP CM RFI response, May 29, 2026</strong>
        <small>Use an approved client quote only if one is cleared for external presentation.</small>
      </div>
      <div className="gallery-strip">
        {items.map((item) => (
          <article key={item.title}>
            <img src={item.image} alt="" />
            <strong>{item.title}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
