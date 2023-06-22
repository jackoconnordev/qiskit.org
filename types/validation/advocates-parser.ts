import { z } from "zod";
import { Advocate, AdvocatesWorldRegion } from "../advocates";

const AdvocateZ: z.ZodType<Advocate> = z.object({
  city: z.optional(z.string()),
  country: z.array(z.string()),
  image: z.string(),
  location: z.optional(z.string()),
  name: z.string(),
  region: z.nativeEnum(AdvocatesWorldRegion),
  slackId: z.optional(z.string()),
  slackUsername: z.optional(z.string()),
});

function parseAdvocate(data: any): Advocate {
  return AdvocateZ.parse(data);
}

export function parseAdvocates(data: any[]): Advocate[] {
  return data.map(parseAdvocate);
}
