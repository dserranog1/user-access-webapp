import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import { useSnackbarsStore } from "@/stores/snackbars";
import { authenticateUser } from "@/helpers";
import axios from "axios";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeView,
  },
  { name: "SignUp", path: "/sign-up", component: SignUpView },
  { name: "Login", path: "/login", component: LoginView },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({ routes, history: createWebHistory() });

router.beforeEach(async (to) => {
  const snackbarStore = useSnackbarsStore();
  if (to.meta.requiresAuth) {
    if (!localStorage.getItem("JWT")) {
      snackbarStore.setfailureSnackbar(
        true,
        "Please login to access this resourse"
      );
      return { name: "Login" };
    } else {
      try {
        await authenticateUser();
        // TODO make it not check if it just logged in (could improve perfomance)
        return true;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err?.response?.status == 401) {
            snackbarStore.setfailureSnackbar(
              true,
              "Session has expired, please login again."
            );
            localStorage.removeItem("JWT");
            return { name: "Login" };
          } else {
            snackbarStore.setfailureSnackbar(true, "Unexpected server error");
          }
        } else {
          snackbarStore.setfailureSnackbar(true, "Unexpected error");
        }
        return { name: "Home" };
      }
    }
  }
});
export default router;
