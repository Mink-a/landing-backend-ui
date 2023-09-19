import { create } from "zustand";

interface ModalStoreState {
  postId: string;
  open: boolean;
  setPostId: (id: string) => void;
  setOpen: (state: boolean) => void;
}

export const useModalStore = create<ModalStoreState>()((set) => ({
  postId: "",
  open: false,
  setPostId: (id) => {
    set(() => ({ postId: id }));
  },
  setOpen: (value) => {
    set(() => ({ open: value }));
  },
}));
