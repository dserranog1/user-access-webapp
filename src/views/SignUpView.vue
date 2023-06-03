<script setup lang="ts">
import SignUpForm from "@/components/SignUpForm.vue";
</script>
<template>
  <div
    class="tw-h-screen tw-w-full tw-flex tw-flex-row tw-justify-center tw-items-center tw-bg-slate-100"
  >
    <div class="tw-flex tw-flex-col tw-gap-8 tw-items-center">
      <h1 class="tw-text-4xl tw-text-neutral-800">Sign up</h1>
      <div class="tw-w-64">
        <SignUpForm />
      </div>
      <div class="tw-flex tw-flex-row tw-gap-4 tw-justify-between mt-6">
        <router-link to="/">
          <v-btn color="light-blue-darken-2" variant="outlined">Home </v-btn>
        </router-link>
        <router-link to="login">
          <v-btn color="light-blue-darken-2" variant="outlined">Login </v-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>
