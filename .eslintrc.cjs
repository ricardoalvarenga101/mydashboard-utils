module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "standard"
  ],
  plugins: ["import", "node", "promise"],
  ignorePatterns: ["node_modules/", "dist/", "build/", "tmp/"],
  rules: {
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-console": "off",
    "prefer-const": "warn"
  }
};