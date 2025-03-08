/**
 * Copyright (C) J Leadbetter <j@jleadbetter.com>
 * License: MIT
 **/

import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const PYODIDE_EXCLUDE = [
  "!**/*.{md,html}",
  "!**/*.d.ts",
  "!**/*.whl",
  "!**/node_modules",
];

export function viteStaticCopyPyodide() {
  const pyodideDir = dirname(fileURLToPath(import.meta.resolve("pyodide")));
  return viteStaticCopy({
    targets: [
      {
        src: [join(pyodideDir, "*")].concat(PYODIDE_EXCLUDE),
        dest: "assets",
        build: {
          outDir: '../js',
          emptyOutDir: true, // also necessary
        },
      },
    ],
  });
}

export default defineConfig({
  optimizeDeps: { exclude: ["pyodide"] },
  plugins: [viteStaticCopyPyodide()],
});
