export enum AdvocatesWorldRegion {
  northAmerica = "America (North)",
  southAmerica = "America (South)",
  oceania = "Oceania",
  africa = "Africa",
  europe = "Europe",
  asia = "Asia",
}

export const ADVOCATES_WORLD_REGION_OPTIONS =
  Object.values(AdvocatesWorldRegion).sort();

export interface Advocate {
  city?: string;
  country: string[];
  image: string;
  location?: string;
  name: string;
  region: AdvocatesWorldRegion;
  slackId?: string;
  slackUsername?: string;
}
