import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import svg from 'rollup-plugin-svg';

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
      resolve(),
      commonjs(),
      svg(),
      typescript({
        tsconfig: "./tsconfig.json"
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
