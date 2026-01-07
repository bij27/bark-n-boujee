import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAdminAuthStore = create(
  persist(
    (set) => ({
      admin: null,
      isAuthenticated: false,

      login: (adminData) => set({ admin: adminData, isAuthenticated: true }),
      logout: () => set({ admin: null, isAuthenticated: false }),
      updateAdmin: (adminData) => set({ admin: adminData }),
    }),
    {
      name: "admin-auth-storage", // Separate storage key for admin
    }
  )
);
