import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import cleanup from "rollup-plugin-cleanup";
import filesize from "rollup-plugin-filesize";
import dts from "rollup-plugin-dts"

const rollupConfig = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        plugins: [filesize()],
      },
    ],
    plugins: [
      resolve(),
      typescript(),
      babel({
        babelHelpers: "bundled",
      }),
      cleanup(),
    ],
    external: [/node_modules/],
  },
  {
    input: 'dist/dts/index.d.ts',
    output: [{file: "dist/index.d.ts", format: "esm"}],
    plugins: [dts()],
  }
];

export default rollupConfig;
