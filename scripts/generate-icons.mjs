import fs from "node:fs";
import path from "node:path";

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("Missing OPENAI_API_KEY env var");
  process.exit(1);
}

const PROMPTS = [
  {
    name: "icon-scale",
    prompt:
      "Minimalist app icon, golden classical scale of justice centered on a deep navy blue background #0b1426, soft gold #d4af37 metallic finish, single bold symbol, no text, no letters, premium law-firm aesthetic, sharp geometric vector style, perfectly centered, rounded square 1:1, high contrast, clean negative space — designed as a favicon and app icon for a Brazilian public-bidding ('licitações') course",
  },
  {
    name: "icon-document-seal",
    prompt:
      "Minimalist app icon, a folded official document with a circular embossed gold seal in the bottom-right corner, deep navy blue background #0b1426, gold #d4af37 accents, no text on the document, flat 2D vector style, single strong symbol, premium professional look, perfectly centered, rounded square 1:1, clean negative space — represents a government tender ('edital') document",
  },
  {
    name: "icon-shield-check",
    prompt:
      "Minimalist app icon, a classical heraldic shield with a single bold emerald-green checkmark in the center, deep navy blue background #0b1426, thin gold #d4af37 border around the shield, flat geometric vector style, no text, premium corporate identity, perfectly centered, rounded square 1:1, clean negative space — symbolizing approved public-sector compliance",
  },
];

const outDir = path.join(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });

async function generate({ name, prompt }) {
  console.log(`→ Generating ${name}...`);
  const r = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
      n: 1,
      quality: "high",
    }),
  });
  const data = await r.json();
  if (!r.ok) {
    console.error(`✗ ${name} failed:`, JSON.stringify(data).slice(0, 400));
    return;
  }
  const b64 = data.data?.[0]?.b64_json;
  const url = data.data?.[0]?.url;
  let buf;
  if (b64) {
    buf = Buffer.from(b64, "base64");
  } else if (url) {
    const img = await fetch(url);
    buf = Buffer.from(await img.arrayBuffer());
  } else {
    console.error(`✗ ${name} returned no image data`, data);
    return;
  }
  const out = path.join(outDir, `${name}.png`);
  fs.writeFileSync(out, buf);
  console.log(`✓ Saved ${out} (${(buf.length / 1024).toFixed(0)} KB)`);
}

for (const p of PROMPTS) {
  try {
    await generate(p);
  } catch (err) {
    console.error(`✗ ${p.name} threw:`, err.message);
  }
}
