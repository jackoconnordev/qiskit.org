enum WorldRegions {
  northAmerica = "North America",
  southAmerica = "South America",
  asiaPacific = "Asia Pacific",
  europe = "Europe",
  africa = "Africa",
  online = "Online",
  tbd = "TBD",
}

const WORLD_REGION_OPTIONS = [
  WorldRegions.northAmerica,
  WorldRegions.southAmerica,
  WorldRegions.asiaPacific,
  WorldRegions.europe,
  WorldRegions.africa,
  WorldRegions.online,
];

enum CommunityEventTypes {
  hackathon = "Hackathon",
  camp = "Camp",
  industryEvent = "Industry Event",
  openSource = "Open Source",
  workshop = "Workshop",
  challenge = "Challenge",
  networking = "Networking",
  talks = "Talks",
}

type CommunityEvent = {
  types: CommunityEventTypes[];
  title: string;
  image: string;
  // TODO: We need to clarify if region and place have default values and what
  // these are. Place and region may seem mandatory but human error is
  // possible. In that case, what's the value of place and region?
  //
  // See also:
  // https://github.com/Qiskit/qiskit.org/issues/527
  location: string;
  speaker: string;
  regions: WorldRegions[];
  date: string;
  startDate: string;
  startDateAndTime: string | null;
  endDate: string;
  to: string;
  abstract?: string;
};

const COMMUNITY_EVENT_TYPE_OPTIONS = Object.values(CommunityEventTypes).sort();

type SeminarSeriesEvent = {
  date: string;
  startDate: string;
  endDate: string;
  startDateAndTime?: string | null;
  image: string;
  institution: string;
  location: string;
  speaker: string;
  title: string;
  to: string;
};

export {
  WorldRegions,
  WORLD_REGION_OPTIONS,
  CommunityEvent,
  CommunityEventTypes,
  COMMUNITY_EVENT_TYPE_OPTIONS,
  SeminarSeriesEvent,
};
