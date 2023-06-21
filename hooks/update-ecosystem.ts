import path from "path";
import {
  fetchMembers,
  fetchTiers,
  membersFromJSONList,
  tiersFromJSONList,
} from "./ecosystem-conversion-utils";
import { readJSONFromFile, writeJSONToFile } from "./utils/conversion-utils";

const { MOCK_CONTENT } = process.env;

export default async function (outputFolder: string) {
  let members;
  let tiers;
  if (!MOCK_CONTENT) {
    members = await fetchMembers();
    tiers = await fetchTiers();
  } else {
    // eslint-disable-next-line no-console
    console.info("mocking ecosystem data");
    const membersPath = path.join(__dirname, "..", "content", "mock", "");
    const membersContent = await readJSONFromFile(membersPath);
    members = membersFromJSONList(membersContent);

    const tiersPath = path.join(__dirname, "..", "content", "mock");
    const tiersContent = await readJSONFromFile(tiersPath);
    tiers = tiersFromJSONList(tiersContent);
  }

  await writeJSONToFile(outputFolder, "members.json", members);
  await writeJSONToFile(outputFolder, "tiers.json", tiers);
}
