const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../dist/ibsheet-interface');
const packageJsonPath = path.join(outDir, 'package.json');

const packageJsonContent = {
  name: "@ibsheet/interface",
  version: "1.0.0",
  main: "./index.js",
  module: "./index.js",
  types: "./index.d.ts",
  license: "MIT",
  repository: {
    type: 'git',
    url: 'git+https://github.com/ibsheet/ibsheet-interface.git',
  },
  keywords: ['IBSheet', 'ibsheet', 'typescript', 'interface'],
  author: 'IB Leaders <support@ibleaders.co.kr>',
  description: 'TypeScript interface for IBSheet',
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 2), 'utf-8');