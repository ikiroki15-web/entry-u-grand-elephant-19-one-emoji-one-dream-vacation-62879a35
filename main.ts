// makefun anchor f5ce2dcc2ca554e024f73e87d89c32c608cd3bf9 round 34239925
// One Emoji, One Dream Vacation — desert island postcard: white sand,
// one palm tree, blue water. A private island, not a generic holiday:
// specific, instantly readable across cultures even at small size,
// and a fresher pick than a beach umbrella or an aeroplane.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🏝";

// Output directory, overridable for local runs; the grader uses /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate wants exactly one emoji: a single Unicode code point.
function assertSingleEmoji(value: string): void {
  if ([...value].length !== 1) {
    throw new Error("entry must be exactly one emoji");
  }
}

// Write the emoji as UTF-8 with no trailing newline.
function writeEntry(dir: string, value: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), value, "utf8");
}

assertSingleEmoji(EMOJI);
writeEntry(OUTPUT_DIR, EMOJI);
