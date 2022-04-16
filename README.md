# Opensea Unofficial API

<p>
  <img alt="Deno" src="https://img.shields.io/badge/-Deno-gray?logo=deno&labelColor=black&style=flat-square" />
  <img alt="Opensea Unofficial Version" src="https://img.shields.io/github/v/tag/0x2faced/opensea-unofficial?style=flat-square" />
</p>

## Usage

```ts
import { query } from "https://raw.githubusercontent.com/0x2faced/opensea-unofficial/main/opensea.ts";

// specific version
// import { query } from "https://raw.githubusercontent.com/0x2faced/opensea-unofficial/0.1.0/opensea.ts";

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

### with Proxy

```ts
const client = Deno.createHttpClient({/* ... */});

const { query: { search } } = await query({
  id: "AssetSearchQuery",
  variables: {
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
  },
  // type of init => second fetch parameters
  init: {
    client,
  },
});
```
