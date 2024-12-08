import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    count: 0,
    isAuthenticated: false,
    access_level: "", // 'admin', 'learner', etc.
  }),
  actions: {
    increment() {
      this.count++;
    },
    login(access_level: string) {
      this.isAuthenticated = true;
      this.access_level = access_level;
    },
    logout() {
      this.isAuthenticated = false;
      this.access_level = "";
    },
  },
});
