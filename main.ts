// One-star review by a house cat of the human it lives with.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "★☆☆☆☆ Verified resident, six years. Staff opens the can, eats from a plate, and offers me the sound. Would not adopt again.";

if ([...ENTRY].length < 1 || [...ENTRY].length > 199 || ENTRY.trim() === "") {
  throw new Error("entry must be 1-199 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, ENTRY, "utf8");
