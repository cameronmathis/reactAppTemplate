import create from "zustand";

const useStore = create((set) => ({currentPath: "/home",
  setCurrentPath: (path) => set(() => ({ currentPath: path })),

  isMobile: null,
  setIsMobile: (bool) => set(() => ({ isMobile: bool })),
  
  currentUser: null,
  setCurrentUser: (user) => set(() => ({ currentUser: user })),
}));

export default useStore;
