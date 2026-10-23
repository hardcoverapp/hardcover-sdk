// Editor tooltips and the README link to the docs for this version of the SDK
// (docs.hardcover.app/sdk/typescript/0.1/...). A new minor version has its own
// docs, so its links must move with it.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { expect, it } from "vitest";
import pkg from "../package.json" with { type: "json" };

const src = join(import.meta.dirname, "../src");
const minor = pkg.version.split(".").slice(0, 2).join(".");

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : path.endsWith(".ts") ? [path] : [];
  });
}

const root = join(import.meta.dirname, "..");

// The source's tooltips, and the README npm shows.
const checked = [...files(src), join(root, "README.md")];

// Docs pages shared by every version, so they have no version in the path.
const unversioned = new Set(["changelog"]);

it(`links to the SDK docs for this version (${minor})`, () => {
  const wrong = checked.flatMap((file) =>
    [...readFileSync(file, "utf8").matchAll(/docs\.hardcover\.app\/sdk\/typescript\/([\w.-]+)\//g)]
      .filter((match) => match[1] !== minor && !unversioned.has(match[1] ?? ""))
      .map((match) => `${relative(root, file)}: ${match[0]}`),
  );

  expect(wrong).toEqual([]);
});
