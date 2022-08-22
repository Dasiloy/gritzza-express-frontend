import { SignupResponseData } from "types/auth";
import { TokenUser } from "types/auth";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface IAppclientStore {
  user: TokenUser | null;
  setUser: (loggedInUser: TokenUser | null) => void;
  tempUser: SignupResponseData | null;
  setTempUser: (
    tempUser: SignupResponseData | null
  ) => void;
  callbackUrl: string,
  setCallbackUrl: (callbackUrl: string) => void,
}

const usePersistFn = (set: any, get: any) =>
  ({
    user: null,
    setUser: (loggedInUser: TokenUser | null) =>
      set({ user: loggedInUser }),
    tempUser: null,
    setTempUser: (tempUser: SignupResponseData | null) =>
      set({ tempUser }),
    callbackUrl: "",
    setCallbackUrl: (callbackUrl: string) =>
      set({ callbackUrl }),
  } as IAppclientStore);

const useAppClientStore = create<IAppclientStore>(
  devtools(
    persist(usePersistFn, {
      name: "app-client-storage", // unique name
    })
  )
);

export default useAppClientStore;
