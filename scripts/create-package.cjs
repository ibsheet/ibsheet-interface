const fs = require('fs');
const path = require('path');

const outputPath = path.resolve(__dirname, "../dist/ibsheet-interface/package.json");
const pkg = require("../package.json");

const minimalPackage = {
  name: pkg.name,
  version: pkg.version,
  main: "index.js",
  module: "index.js",
  types: "index.d.ts",
  license: pkg.license,
  repository: pkg.repository,
  description: pkg.description || "",
  author: pkg.author || "",
  keywords: pkg.keywords || [],
  homepage: pkg.homepage || undefined
};


fs.writeFileSync(outputPath, JSON.stringify(minimalPackage, null, 2));
