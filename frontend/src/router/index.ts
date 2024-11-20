import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import SelfAssessment from "../views/SelfAssessment.vue";
import LearnerDashboard from "../views/LearnerDashboard.vue";
import { useMainStore } from "../stores/main";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/self-assessment",
    name: "SelfAssessment",
    component: SelfAssessment,
  },
  {
    path: "/learner",
    component: LearnerDashboard,
    meta: { requiresAuth: true, roles: ["learner"] },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true, roles: ["admin"] },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const store = useMainStore();
  const isAuthenticated = store.isAuthenticated;
  const userRole = store.role;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (
    to.meta.roles &&
    Array.isArray(to.meta.roles) &&
    !to.meta.roles.includes(userRole)
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
