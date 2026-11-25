// The Moon Finally Answers Back — u-mang-the-moon-finally-answers-back-781a7ec1
// Writes one original line, in the Moon's voice, to /output/entry.txt.
// Gate: UTF-8 text, 1 to 240 characters, a single line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The line: the Moon, four billion years old, finally answering back.
// Wry, tired, and done granting wishes — the turn lands on "I'm a rock",
// after the wish-list setup, so the comeback arrives before the line ends.
const ENTRY =
  "Four billion years of wishes, and tonight's batch is \"text me back,\" \"make me rich,\" and one howl off-key. Sweetheart, I'm a rock — I do tides, not miracles.";

function main(): void {
  const line = ENTRY.trim();
  if (line.length < 1 || line.length > 240) {
    throw new Error(`entry is ${line.length} characters, must be 1-240`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line + "\n", "utf8");
  // Resolve the path from the entry file, never from the cwd (portability).
  const here = dirname(fileURLToPath(import.meta.url));
  void here;
  console.log(`wrote ${line.length} chars to ${outPath}`);
}

main();
