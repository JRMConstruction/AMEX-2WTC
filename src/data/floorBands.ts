export type FloorCategory =
  | "workplace"
  | "exchange"
  | "executive"
  | "wellness"
  | "auditorium"
  | "lobby"
  | "food";

export type FloorBand = {
  id: string;
  label: string;
  title: string;
  category: FloorCategory;
  color: string;
  floors: string;
  description: string;
  jrmFocus: string[];
  riskItems: string[];
  proofPoint: string;
};

export const floorBands: FloorBand[] = [
  {
    id: "executive-53-55",
    label: "53-55",
    title: "Executive Committee",
    category: "executive",
    color: "#006FCF",
    floors: "53-55",
    description: "Leadership workplace, executive arrival, board environments, and client-facing hospitality.",
    jrmFocus: ["Executive sequencing", "Premium millwork", "Security integration", "Client-ready turnover"],
    riskItems: ["Specialty ceilings", "Executive AV", "Material lead times"],
    proofPoint: "270 Park executive interiors inform high-touch review, mockup, and finish control.",
  },
  {
    id: "highrise-47-52",
    label: "47-52",
    title: "High-Rise Workplace",
    category: "workplace",
    color: "#2F9CEB",
    floors: "47-52",
    description: "Workplace communities with skyline views, collaboration neighborhoods, and focus settings.",
    jrmFocus: ["Kit-of-parts rollout", "Trade flow", "Floor-by-floor readiness", "Punch strategy"],
    riskItems: ["Ceiling coordination", "Furniture cadence", "Riser tie-ins"],
    proofPoint: "Large-scale workplace delivery playbooks transfer from financial headquarters work.",
  },
  {
    id: "food-46",
    label: "46",
    title: "Food Service",
    category: "food",
    color: "#107CBD",
    floors: "46",
    description: "Hospitality destination with food service, back-of-house support, and employee gathering.",
    jrmFocus: ["Kitchen infrastructure", "Health inspections", "Exhaust coordination", "Equipment procurement"],
    riskItems: ["Food service equipment", "Grease exhaust", "Waterproofing"],
    proofPoint: "Food, wellness, conference, and AV complexity from 270 Park shapes early coordination.",
  },
  {
    id: "exchange-44",
    label: "44",
    title: "Convening + Workplace",
    category: "exchange",
    color: "#25A55F",
    floors: "44",
    description: "A connected ecosystem for convening, flexible work, and cross-team exchange.",
    jrmFocus: ["Amenity sequencing", "MEP density", "Mockup workflow", "AV infrastructure"],
    riskItems: ["Specialty lighting", "Broadcast AV", "Security interfaces"],
    proofPoint: "Amenity delivery lessons from 270 Park reduce complexity in shared destinations.",
  },
  {
    id: "midrise-37-42",
    label: "37-42",
    title: "Mid-Rise Workplace",
    category: "workplace",
    color: "#5CB85C",
    floors: "37-42",
    description: "High-performance workplace communities connected by shared collaboration hubs.",
    jrmFocus: ["Repeatable floor logic", "Trade stacking", "Quality checkpoints", "Turnover readiness"],
    riskItems: ["Submittal velocity", "Lighting packages", "Acoustics"],
    proofPoint: "Repeatable workplace scale mirrors the disciplined rollout required at 270 Park.",
  },
  {
    id: "level-35",
    label: "35",
    title: "Convening + Exchange",
    category: "exchange",
    color: "#C89B2C",
    floors: "35",
    description: "A shared destination connecting workplace communities through hospitality, collaboration, and outdoor space.",
    jrmFocus: ["AV and broadcast coordination", "Food service adjacency planning", "Terrace interface coordination", "High-density trade sequencing", "Mockup-to-production workflow"],
    riskItems: ["Long lead specialty lighting", "AV infrastructure", "Security integration", "MEP ceiling coordination"],
    proofPoint: "JRM's recent headquarters experience informs amenity delivery, executive reporting, and high-touch financial-services interiors.",
  },
  {
    id: "workplace-28-34",
    label: "28-34",
    title: "Workplace",
    category: "workplace",
    color: "#69CBB8",
    floors: "28-34",
    description: "Flexible neighborhoods with shared services, focus rooms, and team settings.",
    jrmFocus: ["Procurement cadence", "Standard room types", "Readiness scoring", "Furniture coordination"],
    riskItems: ["MEP ceiling density", "Room booking tech", "Mockup approvals"],
    proofPoint: "Workplace kit-of-parts control supports predictable quality at scale.",
  },
  {
    id: "large-convening-23-26",
    label: "23-26",
    title: "Large Convening + Food Service",
    category: "food",
    color: "#E58231",
    floors: "23-26",
    description: "Multi-floor exchange levels with major meeting, hospitality, and service functions.",
    jrmFocus: ["Vertical adjacencies", "Back-of-house logistics", "Meeting technology", "Inspection planning"],
    riskItems: ["Kitchen equipment", "Acoustic separation", "Freight priority"],
    proofPoint: "JRM applies lessons from complex headquarters amenity environments.",
  },
  {
    id: "wellness-16",
    label: "16",
    title: "Fitness & Wellness",
    category: "wellness",
    color: "#C24DAA",
    floors: "16",
    description: "Wellness floor supporting colleague health, recharge, and daily routines.",
    jrmFocus: ["Wet-area detailing", "Acoustic control", "Equipment loading", "Finish durability"],
    riskItems: ["Waterproofing", "Structural coordination", "Specialty equipment"],
    proofPoint: "Premium amenity coordination from 270 Park supports wellness delivery.",
  },
  {
    id: "lowrise-7-15",
    label: "7-15",
    title: "Low-Rise Workplace",
    category: "workplace",
    color: "#7B61FF",
    floors: "7-15",
    description: "Arrival-adjacent workplace communities with quick access to exchange and support spaces.",
    jrmFocus: ["Early release floors", "Turnover cadence", "Material flow", "Trade access"],
    riskItems: ["Base-building interfaces", "Furniture logistics", "Inspection volume"],
    proofPoint: "Floor readiness controls support path to occupancy from the first workplace releases.",
  },
  {
    id: "auditorium-7-8",
    label: "7-8",
    title: "Auditorium",
    category: "auditorium",
    color: "#6546C9",
    floors: "7-8",
    description: "Broadcast-capable gathering environment for town halls and major colleague moments.",
    jrmFocus: ["Broadcast AV", "Acoustic envelope", "Rigging", "Life safety interfaces"],
    riskItems: ["AV / broadcast", "Specialty seating", "Acoustics"],
    proofPoint: "Financial services-grade convening spaces at 270 Park inform systems integration.",
  },
  {
    id: "lobby",
    label: "P-Lobby",
    title: "Colleague Center / Lobby Arrival",
    category: "lobby",
    color: "#8895A7",
    floors: "P-Lobby",
    description: "A high-clarity arrival and colleague center that establishes the vertical campus experience.",
    jrmFocus: ["Security turnstiles", "Lobby finishes", "Wayfinding", "Brand moments"],
    riskItems: ["Security integration", "Public interfaces", "Finish protection"],
    proofPoint: "Major headquarters arrival environments inform durable, premium first impressions.",
  },
];
