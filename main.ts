// Worst Superpower — make.fun bounty u-suroto-worst-superpower-461dcdbe
// Writes a single one-line useless superpower to /output/entry.txt
// (no trailing newline), using only Node's standard library.
import { mkdirSync, writeFileSync } from "node:fs";

const power =
  "I can count the exact grains of rice in any bowl, but only after you've finished eating it.";

// The gate allows 1–140 UTF-8 characters, one line, not only whitespace.
const outDir = "/output";
const outPath = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, power, "utf8");
