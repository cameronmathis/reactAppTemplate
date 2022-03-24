import create from "zustand";

import { HOME } from "./constants/Pages";

const useStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set(() => ({ currentUser: user })),

  currentPage: HOME,
  setCurrentPage: (page) => set(() => ({ currentPage: page })),

  isMobile: null,
  setIsMobile: (bool) => set(() => ({ isMobile: bool })),
}));

export default useStore;
