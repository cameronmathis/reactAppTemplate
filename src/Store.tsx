import create from "zustand";

interface ZustandState {
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;
  currentUser: Object;
  setCurrentUser: (value: Object) => void;
}

const useStore = create<ZustandState>((set) => ({
  isMobile: false,
  setIsMobile: (bool) => set(() => ({ isMobile: bool })),

  currentUser: null,
  setCurrentUser: (user) => set(() => ({ currentUser: user })),
}));

export default useStore;
