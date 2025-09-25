import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],          // 🚨 only ESM – Next.js prefers this
  dts: true,
  clean: true,
  splitting: false,         // keep the 'use client' directive in place
  treeshake: true,
  keepNames: true,
  banner: {
    js: `'use client';`,    // force every output file to be a client component
  },
});
