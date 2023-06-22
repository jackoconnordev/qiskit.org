import path from "path";
import { parseAdvocate } from "../types/advocates";
import AdvocatesAirtableRecords from "./advocate-conversion-utils";
import { writeJSONToFile, readJSONFromFile } from "./utils/conversion-utils";

const { MOCK_CONTENT } = process.env;

export default async function (apiKey: any, outputFolder: string) {
  let advocates;
  if (!MOCK_CONTENT) {
    const advocatesAirtableRecords = new AdvocatesAirtableRecords(apiKey);
    advocates = await advocatesAirtableRecords.fetchAdvocates();
  } else {
    // eslint-disable-next-line no-console
    console.info("mocking advocates data");
    const file = path.join(__dirname, "..", "content", "mock");
    const content = await readJSONFromFile(file);
    advocates = parseAdvocate(content);
  }

  await writeJSONToFile(outputFolder, "advocates.json", advocates);
}
