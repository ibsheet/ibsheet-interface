# ibsheet-interface

TypeScript interface definitions for IBSheet JavaScript Data Grid Library.

## Build Setup

```bash
# install dependencies
yarn install

# build for production
yarn build
```

## IBSheetProperties

TypeScript interface definitions for Cfg Properties of IBSheet

## IBSheetFunctions

TypeScript interface definitions for Methods of IBSheet

## IBSheetInstance

TypeScript interface definitions for IBSheet Object

``` How to Use
export type IBSheetInstance = IBSheetProperties & IBSheetFunctions

import type { IBSheetInstance } fro '@ibsheet/interface';

let sheetInst: IBSheetInstance;
// addRow - IBSheetFunctions
// row append method
sheetInst.addRow();

// Size - IBSheetProperties
// check Size Properties
sheetInst['Size'];

```

of

```

import type { IBSheetOptions } fro '@ibsheet/interface';

const options: IBSheetOptions = {
  Cfg: {
    SearchMode: 2,  -- IBSheetProperties
    HeaderMerge: 3,  -- IBSheetProperties
  }
  ...
}
```

## IBSheetEvents

TypeScript interface definitions for Functions of IBSheet

``` How to Use

import type { IBSheetEvents } from '@ibsheet/interface';

const handleAfterChange: IBSheetEvents['onAfterChange'] = (param) => { 
    // The type of the parameter is automatically inferred.
    console.log('Data changed value:', param.val); 
};

const options: IBSheetOptions = {
  ...
  Events: {
    onAfterChange: handleAfterChange
    ...
  }
}
```

## Other TypeScript definitions of IBSheet

- IBSheetCreateOptions, IBSheetOptions, IBStyleRowConfig, IBInfoRowConfig, IBExcelDownloadConfig etc

## License

[MIT](./LICENSE)
