# ibsheet-interface

TypeScript interface definitions for IBSheet JavaScript Data Grid Library.

## Installation

### Using npm:
```bash
npm install @ibsheet/interface
```

### Using yarn:
```bash
yarn add @ibsheet/interface
```

## Overview

This package provides comprehensive TypeScript interface definitions for the IBSheet JavaScript Data Grid Library, enabling better type safety and IntelliSense support in TypeScript projects.

## Core Interfaces

### IBSheetInstance

Combined interface that includes both properties and methods of an IBSheet instance.

**Type Definition:**
```typescript
export type IBSheetInstance = IBSheetProperties & IBSheetFunctions
```

**Usage Example:**
```typescript
import type { IBSheetInstance } from '@ibsheet/interface';

let sheetInst: IBSheetInstance;

// Method usage (from IBSheetFunctions)
sheetInst.addRow(); // Row append method

// Property access (from IBSheetProperties)
const size = sheetInst['Size']; // Access Size property
```

### IBSheetProperties

TypeScript interface definitions for IBSheet configuration properties.

### IBSheetFunctions

TypeScript interface definitions for IBSheet methods and functions.

### IBSheetOptions

Interface for IBSheet initialization options.

**Usage Example:**
```typescript
import type { IBSheetOptions } from '@ibsheet/interface';

const options: IBSheetOptions = {
  Cfg: {
    SearchMode: 2,    // IBSheetProperties
    HeaderMerge: 3,   // IBSheetProperties
  }
  // ... other options
}
```

### IBSheetEvents

TypeScript interface definitions for IBSheet event handlers.

**Usage Example:**
```typescript
import type { IBSheetEvents, IBSheetOptions } from '@ibsheet/interface';

// Define event handler with proper typing
const handleAfterChange: IBSheetEvents['onAfterChange'] = (param) => { 
  // Parameter type is automatically inferred
  console.log('Data changed value:', param.val); 
};

const options: IBSheetOptions = {
  // ... other options
  Events: {
    onAfterChange: handleAfterChange
    // ... other event handlers
  }
}
```

## Additional Type Definitions

This package also includes other essential IBSheet TypeScript definitions:

- `IBSheetCreateOptions` - Options for creating IBSheet instances
- `IBStyleRowConfig` - Configuration for row styling
- `IBInfoRowConfig` - Configuration for info rows
- `IBExcelDownloadConfig` - Configuration for Excel download functionality
- And many more...

## Benefits

- ✅ **Type Safety**: Catch errors at compile time
- ✅ **IntelliSense**: Better IDE support with auto-completion
- ✅ **Documentation**: Built-in type information and hints
- ✅ **Refactoring**: Safe code refactoring with type checking

## Compatibility

This package is designed to work with:
- TypeScript 4.0+
- IBSheet JavaScript Data Grid Library

## Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## License

[MIT](./LICENSE)
