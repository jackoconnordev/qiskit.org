import { z } from "zod";

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
  city: string;
  country: string[];
  image: string;
  location?: string;
  name: string;
  region: AdvocatesWorldRegion;
  slackId?: string;
  slackUsername?: string;
}

const Advocate: z.ZodType<Advocate> = z.object({
  city: z.string(),
  country: z.array(z.string()),
  image: z.string(),
  location: z.optional(z.string()),
  name: z.string(),
  region: z.nativeEnum(AdvocatesWorldRegion),
  slackId: z.optional(z.string()),
  slackUsername: z.optional(z.string()),
});

export function parseAdvocate(data: any): Advocate {
  return Advocate.parse(data);
}
