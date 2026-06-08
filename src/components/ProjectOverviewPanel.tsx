import { projectStats } from "../data/dashboardMetrics";

export default function ProjectOverviewPanel() {
  return (
    <aside className="overview-panel">
      <div className="amex-card">
        <div>
          <span>Member Since 2026</span>
          <strong>Partnering for Excellence</strong>
        </div>
        <div className="card-chip" />
      </div>
      <div className="project-image" aria-label="Illustrated 2 World Trade Center tower">
        <img src="assets/renderings/amex-2wtc-hero.jpg" alt="2 World Trade Center rendering" />
        <div>
          <strong>American Express Headquarters Tenant</strong>
          <span>Foster + Partners Architect</span>
        </div>
      </div>
      <h2>Project Overview</h2>
      <div className="stat-list">
        {projectStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div className="overview-stat" key={stat.label}>
              <Icon size={19} />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <small>{stat.detail}</small>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
