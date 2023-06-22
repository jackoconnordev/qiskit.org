import path from "path";
import { readJSONFromFile } from "../utils/conversion-utils";
import {
  parseCommunityEvents,
  parseSeminarSeriesEvents,
} from "../../types/validation/events-parser";
import { CommunityEvent, SeminarSeriesEvent } from "../../types/events";

const basePath =
  process.env.MOCK_PATH || path.join(__dirname, "..", "..", "content", "mock");

export async function fetchUpcommingCommunityEventsMock(): Promise<
  CommunityEvent[]
> {
  const membersPath = path.join(
    basePath,
    "events",
    "upcoming-community-events.json"
  );
  const membersContent = await readJSONFromFile(membersPath);
  return parseCommunityEvents(membersContent);
}

export async function fetchPastCommunityEventsMock(): Promise<
  CommunityEvent[]
> {
  const membersPath = path.join(
    basePath,
    "events",
    "past-community-events.json"
  );
  const membersContent = await readJSONFromFile(membersPath);
  return parseCommunityEvents(membersContent);
}

export async function fetchUpcommingSeminarSeriesEventsMock(): Promise<
  SeminarSeriesEvent[]
> {
  const membersPath = path.join(
    basePath,
    "events",
    "upcoming-seminar-series-events.json"
  );
  const membersContent = await readJSONFromFile(membersPath);
  return parseSeminarSeriesEvents(membersContent);
}

export async function fetchPastSeminarSeriesEventsMock(): Promise<
  SeminarSeriesEvent[]
> {
  const membersPath = path.join(
    basePath,
    "events",
    "past-seminar-series-events.json"
  );
  const membersContent = await readJSONFromFile(membersPath);
  return parseSeminarSeriesEvents(membersContent);
}
