# ibsheet-interface

TypeScript interface definitions for IB Sheet JavaScript Data Grid Library.

[**IBsheet 8**](https://www.ibsheet.com)(웹 데이터 그리드)의 TypeScript 타입 정의입니다. 매뉴얼 https://docs.ibsheet.com/ibsheet/v8/manual/

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

This package provides comprehensive TypeScript interface definitions for the IB Sheet JavaScript Data Grid Library, enabling better type safety and IntelliSense support in TypeScript projects.

## Core Interfaces

### IBSheetInstance

Combined interface that includes both properties and methods of an IB Sheet instance.

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

TypeScript interface definitions for IB Sheet configuration properties.

### IBSheetFunctions

TypeScript interface definitions for IB Sheet methods and functions.

### IBSheetOptions

Interface for IB Sheet initialization options.

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

TypeScript interface definitions for IB Sheet event handlers.

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

This package also includes other essential IB Sheet TypeScript definitions:

- `IBSheetCreateOptions` - Options for creating IB Sheet instances
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
- IB Sheet JavaScript Data Grid Library

## License

[MIT](./LICENSE)
