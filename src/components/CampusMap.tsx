import { ArrowRight, Compass } from "lucide-react";

export default function CampusMap() {
  return (
    <section className="campus-panel" aria-label="World Trade Center campus map">
      <div className="panel-heading compact">
        <div>
          <span className="eyebrow">Site Map</span>
          <h2>World Trade Center Campus</h2>
        </div>
        <Compass size={18} />
      </div>
      <div className="campus-map">
        <span className="street vesey">Vesey St</span>
        <span className="street liberty">Liberty St</span>
        <span className="street west">West St</span>
        <span className="street greenwich">Greenwich St</span>
        <div className="map-building one">One World<br />Trade Center</div>
        <div className="map-building pac">Performing<br />Arts Center</div>
        <div className="map-building selected">2 World<br />Trade Center<small>200 Greenwich St</small></div>
        <div className="map-building oculus">The Oculus</div>
        <div className="map-building three">3 World<br />Trade Center</div>
        <div className="park">Liberty Park</div>
      </div>
      <button className="outline-action">Explore Campus <ArrowRight size={16} /></button>
    </section>
  );
}
