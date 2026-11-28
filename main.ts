import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji, one dream vacation: sunrise over the mountains.
const EMOJI = "\u{1F305}"; // 🌅

// Guard: exactly one emoji, no words, no trailing newline.
if ([...EMOJI].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EMOJI, "utf8");

// Self-check: read back and verify byte-exact output.
const back = readFileSync(outPath, "utf8");
if (back !== EMOJI) {
  throw new Error("self-check failed: entry.txt does not match the emoji");
}
