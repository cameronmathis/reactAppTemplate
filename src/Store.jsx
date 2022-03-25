import create from "zustand";

const useStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set(() => ({ currentUser: user })),

  currentPath: "/home",
  setCurrentPath: (path) => set(() => ({ currentPath: path })),

  isMobile: null,
  setIsMobile: (bool) => set(() => ({ isMobile: bool })),
}));

export default useStore;
