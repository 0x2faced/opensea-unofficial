# Opensea Unofficial API

## Example

```ts
import { query } from "https://raw.githubusercontent.com/0x2faced/opensea-unofficial/v0.0.1/opensea.ts";

const { query: { search } } = await query("AssetSearchQuery", {
  collection: "ujin",
  collectionQuery: null,
  collectionSortBy: "SEVEN_DAY_VOLUME",
  collections: [
    "ujin",
  ],
  count: 32,
  resultModel: "ASSETS",
  showContextMenu: true,
  shouldShowQuantity: false,
  sortAscending: false,
  sortBy: "CREATED_DATE",
});

console.log(search); // show your opensea list
```
