import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "@/views/HomeView.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeComponent,
  },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
