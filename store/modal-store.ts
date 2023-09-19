import { create } from "zustand";

interface ModalStoreState {
  alertOpen: boolean;
  postId: string;
  open: boolean;
  setPostId: (id: string) => void;
  setOpen: (state: boolean) => void;
  setAlertOpen: (state: boolean) => void;
}

export const useModalStore = create<ModalStoreState>()((set) => ({
  alertOpen: false,
  postId: "",
  open: false,
  setPostId: (id) => {
    set(() => ({ postId: id }));
  },
  setOpen: (value) => {
    set(() => ({ open: value }));
  },
  setAlertOpen: (value) => {
    set(() => ({ alertOpen: value }));
  },
}));
