import path from "path";
import { readJSONFromFile } from "../utils/conversion-utils";
import { Advocate } from "../../types/advocates";
import { parseAdvocates } from "../../types/validation/advocates-parser";

const basePath =
  process.env.MOCK_PATH || path.join(__dirname, "..", "..", "content", "mock");

export async function fetchAdvocatesMock(): Promise<Advocate[]> {
  const file = path.join(basePath, "advocates", "advocates.json");
  const content = await readJSONFromFile(file);
  return parseAdvocates(content);
}
