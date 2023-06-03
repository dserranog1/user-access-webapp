<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const logout = () => {
  localStorage.removeItem("JWT");
  userStore.removeUser();
  router.push({ name: "Home" });
};
</script>
<template>
  <div
    class="tw-h-screen tw-w-full tw-flex tw-flex-row tw-justify-center tw-items-center tw-bg-slate-100"
  >
    <div class="tw-flex tw-flex-col tw-gap-14 tw-items-center">
      <h1 class="tw-text-4xl tw-text-neutral-800">
        Welcome again to your dashboard, {{ userStore.user?.name }}
      </h1>
      <v-btn
        @click="logout"
        class="text-none"
        color="red-darken-2"
        variant="outlined"
        >Logout</v-btn
      >
    </div>
  </div>
</template>
