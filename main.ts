import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Emoji, One Dream Vacation — make.fun bounty entry.
// The entry is exactly one emoji: a desert island (U+1F3DD).
// A single code point, 4 bytes of UTF-8, with emoji presentation by
// default — no variation selector needed, no trailing newline, so the
// file holds precisely one emoji and nothing else.
//
// Why this emoji: a desert island is the postcard itself. At a glance
// a stranger sees the place — white sand, one palm, blue water all
// around, nowhere else to be. It is a specific dream (my own private
// island, not just any holiday), not the generic beach or the plane
// that only promises the trip. It reads instantly in every culture
// and at small size, and it is a fresher pick than the beach umbrella
// or the aeroplane everyone else reaches for first.
const EMOJI = "🏝";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate wants 1–8 characters and exactly one emoji: refuse to write
// anything else rather than silently shipping a bad entry.
if ([...EMOJI].length !== 1) {
  throw new Error(`entry must be exactly one emoji, got ${[...EMOJI].length} characters`);
}
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
