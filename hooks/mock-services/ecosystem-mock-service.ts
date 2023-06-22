import path from "path";
import {
  parseMembers,
  parseTiers,
} from "../../types/validation/ecosystem-parser";
import { readJSONFromFile } from "../utils/conversion-utils";
import { Member, Tier } from "../../types/ecosystem";

const basePath =
  process.env.MOCK_PATH || path.join(__dirname, "..", "..", "content", "mock");

export async function fetchMembersMock(): Promise<Member[]> {
  const membersPath = path.join(basePath, "ecosystem", "members.json");
  const membersContent = await readJSONFromFile(membersPath);
  return parseMembers(membersContent);
}
export async function fetchTiersMock(): Promise<Tier[]> {
  const tiersPath = path.join(basePath, "ecosystem", "tiers.json");
  const tiersContent = await readJSONFromFile(tiersPath);
  return parseTiers(tiersContent);
}
