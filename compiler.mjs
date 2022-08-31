import { transform } from '@astrojs/compiler';
import fs from "node:fs/promises"

const source = await fs.readFile("./example.astro", "utf8")

const result = await transform(source, {
  site: 'https://mysite.dev',
  sourcefile: '/Users/astro/Code/project/src/pages/index.astro',
  sourcemap: 'both',
  internalURL: 'astro/internal',
});

await fs.writeFile('./example.js', result.code)
