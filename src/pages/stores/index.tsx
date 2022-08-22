import React from "react";
import {
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
import { useGetStores } from "lib/react-query/queries/stores/use-get-store";
import { NextPage } from "next";
import { fetchStores } from "api/apiClient-requests/store-fetchers";

const PublicStores: NextPage = () => {
  const {
    data: stores,
    isLoading,
    isError,
  } = useGetStores();

  console.log(isLoading, isError, stores);
  return <div>hello from stores</div>;
};

//==> server side rendering for this page
export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["getStores"],
    fetchStores
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default PublicStores;
