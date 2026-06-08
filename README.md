# AMEX 2 WTC Digital Twin

A polished browser-based interactive presentation prototype for the conceptual American Express 2 World Trade Center interior buildout pursuit, created for JRM Construction Management.

All project facts, metrics, risks, and milestones in this prototype are conceptual mock data for presentation purposes only.

## Setup

```bash
npm install
npm run dev
npm run build
```

## Prototype Notes

- Built with React, Vite, TypeScript, Framer Motion, and Lucide React.
- Includes light AMEX tools and dark digital twin themes.
- Uses separated mock data in `src/data`.
- Includes clickable navigation, tower stack zones, floor pins, module cards, view toggles, animated progress bars, and an active-floor detail modal.

## Replacing Mock Data Later

The mock floor program and dashboard data live in:

- `src/data/floorBands.ts`
- `src/data/dashboardMetrics.ts`

These files can later be replaced by API responses from project controls, BIM, procurement, schedule, reporting, or business intelligence systems. Keep the current TypeScript shapes as a stable UI contract, then map real source data into those structures.

## Future Enhancements

- Connect to live Power BI / Looker / Procore data
- Import BIM model or simplified glTF tower model
- Add schedule data from P6 / MS Project
- Add procurement tracking from project controls
- Add QA/QC and punch list integrations
- Add executive presentation kiosk mode
