import { readFile, readdir, unlink, writeFile } from "fs/promises";
import { createHash } from "crypto";
import { join } from "path";

console.time("Done");

const { list } = JSON.parse(
  await readFile(join("iconpacks", "list.json"), "utf8")
);
const hashes = {};

for (const ic of list) {
  console.log(`Parsing tree for '${ic.id}'`);

  const split = ic.load.split("/");
  const user = split.slice(3, 5).join("/");
  const branch = split[5];
  const path = split.slice(6, -1);

  try {
    const paths = (
      await (
        await fetch(
          `https://api.github.com/repos/${user}/git/trees/${branch}?recursive=1`
        )
      ).json()
    ).tree
      .filter(
        (x) =>
          x.path.startsWith(path.join("/")) &&
          ["png", "jpg", "webm", "lottie"].some((ext) =>
            x.path.endsWith(`${ic.suffix}.${ext}`)
          )
      )
      .map((x) => x.path.split("/").slice(path.length).join("/"))
      .filter((x) => x.length > 0);

    const result = paths.join("\n");
    hashes[ic.id] = createHash("sha256").update(result).digest("hex");

    await writeFile(join("../", "trees", `${ic.id}.txt`), result);
  } catch (e) {
    console.log(`Failed to parse tree for '${ic.id}'!`);
    continue;
  }
}

for (const f of (
  await readdir("../trees", {
    withFileTypes: true,
  })
).filter((x) => x.isFile() && !list.some((y) => x.name === `${y.id}.txt`)))
  await unlink(join("../trees", f.name));
await writeFile(join("../trees", "hashes.txt"), JSON.stringify(hashes));

console.timeEnd("Done");
