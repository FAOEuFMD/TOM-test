import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LearnerDashboard from "../views/LearnerDashboard.vue";
import Login from "../views/Login.vue";
import { useMainStore } from "../stores/main";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/learner",
    component: LearnerDashboard,
    meta: { requiresAuth: true, roles: ["learner"] },
  },
  {
    path: "/login",
    name: "Test",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const store = useMainStore();
  const isAuthenticated = store.isAuthenticated; // Determine if user is authenticated
  const userRole = store.role; // Get the user's role

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login if not authenticated
    next("/login");
  } else if (
    to.meta.roles &&
    Array.isArray(to.meta.roles) &&
    !to.meta.roles.includes(userRole)
  ) {
    // Redirect to home or another page if user does not have required role
    next("/");
  } else {
    next();
  }
});

export default router;
