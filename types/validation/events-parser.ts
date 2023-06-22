import { z } from "zod";
import {
  CommunityEvent,
  CommunityEventTypes,
  WorldRegions,
  SeminarSeriesEvent,
} from "../events";

const CommunityEventZ: z.ZodType<CommunityEvent> = z.object({
  types: z.array(z.nativeEnum(CommunityEventTypes)),
  title: z.string(),
  image: z.string(),
  location: z.string(),
  speaker: z.string(),
  regions: z.array(z.nativeEnum(WorldRegions)),
  date: z.string(),
  startDate: z.string(),
  startDateAndTime: z.string().nullable(),
  endDate: z.string(),
  to: z.string(),
  abstract: z.optional(z.string()),
});

const SeminarSeriesEventZ: z.ZodType<SeminarSeriesEvent> = z.object({
  date: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  startDateAndTime: z.optional(z.string().nullable()),
  image: z.string(),
  institution: z.string(),
  location: z.string(),
  speaker: z.string(),
  title: z.string(),
  to: z.string(),
});

function parseCommunityEvent(data: any): CommunityEvent {
  return CommunityEventZ.parse(data);
}

export function parseCommunityEvents(data: any[]): CommunityEvent[] {
  return data.map(parseCommunityEvent);
}

function parseSeminarSeriesEvent(data: any): SeminarSeriesEvent {
  return SeminarSeriesEventZ.parse(data);
}

export function parseSeminarSeriesEvents(data: any[]): SeminarSeriesEvent[] {
  return data.map(parseSeminarSeriesEvent);
}
