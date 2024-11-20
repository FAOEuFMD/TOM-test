import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    count: 0,
    isAuthenticated: false,
    role: "", // 'admin', 'learner', etc.
  }),
  actions: {
    increment() {
      this.count++;
    },
    login(role: string) {
      this.isAuthenticated = true;
      this.role = role;
    },
    logout() {
      this.isAuthenticated = false;
      this.role = "";
    },
  },
});
