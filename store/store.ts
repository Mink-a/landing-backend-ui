import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStoreState {
  userName: string;
  logIn: (value: string) => void;
  logOut: () => void;
}

export const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      userName: "",
      logIn: (name) => set({ userName: name }),
      logOut: () => set({ userName: "" }),
    }),
    { name: "userStore" }
  )
);
