import { User } from "@/types/user";
import { defineStore } from "pinia";

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  access_level: string;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isLoggedIn: false,
    user: null,
    access_level: "",
  }),

  actions: {
    login(userData: User) {
      this.isLoggedIn = true;
      this.user = userData;
      this.access_level = userData.access_level;
    },

    logout() {
      this.isLoggedIn = false;
      this.user = null;
      this.access_level = "";
      localStorage.clear();
    },
  },

  persist: true,
});
