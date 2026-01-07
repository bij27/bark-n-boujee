import { create } from "zustand";
import { mockUser } from "../data/mockData";

export const useAuthStore = create((set) => ({
  user: mockUser,
  isAuthenticated: false,
  showDashboard: false, // Controls dashboard visibility

  login: (userData) => set({ user: userData, isAuthenticated: true }),
  logout: () =>
    set({ user: null, isAuthenticated: false, showDashboard: false }),
  updateUser: (userData) => set({ user: userData }),
  toggleDashboard: () =>
    set((state) => ({ showDashboard: !state.showDashboard })),
  openDashboard: () => set({ showDashboard: true }),
  closeDashboard: () => set({ showDashboard: false }),
}));
