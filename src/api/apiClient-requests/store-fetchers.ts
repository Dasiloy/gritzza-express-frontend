import apiClient from "api/api-client";
import { IStore } from "types/store";

export async function fetchStores() {
  const { data } = await apiClient.get("/stores");
  return data  as IStore[];
}
