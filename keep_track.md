```json
// removed exports map from package.json for now, to understand, might add later if needed
  "exports": {
    ".": {
      "require": {
        "types": "./dist/cjs/index.d.ts",
        "default": "./dist/cjs/index.js"
      },
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      }
    }
  },
```
