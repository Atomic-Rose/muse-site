// WCAG relative luminance calculation against the site's actual theme tokens.
// This guards selected text/control colors; it is not a rendered-page WCAG audit.
import { readFileSync } from 'node:fs';

function declarations(blocks) {
  return Object.fromEntries(blocks.flatMap((block) =>
    [...block.matchAll(/(--[\w-]+)\s*:\s*(#[\da-f]{6})\b/gi)]
      .map(([, name, value]) => [name, value])
  ));
}

function themes(path, override) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8');
  const base = declarations([...source.matchAll(/:root\s*\{([^}]+)\}/g)].map((m) => m[1]));
  const match = source.match(new RegExp(`:root\\[data-theme=['"]${override}['"]\\]\\s*\\{([^}]+)\\}`));
  if (!match) throw new Error(`Missing ${override} theme in ${path}`);
  return [base, { ...base, ...declarations([match[1]]) }];
}

function luminance(hex) {
  const rgb = [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const linear = rgb.map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return linear.reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
}

let checks = 0;
const failures = [];
function check(label, palette, foreground, background, minimum) {
  const a = palette[foreground];
  const b = palette[background];
  if (!a || !b) throw new Error(`Missing color token: ${label}: ${foreground}/${background}`);
  const [dark, light] = [luminance(a), luminance(b)].sort((x, y) => x - y);
  const ratio = (light + 0.05) / (dark + 0.05);
  checks++;
  if (ratio < minimum) failures.push(`${label}: ${foreground} on ${background}: ${ratio.toFixed(2)}:1 (requires ${minimum}:1)`);
}

const home = themes('../src/pages/index.astro', 'dark');
for (const [i, palette] of home.entries()) {
  const label = `Homepage ${i === 0 ? 'light' : 'dark'}`;
  for (const background of ['--bg', '--bg-soft', '--surface']) {
    for (const text of ['--text', '--muted', '--muted-2', '--accent']) {
      check(label, palette, text, background, 4.5);
    }
    check(`${label} focus`, palette, '--accent', background, 3);
  }
  for (const background of ['--btn-bg', '--btn-bg-hover']) {
    check(`${label} button`, palette, '--btn-text', background, 4.5);
  }
}

const docs = themes('../src/styles/custom.css', 'light');
for (const [i, palette] of docs.entries()) {
  const label = `Documentation ${i === 0 ? 'dark' : 'light'}`;
  for (const background of ['--sl-color-black', '--sl-color-gray-6']) {
    for (const text of ['--sl-color-gray-1', '--sl-color-gray-2', '--sl-color-gray-3', '--sl-color-text-accent']) {
      check(label, palette, text, background, 4.5);
    }
    check(`${label} focus`, palette, '--sl-color-text-accent', background, 3);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Passed ${checks} contrast checks across homepage and documentation themes.`);
}
