import { fetchMembers, fetchTiers } from "./ecosystem-conversion-utils";
import { writeJSONToFile } from "./utils/conversion-utils";
import {
  fetchMembersMock,
  fetchTiersMock,
} from "./mock-services/ecosystem-mock-service";

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
    members = await fetchMembersMock();
    tiers = await fetchTiersMock();
  }

  await writeJSONToFile(outputFolder, "members.json", members);
  await writeJSONToFile(outputFolder, "tiers.json", tiers);
}
