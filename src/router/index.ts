import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Login from "../views/Login.vue";
import SelfAssessment from "../views/SelfAssessment.vue";

// import LearnerDashboard from "../views/LearnerDashboard.vue";
import { useMainStore } from "../stores/main";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  // {
  //   path: "/learner",
  //   component: LearnerDashboard,
  //   meta: { requiresAuth: true, roles: ["learner"] },
  // },
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
