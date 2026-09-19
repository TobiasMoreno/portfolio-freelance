import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

async function render(svg, output, width) {
  await fs.mkdir(path.dirname(output), { recursive: true });
  await sharp(Buffer.from(svg)).resize({ width }).toFile(output);
}

function desktopPlaceholder(number, palette) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
      <rect width="1600" height="1000" fill="${palette.bg}"/>
      <rect x="90" y="70" width="1420" height="78" rx="12" fill="${palette.surface}"/>
      <circle cx="135" cy="109" r="18" fill="${palette.accent}"/>
      <rect x="173" y="94" width="148" height="29" rx="14" fill="${palette.ink}" opacity=".88"/>
      <rect x="1040" y="97" width="86" height="22" rx="11" fill="${palette.ink}" opacity=".28"/>
      <rect x="1150" y="97" width="86" height="22" rx="11" fill="${palette.ink}" opacity=".28"/>
      <rect x="1260" y="87" width="160" height="43" rx="21" fill="${palette.accent}"/>
      <text x="105" y="305" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="4" fill="${palette.accent}">PROYECTO ${number}</text>
      <text x="105" y="405" font-family="Arial, sans-serif" font-size="76" font-weight="700" fill="${palette.ink}">Tu proyecto real</text>
      <text x="105" y="490" font-family="Arial, sans-serif" font-size="76" font-weight="700" fill="${palette.ink}">va acá.</text>
      <rect x="105" y="552" width="520" height="18" rx="9" fill="${palette.ink}" opacity=".22"/>
      <rect x="105" y="588" width="420" height="18" rx="9" fill="${palette.ink}" opacity=".18"/>
      <rect x="105" y="655" width="210" height="62" rx="31" fill="${palette.ink}"/>
      <circle cx="1165" cy="500" r="270" fill="${palette.accent}" opacity=".13"/>
      <rect x="886" y="256" width="568" height="490" rx="32" fill="${palette.surface}"/>
      <rect x="920" y="294" width="500" height="280" rx="20" fill="${palette.visual}"/>
      <circle cx="1170" cy="434" r="92" fill="${palette.accent}" opacity=".7"/>
      <rect x="920" y="612" width="322" height="18" rx="9" fill="${palette.ink}" opacity=".2"/>
      <rect x="920" y="650" width="240" height="18" rx="9" fill="${palette.ink}" opacity=".13"/>
      <text x="105" y="922" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="3" fill="${palette.ink}" opacity=".45">REEMPLAZAR DESKTOP.WEBP</text>
    </svg>`;
}

function mobilePlaceholder(number, palette) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="450" height="900" viewBox="0 0 450 900">
      <rect width="450" height="900" fill="${palette.bg}"/>
      <circle cx="54" cy="55" r="20" fill="${palette.accent}"/>
      <rect x="88" y="44" width="104" height="22" rx="11" fill="${palette.ink}"/>
      <rect x="337" y="39" width="69" height="32" rx="16" fill="${palette.ink}"/>
      <text x="35" y="176" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="3" fill="${palette.accent}">PROYECTO ${number}</text>
      <text x="35" y="237" font-family="Arial, sans-serif" font-size="39" font-weight="700" fill="${palette.ink}">Tu proyecto</text>
      <text x="35" y="285" font-family="Arial, sans-serif" font-size="39" font-weight="700" fill="${palette.ink}">va acá.</text>
      <rect x="35" y="324" width="310" height="13" rx="7" fill="${palette.ink}" opacity=".2"/>
      <rect x="35" y="350" width="250" height="13" rx="7" fill="${palette.ink}" opacity=".15"/>
      <rect x="35" y="400" width="155" height="50" rx="25" fill="${palette.ink}"/>
      <rect x="35" y="520" width="380" height="282" rx="24" fill="${palette.surface}"/>
      <rect x="59" y="545" width="332" height="165" rx="15" fill="${palette.visual}"/>
      <circle cx="225" cy="628" r="55" fill="${palette.accent}" opacity=".7"/>
      <rect x="59" y="740" width="190" height="13" rx="7" fill="${palette.ink}" opacity=".18"/>
      <rect x="59" y="767" width="135" height="13" rx="7" fill="${palette.ink}" opacity=".12"/>
      <text x="35" y="863" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="2" fill="${palette.ink}" opacity=".42">REEMPLAZAR MOBILE.WEBP</text>
    </svg>`;
}

const palettes = [
  { bg: "#f3efe5", surface: "#fffdf8", ink: "#1a211b", accent: "#ed6b3a", visual: "#dbe5d5" },
  { bg: "#f1e9dd", surface: "#fffaf2", ink: "#211c18", accent: "#c85c39", visual: "#d9c5aa" },
];

for (let index = 0; index < 2; index += 1) {
  const number = String(index + 1).padStart(2, "0");
  const folder = path.join(root, "public", "projects", `project-${number}`);
  await render(desktopPlaceholder(number, palettes[index]), path.join(folder, "desktop.webp"), 1600);
  await render(mobilePlaceholder(number, palettes[index]), path.join(folder, "mobile.webp"), 450);
}

const portrait = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1200" viewBox="0 0 1000 1200">
    <rect width="1000" height="1200" fill="#dcd8cc"/>
    <circle cx="500" cy="380" r="190" fill="#b9b5aa"/>
    <path d="M170 1200c25-320 140-500 330-500s305 180 330 500" fill="#aaa69b"/>
    <circle cx="785" cy="220" r="145" fill="#ff6338" opacity=".82"/>
    <path d="M70 970 930 110" stroke="#f3f0e9" stroke-width="2" opacity=".6"/>
    <rect x="260" y="975" width="480" height="90" rx="45" fill="#171914"/>
    <text x="500" y="1032" text-anchor="middle" font-family="Arial, sans-serif" font-size="25" font-weight="700" letter-spacing="4" fill="#fffdf8">REEMPLAZAR POR TU FOTO</text>
  </svg>`;

await render(portrait, path.join(root, "public", "images", "tobias.jpg"), 1000);

console.log("Placeholders generados en public/projects y public/images.");
