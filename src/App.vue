<script setup lang="ts">
import { useSnackbarsStore } from "@/stores/snackbars";
const snackbarsStore = useSnackbarsStore();
</script>

<template>
  <router-view></router-view>
  <v-snackbar
    v-model="snackbarsStore.successSnackbar.isActive"
    variant="tonal"
    color="success"
    timeout="2000"
  >
    {{ snackbarsStore.successSnackbar.message }}
  </v-snackbar>
  <v-snackbar
    v-model="snackbarsStore.failureSnackbar.isActive"
    variant="tonal"
    color="red-darken-2"
    timeout="2000"
  >
    {{ snackbarsStore.failureSnackbar.message }}
  </v-snackbar>
</template>
