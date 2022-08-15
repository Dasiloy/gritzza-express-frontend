import { IUser } from "types/user";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface IAppclientStore {
  user: IUser | null;
  setUser: (loggedInUser: IUser | null) => void;
}

const usePersistFn = (set: any, get: any) =>
  ({
    user: null,
    setUser: (loggedInUser: IUser | null) =>
      set({ user: loggedInUser }),
  } as IAppclientStore);

const useAppClientStore = create<IAppclientStore>(
  devtools(
    persist(usePersistFn, {
      name: "app-client-storage", // unique name
    })
  )
);

export default useAppClientStore;
