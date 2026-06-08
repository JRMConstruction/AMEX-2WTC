import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Globe2,
  Layers3,
  Leaf,
  MapPin,
  Network,
  Sparkles,
  SquareStack,
  UsersRound,
} from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import type { NavMode } from "../data/dashboardMetrics";
import { navInterfaces } from "../data/navInterfaces";
import type { InterfaceMetric } from "../data/navInterfaces";
import ProofPage from "./ProofPage";

type NavInterfacePageProps = {
  mode: Exclude<NavMode, "STACK">;
  onModeChange: (mode: NavMode) => void;
};

export default function NavInterfacePage({ mode, onModeChange }: NavInterfacePageProps) {
  const config = navInterfaces[mode];

  if (mode === "VISION") {
    return <VisionLanding config={config} />;
  }

  if (mode === "PROOF") {
    return <ProofPage onModeChange={onModeChange} />;
  }

  return (
    <main className={`nav-interface nav-${mode.toLowerCase()}`}>
      <section className="nav-hero-panel">
        <div className="nav-hero-copy">
          <span>{config.eyebrow}</span>
          <h1>{config.title}</h1>
          <p>{config.subtitle}</p>
          <div className="nav-metric-strip">
            {config.metrics.map((metric) => <MetricPill key={metric.label} metric={metric} />)}
          </div>
        </div>
        <img src={config.image} alt="" />
      </section>

      <section className="nav-workbench">
        <Panel title={config.leftTitle} items={config.leftItems} />
        <div className="nav-center-panel">
          <div className="nav-center-heading">
            {mode === "DELIVERY" ? <CalendarDays size={20} /> : mode === "EXPERIENCE" ? <Network size={20} /> : <Layers3 size={20} />}
            <div>
              <span>{mode}</span>
              <h2>{config.centerTitle}</h2>
            </div>
          </div>
          {mode === "DELIVERY" ? <DeliveryGantt /> : mode === "EXPERIENCE" ? <ExperienceOrgChart /> : mode === "REPORTING" ? <ReportingDashboard /> : (
            <div className="nav-diagram">
              {config.centerItems.map((item, index) => (
                <motion.div
                  className="nav-diagram-step"
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <strong>{index + 1}</strong>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <Panel title={config.rightTitle} items={config.rightItems} alert={mode === "RISK"} />
      </section>

      <section className="nav-card-row">
        {config.cards.map((card) => (
          <button key={card.title}>
            <div className={`nav-card-image ${!card.image ? "generated-heatmap" : ""}`}>
              {card.image && <img src={card.image} alt="" />}
            </div>
            <div>
              <strong>{card.title}</strong>
              <p>{card.text}</p>
            </div>
            <ArrowRight size={18} />
          </button>
        ))}
      </section>
    </main>
  );
}

function VisionLanding({ config }: { config: typeof navInterfaces.VISION }) {
  const heroStats = [
    { icon: Building2, title: "Vertical Campus", text: "Integrated workplace across 55 floors", tip: "Hover cards reveal the story behind each pursuit theme." },
    { icon: UsersRound, title: "Colleague Experience", text: "Human-centered spaces for connection and focus", tip: "Use these theme tiles as quick entry points into deeper presentation sections." },
    { icon: Leaf, title: "Outdoor Space", text: "52,090 SF of terraces, gardens, and green roofs", tip: "Green moments mark exchange floors, terraces, and wellness-oriented workplace zones." },
    { icon: Globe2, title: "Global Headquarters", text: "A world-class home for American Express", tip: "The interface connects vision, stack, experience, delivery, proof, risk, and reporting." },
    { icon: CalendarCheck, title: "Path to Occupancy", text: "Target opening in 2031", tip: "Delivery views translate the vision into schedule, risk, turnover, and reporting controls." },
  ];

  const priorities = [
    { icon: Building2, title: "Vertical Campus", text: "A seamless campus that connects people, ideas, and opportunity." },
    { icon: SquareStack, title: "Exchange Levels", text: "Signature destination floors for connection, hospitality, and culture." },
    { icon: UsersRound, title: "Workplace Communities", text: "Flexible, inclusive spaces that empower every way we work." },
    { icon: Leaf, title: "Outdoor Terraces & Gardens", text: "Wellness by design with terraces, gardens, and green roofs." },
    { icon: Sparkles, title: "Executive & Client Experience", text: "Elevated environments for leadership, clients, and global guests." },
  ];

  const cards = [
    { title: "Urban Context", text: "2 WTC and its role in Lower Manhattan's transformation.", image: "/assets/renderings/amex-2wtc-day-crown.jpg" },
    { title: "Arrival Experience", text: "World-class arrival for colleagues, clients, and guests.", image: "/assets/renderings/amex-2wtc-greenwich.jpg" },
    { title: "Outdoor Space Network", text: "Connected terraces, gardens, and green roofs across the tower.", image: "/assets/renderings/amex-2wtc-looking-up.jpg" },
    { title: "Workplace Vision", text: "Human-centered environments designed for how we work.", image: "/assets/renderings/amex-2wtc-fulton.jpg" },
    { title: "270 Park Playbook", text: "Proven strategies from 270 Park to drive productivity and pride.", image: "/assets/renderings/amex-2wtc-hero.jpg" },
    { title: "Executive Reporting", text: "Dashboards and KPIs for visibility, performance, and decision support.", image: "/assets/renderings/amex-2wtc-dusk-crown.jpg" },
  ];

  return (
    <main className="vision-page">
      <section className="vision-overview vision-panel">
        <h2>Project Overview</h2>
        <img src="/assets/renderings/amex-2wtc-hero.jpg" alt="" />
        <div className="vision-fact-list">
          <span className="vision-tooltip" data-tip="Primary project address and campus anchor."><MapPin size={20} />200 Greenwich Street<br />New York, NY 10007</span>
          <span><Building2 size={20} />Foster + Partners</span>
          <span><UsersRound size={20} />American Express</span>
          <span><CalendarDays size={20} />Opening 2031</span>
          <span><SquareStack size={20} />55 floors / 1,226 ft</span>
          <span><Leaf size={20} />52,090 SF Outdoor Space</span>
        </div>
        <p>RFI-informed delivery controls with client-planning data for workplace and stack layers.</p>
      </section>

      <section className="vision-main">
        <div className="vision-hero vision-panel">
          <img src={config.image} alt="" />
          <div className="vision-hero-copy">
            <span>Vision</span>
            <h1>The Future Home of American Express</h1>
            <p>The final piece of the World Trade Center becomes a next-generation vertical campus for collaboration, hospitality, wellness, and leadership.</p>
          </div>
          <div className="vision-hero-stats">
            {heroStats.map(({ icon: Icon, title, text, tip }) => (
              <div className="vision-tooltip" data-tip={tip} key={title}>
                <Icon size={28} />
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="vision-priorities vision-panel">
          <h2>Vision Priorities</h2>
          <div>
            {priorities.map(({ icon: Icon, title, text }) => (
              <button className="vision-tooltip" data-tip={`Open the related ${title.toLowerCase()} view from the top navigation.`} key={title}>
                <Icon size={34} />
                <strong>{title}</strong>
                <span>{text}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <aside className="vision-side">
        <div className="vision-panel building-facts">
          <h2>Building Facts</h2>
          {config.metrics.map((metric) => (
            <div className="vision-tooltip" data-tip={`${metric.label}: ${metric.detail}`} key={metric.label}>
              <strong>{metric.label}</strong>
              <span>{metric.value}</span>
            </div>
          ))}
          <div><strong>Typical Floor Plates</strong><span>52,500 / 42,600 / 31,800 RSF</span></div>
          <div><strong>Elevators</strong><span>43 Passenger / 7 Service / 1 Lobby</span></div>
        </div>

        <div className="vision-panel wtc-context">
          <h2>World Trade Center Context</h2>
          <p>2 World Trade Center is the final piece of the World Trade Center campus, completing a bold vision for Lower Manhattan.</p>
          <div className="context-map vision-tooltip" data-tip="2 World Trade Center anchors the northeast edge of the World Trade Center campus.">
            <div className="wtc-location-marker" role="img" aria-label="2 World Trade Center location">
              <span>2 WTC</span>
              <strong>200 Greenwich St</strong>
            </div>
            <small>Map data © OpenStreetMap contributors</small>
          </div>
        </div>
      </aside>

      <section className="vision-card-row">
        {cards.map((card) => (
          <button className="vision-tooltip" data-tip={`Preview ${card.title}. Click-style cards introduce deeper presentation modules.`} key={card.title}>
            <img src={card.image} alt="" />
            <div>
              <strong>{card.title}</strong>
              <p>{card.text}</p>
            </div>
            <ArrowRight size={20} />
          </button>
        ))}
      </section>
    </main>
  );
}

function ReportingDashboard() {
  useEffect(() => {
    const existingScript = document.getElementById("jrm-flippingbook-embed-script");
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "jrm-flippingbook-embed-script";
    script.async = true;
    script.defer = true;
    script.src = "https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=271109749";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flippingbook-report">
      <div className="flippingbook-title">
        <strong>Interiors Monthly Report</strong>
        <span>Embedded JRM flipping book: January 2025</span>
      </div>
      <div className="flippingbook-frame">
        <a
          href="https://brochures.jrmcm.com/view/271109749/"
          className="fbo-embed"
          data-fbo-id="87e6c95f5a"
          data-fbo-ratio="3:2"
          data-fbo-lightbox="yes"
          data-fbo-width="100%"
          data-fbo-height="auto"
          data-fbo-version="1"
          style={{ maxWidth: "100%" }}
        >
          Interiors Monthly Report - January 2025
        </a>
      </div>
    </div>
  );
}

const preconTeam = [
  { name: "Keith Frerichs", role: "Vice President Interiors", group: "Executive Lead", image: "/assets/team/keith-frerichs.jpg", featured: true },
  { name: "Antonina Caruso", role: "Vice President Business Development", group: "Client Strategy", image: "/assets/team/antonina-caruso.jpg", featured: true },
  { name: "Adam Brueckner", role: "Vice President Field Operations", group: "Field Leadership", image: "/assets/team/adam-brueckner.jpg", featured: true },
  { name: "Aaron Jones", role: "Senior Project Manager", group: "Project Controls", image: "/assets/team/aaron-jones.jpg" },
  { name: "Aaron Chaney", role: "Project Manager", group: "Preconstruction", image: "/assets/team/aaron-chaney.jpg" },
  { name: "Dana Craighead", role: "Construction Scheduler", group: "Schedule", image: "/assets/team/dana-craighead.jpg" },
  { name: "Eve Vick", role: "Director of Scheduling", group: "Schedule", image: "/assets/team/eve-vick.jpg" },
  { name: "Chris Palma", role: "Construction Lead", group: "Field Execution", image: "/assets/team/chris-palma.jpg" },
  { name: "John Porcelli", role: "Superintendent", group: "Field Execution", image: "/assets/team/john-porcelli.jpg" },
  { name: "Catherine Theocharis", role: "EHS Manager", group: "Safety", image: "/assets/team/catherine-theocharis.svg" },
  { name: "Michael Kersten", role: "Director of Permitting", group: "Permitting", image: "/assets/team/michael-kersten.jpg" },
  { name: "Gianny Baidal", role: "Senior VDC Manager", group: "VDC", image: "/assets/team/gianny-baidal.jpg" },
  { name: "Jorgelina Sabez", role: "Senior Project Coordinator", group: "Coordination", image: "/assets/team/jorgelina-sabez.jpg" },
  { name: "Ahmed Mahmud", role: "Rotation Program Trainee", group: "Project Support", image: "/assets/team/ahmed-mahmud.jpg" },
  { name: "Mario Javier Romero", role: "Project Support", group: "Project Support", image: "/assets/team/mario-javier-romero.jpg" },
  { name: "Jordan Reid", role: "Project Support", group: "Project Support", image: "/assets/team/jordan-reid.jpg" },
];

const teamWorkstreams = [
  "Executive + client strategy",
  "Schedule and logistics control",
  "Field leadership and safety",
  "Permitting, VDC, and coordination",
];

function ExperienceOrgChart() {
  const featured = preconTeam.filter((member) => member.featured);
  const bench = preconTeam.filter((member) => !member.featured);

  return (
    <div className="experience-team">
      <div className="team-board-header">
        <div>
          <span>Experience</span>
          <strong>Pre-Construction Project Team</strong>
          <p>Named JRM staffing bench for early alignment, planning, schedule control, safety, permitting, VDC, and field execution.</p>
        </div>
        <div className="team-stat">
          <b>{preconTeam.length}</b>
          <span>Team Members</span>
        </div>
      </div>
      <div className="team-feature-row">
        {featured.map((member, index) => (
          <motion.article
            className="team-feature-card"
            key={member.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <img src={member.image} alt={member.name} />
            <div>
              <span>{member.group}</span>
              <strong>{member.name}</strong>
              <p>{member.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="team-workstreams" aria-label="Preconstruction workstreams">
        {teamWorkstreams.map((item, index) => (
          <span key={item}><b>{index + 1}</b>{item}</span>
        ))}
      </div>
      <div className="team-card-grid">
        {bench.map((member, index) => (
          <motion.article
            className="team-person-card"
            key={member.name}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12 + index * 0.025 }}
          >
            <img src={member.image} alt={member.name} />
            <div>
              <span>{member.group}</span>
              <strong>{member.name}</strong>
              <p>{member.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

const deliveryRows = [
  { phase: "Base Building Milestones", owner: "Initial + final floor turnovers", start: 2, duration: 22, progress: 100, status: "Logic", tone: "blue" },
  { phase: "Long-Lead Procurement", owner: "Early release / pre-purchase", start: 12, duration: 24, progress: 82, status: "Early", tone: "teal" },
  { phase: "4-6 Floor Packages", owner: "Two-floor concurrent waves", start: 28, duration: 34, progress: 70, status: "Block", tone: "gold" },
  { phase: "PANYNJ / QAD Path", owner: "Pre-walks, HASP, TCAP, inspections", start: 38, duration: 30, progress: 68, status: "TCAP", tone: "blue" },
  { phase: "MEP / AV / Security", owner: "Revit, Navisworks, VDC, commissioning", start: 48, duration: 32, progress: 64, status: "Coord", tone: "green" },
  { phase: "TCO Readiness", owner: "REO / QAD pre-inspections", start: 68, duration: 20, progress: 55, status: "Walks", tone: "red" },
  { phase: "Final CO Closeout", owner: "DOB, closeout, life safety, violations", start: 84, duration: 12, progress: 40, status: "3-12mo", tone: "blue" },
];

const deliveryMilestones = [
  { label: "Early Release", position: 18 },
  { label: "1st Works Gate", position: 38 },
  { label: "Floor Block Turnover", position: 62 },
  { label: "TCO Walks", position: 78 },
  { label: "Occupancy", position: 94 },
];

function DeliveryGantt() {
  return (
    <div className="delivery-gantt">
      <div className="gantt-topline">
        <div>
          <strong>Path to Occupancy</strong>
          <span>RFI schedule methodology</span>
        </div>
        <div className="gantt-status">
          <b>2031</b>
          <span>Opening Target</span>
        </div>
      </div>
      <div className="gantt-months" aria-hidden="true">
        {["Q1", "Q2", "Q3", "Q4", "Q1", "Q2"].map((label, index) => <span key={`${label}-${index}`}>{label}</span>)}
      </div>
      <div className="gantt-body">
        <div className="gantt-grid" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, index) => <span key={index} />)}
        </div>
        {deliveryMilestones.map((milestone) => (
          <div className="gantt-milestone" key={milestone.label} style={{ left: `${milestone.position}%` }}>
            <i />
            <span>{milestone.label}</span>
          </div>
        ))}
        {deliveryRows.map((row, index) => (
          <div className="gantt-row" key={row.phase}>
            <div className="gantt-row-label">
              <strong>{row.phase}</strong>
              <span>{row.owner}</span>
            </div>
            <div className="gantt-track">
              <motion.div
                className={`gantt-bar ${row.tone}`}
                initial={{ width: 0 }}
                animate={{ width: `${row.duration}%` }}
                transition={{ delay: index * 0.04, duration: 0.42 }}
                style={{ left: `${row.start}%` }}
              >
                <span style={{ width: `${row.progress}%` }} />
              </motion.div>
            </div>
            <b>{row.status}</b>
          </div>
        ))}
      </div>
      <div className="gantt-legend">
        <span><i className="blue" /> Active workstream</span>
        <span><i className="teal" /> Procurement</span>
        <span><i className="gold" /> Decision gate</span>
        <span><i className="red" /> Watchlist</span>
      </div>
    </div>
  );
}

function MetricPill({ metric }: { metric: InterfaceMetric }) {
  return (
    <div className={`nav-metric ${metric.tone ?? "blue"}`}>
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <small>{metric.detail}</small>
    </div>
  );
}

function Panel({ title, items, alert = false }: { title: string; items: string[]; alert?: boolean }) {
  const Icon = alert ? CircleAlert : CheckCircle2;
  return (
    <aside className="nav-side-panel">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Icon size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
