// Famous Last Words: The Funniest Epitaph — make.fun bounty entry.
// Writes one tombstone epitaph (at most 150 characters) to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 150 characters, not only whitespace,
// so the line is validated before it is written.

import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARACTERS = 150;
const OUTPUT_PATH = "/output/entry.txt";

// One line of famous last words, carved as an epitaph.
const epitaph = "Hold my beer, he said. The beer is still being held.";

// Count Unicode code points, matching the gate's character count.
const characterCount = [...epitaph].length;
if (characterCount < 1 || characterCount > MAX_CHARACTERS) {
  throw new Error(
    `Epitaph must be 1 to ${MAX_CHARACTERS} characters, got ${characterCount}.`,
  );
}
if (epitaph.trim().length === 0) {
  throw new Error("Epitaph must not be only whitespace.");
}
if (epitaph.includes("\n") || epitaph.includes("\r")) {
  throw new Error("Epitaph must be a single line.");
}

// The sandbox provides /output, but create it defensively so a local
// run behaves the same way.
mkdirSync("/output", { recursive: true });

// Write the line exactly as carved: no trailing newline, so the file
// holds precisely the epitaph text.
writeFileSync(OUTPUT_PATH, epitaph, "utf8");
