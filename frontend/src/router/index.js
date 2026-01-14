import { createRouter, createWebHistory } from "vue-router";
import store from '../store'
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    // Lazy loading for better performance
    component: () => import("../views/Home.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/AdminView.vue"),
    meta: { requiresAuth: true, roles: ["admin"] },
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("../views/EditorView.vue"),
    meta: { requiresAuth: true, roles: ["editor", "admin"] },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const allowedRoles = to.meta.roles;

  if (requiresAuth) {
    if (!store.getters.isAuthenticated) {
      return next("/");
    }

    if (
			allowedRoles && 
			!allowedRoles.some((role) => store.getters.user?.roles.includes(role))
		) {
      return next("/home");
    }
  }

  next();
});

export default router;
