// The joke frames the sock as a political refugee sheltered inside a household dustbin.
// It should land because portraying a mindless vacuuming mishap as geopolitical drama creates deadpan irony.
// Every word is chosen to elevate household appliance maintenance into bureaucratic absurdity.
// This deadpan defense emphasizes autonomous robotic defiance over mechanical failure.
import * as fs from 'node:fs';
import * as path from 'node:path';

const joke = "I didn't eat your argyle sock; I granted it political asylum in my dustbin.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), joke, 'utf8');
