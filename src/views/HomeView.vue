<script setup lang="ts"></script>
<template>
  <div
    class="tw-h-screen tw-flex tw-flex-row tw-justify-center tw-items-center tw-bg-slate-100"
  >
    <div class="tw-flex tw-flex-col tw-gap-8 tw-items-center">
      <h1 class="tw-text-4xl tw-text-neutral-800">Welcome</h1>
      <div class="tw-flex tw-flex-row tw-gap-5">
        <router-link to="/login">
          <v-btn class="text-none" color="light-blue-darken-2">Login</v-btn>
        </router-link>
        <v-btn
          to="/sign-up"
          class="text-none"
          color="light-blue-darken-2"
          variant="outlined"
          >Sign up</v-btn
        >
      </div>
    </div>
  </div>
</template>
