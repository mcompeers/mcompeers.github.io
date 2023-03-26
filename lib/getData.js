import path from "path";
import fsPromises from "fs/promises";

export async function getData(url) {
  const filePath = path.join(process.cwd(), url);
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
}
