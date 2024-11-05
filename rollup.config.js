// rollup.config.js
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const url = require("@rollup/plugin-url");
const svgr = require("@svgr/rollup");
const terser = require("@rollup/plugin-terser");
const dts = require("rollup-plugin-dts");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
      },
    ],
    external: ["react"],

    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extract: "index.css",
        modules: true,
        use: ["sass"],
        minimize: true,
      }),
      url(),
      svgr({ icon: true }),
      terser(),
    ],
  },
  // {
  //   input: "dist/esm/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   external: [/\.(css|scss)$/],
  //   plugins: [dts.default()],
  // },
];
