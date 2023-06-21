import fs from "fs";
import util from "util";

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

export async function writeJSONToFile(
  outputFolder: string,
  filename: string,
  data: any
) {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }
  await writeFile(`${outputFolder}/${filename}`, JSON.stringify(data, null, 2));
}

export async function readJSONFromFile(path: string) {
  const content = await readFile(path, "utf-8");

  return JSON.parse(content);
}
