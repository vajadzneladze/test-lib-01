import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import svg from "rollup-plugin-svg";
import del from "rollup-plugin-delete";
import url from "rollup-plugin-url";
import copy from "rollup-plugin-copy";
import path from "path";
import rebase from "rollup-plugin-rebase";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    external: Object.keys(packageJson.peerDependencies || {}),
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
      {
        file: "dist/index.js",
        format: "es",
        banner: "/* eslint-disable */",
        sourcemap: false,
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),

      rebase({
        assets: "src/assets",
        output: "dist/assets",
      }),

      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      }),
      copy({
        targets: [{ src: "src/assets", dest: "dist" }],
      }),
      commonjs(),
      svg({
        transform(svg, id) {
          console.log("Processing SVG:", id);
        },
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      url({
        limit: 10 * 1024, // inline files smaller than 10KB
        include: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.eot"], // load only .ttf files
        emitFiles: true, // copy files to output directory
      }),
      postcss(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
