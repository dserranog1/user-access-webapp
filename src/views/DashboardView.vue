<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>
<template>
  <div
    class="tw-h-screen tw-w-full tw-flex tw-flex-row tw-justify-center tw-items-center tw-bg-slate-100"
  >
    <div class="tw-flex tw-flex-col tw-gap-8 tw-items-center">
      <h1 class="tw-text-4xl tw-text-neutral-800">
        Welcome again to your dashboard, {{ userStore.user?.name }}
      </h1>
    </div>
  </div>
</template>
