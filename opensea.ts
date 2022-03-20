import { QueryMap, QueryVaraiblesMap } from "./types.ts";
import { queries } from "./graphql_api_requests.ts";

export async function query<TId extends keyof QueryVaraiblesMap>(
  id: TId,
  variables: QueryVaraiblesMap[TId],
): Promise<QueryMap[TId]> {
  const response = await fetch("https://api.opensea.io/graphql/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-signed-query": queries[id].signedKey,
    },
    body: JSON.stringify({
      id,
      query: queries[id].query,
      variables,
    }),
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
