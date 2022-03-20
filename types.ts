export interface QueryVaraiblesMap {
  AssetPageQuery: AssetPageQueryVariables;
  AssetSearchQuery: AssetSearchQueryVariables;
}

export type CollectionSlug = string;
export type CollectionSort = "SEVEN_DAY_VOLUME"; // TODO
export type SearchResultModel = "ASSETS" | "BUNDLES"; // TODO
export type AddressScalar = string;
export type ChainScalar = "ETHEREUM" | "MATIC" | "KLAYTN";
export type SearchToggle = "BUY_NOW" | "ON_AUCTION" | "IS_NEW" | "HAS_OFFERS";
export type SearchSortBy =
  | "LISTING_DATE"
  | "CREATED_DATE"
  | "LAST_SALE_DATE"
  | "LAST_TRANSFER_DATE"
  | "EXPIRATION_DATE"
  | "PRICE"
  | "LAST_SALE_PRICE"
  | "VIEWER_COUNT"
  | "FAVORITE_COUNT";

export interface AssetPageQueryVariables {
  tokenId: string;
  contractAddress: AddressScalar;
  chain: ChainScalar;
}

export interface AssetSearchQueryVariables {
  categories?: CollectionSlug[] | null;
  chains?: ChainScalar[] | null;
  collection: CollectionSlug;
  collectionQuery?: string | null;
  collectionSortBy?: CollectionSort | null;
  collections?: CollectionSlug[] | null;
  count?: number | null;
  cursor?: string | null;
  // $identity: IdentityInputType
  includeHiddenCollections?: boolean | null;
  // $numericTraits: [TraitRangeType!]
  // $paymentAssets: [PaymentAssetSymbol!]
  // $priceFilter: PriceFilterType
  query?: string | null;
  resultModel?: SearchResultModel | null;
  showContextMenu?: boolean | null;
  shouldShowQuantity?: boolean | null;
  sortAscending?: boolean | null;
  sortBy?: SearchSortBy | null;
  // $stringTraits: [TraitInputType!]
  toggles?: SearchToggle[] | null;
  // $creator: IdentityInputType
  // $assetOwner: IdentityInputType
  isPrivate?: boolean | null;
  // $safelistRequestStatuses: [SafelistRequestStatus!]
}

export interface QueryMap {
  AssetPageQuery: AssetPageQuery;
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
      chain: ChainScalar;
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
    decimals: any | null; // TODO
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
              chain: ChainScalar;
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

export interface AssetPageQuery {
  nft: {
    id: string;
    assetContract: {
      id: string;
      chain: ChainScalar;
      address: AddressScalar;
      blockExplorerLink: string;
      openseaVersion: "2.0.0";
      tokenStandard: "ERC1155";
    };
    decimals: any | null; // TODO
    relayId: number;
    favoritesCount: number;
    isDelisted: boolean;
    isFavorite: boolean;
    isFrozen: boolean;
    hasUnlockableContent: boolean;
    tokenId: string;
    collection: {
      id: string;
      slug: string;
      description: string;
      displayData: {
        cardDisplayStyle: "CONTAIN"; // TODO
      };
      hidden: boolean;
      imageUrl: string;
      name: string;
      isMintable: boolean;
      isSafelisted: boolean;
      isVerified: boolean;
      numericTraits: any[]; // TODO
      stats: {
        id: string;
        totalSupply: number;
      };
      relayId: string;
      discordUrl: string;
      externalUrl: string;
      instagramUsername: string;
      mediumUsername: any | null; // TODO
      telegramUrl: any | null; // TODO
      twitterUsername: any | null; // TODO
      isWatching: boolean;
      paymentAssets: {
        id: string;
        relayId: string;
        asset: {
          assetContract: {
            id: string;
            address: AddressScalar;
            chain: ChainScalar;
          };
          decimals: number;
          symbol: string;
          usdSpotPrice: number;
          relayId: string;
          id: string;
          imageUrl: string;
        };
      }[];
    };
    orderData: {
      bestAsk: any | null; // TODO
    };
    name: string;
    authenticityMetadata: any | null; // TODO
    imageUrl: string;

    creator: {
      id: string;
      address: AddressScalar;
      config: any | null; // TODO
      isCompromised: boolean;
      user: {
        id: string;
        publicUsername: string;
      };
      displayName: string;
      imageUrl: string;
    };
    assetOwners: {
      count: number;
      edges: {
        node: {
          quantity: string; // number
          owner: {
            id: string;
            displayName: string;
            imageUrl: string;
            address: AddressScalar;
            config: any | null; // TODO
            isCompromised: boolean;
            user: {
              id: string;
              publicUsername: string;
            };
          };
          id: string;
        };
      }[];
    };
    animationUrl: any | null; // TODO
    backgroundColor: any | null; // TODO
    description: string;
    isListable: boolean;
    isReportedSuspicious: boolean;
    traits: {
      edges: {
        node: {
          id: string;
          relayId: string;
          displayType: any | null; // TODO
          floatValue: any | null; // TODO
          intValue: any | null; // TODO
          traitType: string;
          value: string;
          traitCount: number;
          maxValue: any | null; // TODO
        };
      }[];
    };
    displayImageUrl: string;
    externalLink: any | null; // TODO
    isEditableByOwner: {
      value: boolean;
    };
    frozenAt: any | null; // TODO
    tokenMetadata: any | null; // TODO
    ownedQuantity: any | null; // TODO
    totalQuantity: string; // number
  };
  tradeSummary: {
    bestAsk: {
      id: string;
      closedAt: string;
      orderType: "BASIC"; // TODO
      maker: {
        id: string;
        address: AddressScalar;
      };
      relayId: string;
      isFulfillable: boolean;
      oldOrder: string; // JSON
      makerAssetBundle: {
        id: string;
        assetQuantities: {
          edges: {
            node: {
              asset: {
                collection: {
                  isMintable: boolean;
                  isSafelisted: boolean;
                  isVerified: boolean;
                  id: string;
                  slug: string;
                  externalUrl: string;
                };
                id: string;
                relayId: string;
                tokenId: string;
                assetContract: {
                  chain: ChainScalar;
                  address: AddressScalar;
                  id: string;
                };
                decimals: any | null; // TODO
                externalLink: any | null; // TODO
              };
              id: string;
              quantity: string; // number
            };
          }[];
        };
      };
      takerAssetBundle: {
        id: string;
        assetQuantities: {
          edges: {
            node: {
              quantity: string; // number
              asset: {
                decimals: number;
                relayId: string;
                id: string;
                symbol: "ETH";
                usdSpotPrice: number;
                assetContract: {
                  id: string;
                  address: AddressScalar;
                  blockExplorerLink: string;
                  chain: ChainScalar;
                };
                tokenId: string;
                imageUrl: string;
              };
              id: string;
            };
          }[];
        };
      };
      dutchAuctionFinalPrice: any | null; // TODO
      openedAt: string; // Date
      priceFnEndedAt: any | null; // TODO
      englishAuctionReservePrice: any | null; // TODO
      taker: any | null; // TODO
      makerAsset: {
        id: string;
        assetQuantities: {
          edges: {
            node: {
              id: string;
              asset: {
                decimals: any | null; // TODO
              };
              quantity: string; // number
            };
          }[];
        };
      };
      takerAsset: {
        id: string;
        assetQuantities: {
          edges: {
            node: {
              id: string;
              quantity: string;
              asset: {
                id: string;
                decimals: number;
              };
            };
          }[];
        };
      };
      remainingQuantity: number;
      side: "ASK";
    };
    bestBid: any | null; // TODO
  };
  assetEvents: {
    edge: {
      node: {
        relayId: string;
        id: string;
      };
    }[];
  };
}

export interface AssetSearchQuery {
  query: {
    selectedCollections: {
      edges: {
        node: {
          // TODO
          assetCount: any | null; // TODO
          imageUrl: string;
          name: string;
          slug: string;
          isVerified: boolean;
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
        node: Pick<
          PaymentAssetType,
          "symbol" | "relayId" | "id" | "__typename"
        >;
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
  };
}
