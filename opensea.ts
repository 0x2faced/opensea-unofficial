import { QueryMap, QueryVaraiblesMap } from "./types.ts";
import { queries } from "./graphql_api_requests.ts";

export type QueryRequstInit = NonNullable<Parameters<typeof fetch>[1]>;

export interface QueryParams<TId extends keyof QueryVaraiblesMap> {
  id: TId;
  variables: QueryVaraiblesMap[TId];
  init?: QueryRequstInit;
}

export function query<TId extends keyof QueryVaraiblesMap>(
  id: TId,
  variables: QueryVaraiblesMap[TId],
): Promise<QueryMap[TId]>;
export function query<TId extends keyof QueryVaraiblesMap>(
  params: QueryParams<TId>,
): Promise<QueryMap[TId]>;
export async function query<TId extends keyof QueryVaraiblesMap>(
  idOrParams: TId | QueryParams<TId>,
  variables?: QueryVaraiblesMap[TId],
): Promise<QueryMap[TId]> {
  let id: TId;
  let init: QueryRequstInit = {};
  if (typeof idOrParams === "string") {
    id = idOrParams;
  } else {
    id = idOrParams.id;
    variables = idOrParams.variables;
    if (idOrParams.init) {
      init = idOrParams.init;
    }
  }

  const { headers, ...remainInit } = init ?? {};
  const response = await fetch("https://api.opensea.io/graphql/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-signed-query": queries[id].signedKey,
      ...headers,
    },
    body: JSON.stringify({
      id,
      query: queries[id].query,
      variables,
    }),
    ...remainInit,
  });
  if (response.status === 200) {
    return await response.json().then((
      data: { data: QueryMap[TId] },
    ) => {
      return data.data;
    });
  }

  throw new Error(
    `${response.status} ${response.statusText} ${await response.text()}}`,
  );
}
