import AdvocatesAirtableRecords from "./advocate-conversion-utils";
import { writeJSONToFile } from "./utils/conversion-utils";
import { fetchAdvocatesMock } from "./mock-services/advocates-mock-service";

const { MOCK_CONTENT } = process.env;

export default async function (apiKey: any, outputFolder: string) {
  let advocates;
  if (!MOCK_CONTENT) {
    const advocatesAirtableRecords = new AdvocatesAirtableRecords(apiKey);
    advocates = await advocatesAirtableRecords.fetchAdvocates();
  } else {
    // eslint-disable-next-line no-console
    console.info("mocking advocates data");
    advocates = await fetchAdvocatesMock();
  }

  await writeJSONToFile(outputFolder, "advocates.json", advocates);
}
