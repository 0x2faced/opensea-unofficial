export interface QueryVaraiblesMap {
  AssetSearchQuery: AssetSearchQueryVariables;
}

export type ChainScalar = "ETHEREUM" | "MATIC" | "KLAYTN";
export type SearchToggle = "BUY_NOW" | "ON_AUCTION" | "IS_NEW" | "HAS_OFFERS";

export interface AssetSearchQueryVariables {
  // $categories: [CollectionSlug!]
  chains?: ChainScalar[] | null; // $chains: [ChainScalar!]
  collection: string; // $collection: CollectionSlug
  collectionQuery?: string | null; // $collectionQuery: String
  collectionSortBy?: "SEVEN_DAY_VOLUME" | null; // $collectionSortBy: CollectionSort
  collections?: string[] | null; // $collections: [CollectionSlug!]
  count?: number | null; // $count: Int
  cursor?: string | null; // $cursor: String
  // $identity: IdentityInputType
  includeHiddenCollections?: boolean | null; // $includeHiddenCollections: Boolean
  // $numericTraits: [TraitRangeType!]
  // $paymentAssets: [PaymentAssetSymbol!]
  // $priceFilter: PriceFilterType
  query?: string | null; // $query: String
  resultModel?: "ASSETS" | "BUNDLES" | null; // $resultModel: SearchResultModel
  showContextMenu?: boolean | null; // $showContextMenu: Boolean = false
  shouldShowQuantity?: boolean | null; // $shouldShowQuantity: Boolean = false
  sortAscending?: boolean | null; // $sortAscending: Boolean
  sortBy?:
    | "LISTING_DATE"
    | "CREATED_DATE"
    | "LAST_SALE_DATE"
    | "LAST_TRANSFER_DATE"
    | "EXPIRATION_DATE"
    | "PRICE"
    | "LAST_SALE_PRICE"
    | "VIEWER_COUNT"
    | "FAVORITE_COUNT"
    | null; // $sortBy: SearchSortBy
  // $stringTraits: [TraitInputType!]
  toggles?: SearchToggle[] | null; // $toggles: [SearchToggle!]
  // $creator: IdentityInputType
  // $assetOwner: IdentityInputType
  isPrivate?: boolean | null; // $isPrivate: Boolean
  // $safelistRequestStatuses: [SafelistRequestStatus!]
}

export interface QueryMap {
  AssetSearchQuery: AssetSearchQuery;
}

export interface CollectionType {
  __typename: "CollectionType";
  id: string;
  assetCount: any | null; // TODO
  imageUrl: string;
  name: string;
  slug: string;
  isVerified: boolean;
}

export interface PaymentAssetType {
  __typename: "PaymentAssetType";
  id: string;
  symbol: string;
  relayId: string;
}

export interface SearchResultType {
  __typename: "SearchResultType";
  asset: {
    assetContract: {
      id: string;
      address: string;
      chain: string;
      openseaVersion: string;
    };
    collection: {
      // TODO ? CollectionType
      id: string;
      imageUrl: string;
      name: string;
      slug: string;
      isVerified: boolean;
      relayId: string;
      displayData: {
        cardDisplayStyle: string;
      };
      isAuthorizedEditor: boolean;
    };
    relayId: string;
    tokenId: string;
    backgroundColor: any | null; // TODO
    imageUrl: string;
    name: string;
    id: string;
    isDelisted: boolean;
    animationUrl: null; // TODO
    displayImageUrl: string;
    "decimals": null;
    favoritesCount: number;
    isFavorite: boolean;
    isFrozen: boolean;
    hasUnlockableContent: boolean;
    orderData: {
      bestAsk: any | null; // TODO
      bestBid: any | null;
    };
    isEditable: {
      value: boolean;
      reason: string;
    };
    isListable: boolean;
    ownership: any | null; // TODO
    creator: {
      address: string;
      id: string;
    };
    ownedQuantity: any | null; // TODO
    assetEventData: {
      lastSale: {
        unitPriceQuantity: {
          id: string;
          quantity: string;
          asset: {
            id: string;
            decimals: number;
            imageUrl: string;
            symbol: string;
            usdSpotPrice: number;
            assetContract: {
              blockExplorerLink: string;
              chain: string;
              id: string;
            };
          };
        };
      };
    };
  };
  assetBundle: null; // TODO
}

export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}
interface AssetSearchQuery {
  selectedCollections: {
    edges: {
      node: {
        // TODO
        "assetCount": null;
        imageUrl: string;
        name: string;
        slug: string;
        "isVerified": false;
        id: string;
        description: string;
      };
    }[];
  };
  collections: {
    edges: {
      node: Pick<
        CollectionType,
        | "id"
        | "name"
        | "slug"
        | "assetCount"
        | "imageUrl"
        | "isVerified"
        | "__typename"
      >;
      cursor: string;
    }[];
    pageInfo: PageInfo;
  };
  collection: {
    numericTraits: any[]; // TODO
    stringTraits: {
      key: string;
      counts: {
        count: number;
        value: string;
      }[];
    }[];
    id: string;
  };
  paymentAssets: {
    edges: {
      node: Pick<PaymentAssetType, "symbol" | "relayId" | "id" | "__typename">;
      cursor: string;
    }[];
    pageInfo: PageInfo;
  };
  PaymentFilter_collection: {
    id: string;
    paymentAssets: Pick<PaymentAssetType, "symbol" | "relayId" | "id">[];
  };
  search: {
    totalCount: number;
    edges: {
      node: Pick<SearchResultType, "asset" | "assetBundle" | "__typename">;
      cursor: string;
    }[];

    pageInfo: PageInfo;
  };
}
