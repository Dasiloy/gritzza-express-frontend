import { useQuery } from "@tanstack/react-query";
import { fetchStores } from "api/apiClient-requests/store-fetchers";

export const useGetStores = () => {
  return useQuery(["getStores"], fetchStores, {
    // onError: error => console.log(error),
  });
};
