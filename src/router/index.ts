import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeView,
  },
  { name: "SignUp", path: "/sign-up", component: SignUpView },
  { name: "Login", path: "/login", component: LoginView },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
