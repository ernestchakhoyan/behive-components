import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const dist = "dist";
const bundle = "bundle";

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  input: "src/index.js",
  external: ["react"],
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: "cjs"
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: "esm"
    },
    {
      name: "BehiveComponents",
      file: `${dist}/${bundle}.umd.js`,
      format: "umd",
      globals: {
        react: "React"
      }
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    production && terser()
  ]
};
