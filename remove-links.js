import fs from "node:fs";
import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentFolder = "./temp";

const clearFromLink = (path) => {
  if (!path.endsWith(".md")) {
    return;
  }

  const newPath = path.replace("src", contentFolder);
  const content = fs.readFileSync(path).toString();
  const cleared = content.replaceAll("[", "").replaceAll(/\].*\)/g, "");

  const splitted = newPath.split("/");

  const filename = splitted[splitted.length - 1];
  const dirToCreate = newPath.replace(filename, "");
  execSync(`mkdir -p ${dirToCreate}`).toString().trim();

  console.log({ contentFolder, dirToCreate });
  fs.writeFileSync(newPath, cleared);
};

const listMarkdownInFolder = (path, acc = []) => {
  const files = fs.readdirSync(path);

  for (const file of files) {
    const filePath = join(path, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      listMarkdownInFolder(filePath, acc);
    } else {
      acc.push(filePath);
    }
  }

  return acc;
};

execSync(`rm -rf ${contentFolder}`).toString().trim();

fs.mkdirSync(contentFolder);

listMarkdownInFolder("./src/content/docs").forEach(clearFromLink);
