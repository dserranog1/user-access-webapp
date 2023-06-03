<script setup lang="ts">
defineProps<{ loading: boolean; disabled: boolean; label: string }>();
</script>

<template>
  <v-btn
    :loading="loading"
    :disabled="disabled"
    color="teal-darken-1"
    type="submit"
    class="text-none w-100 mt-6"
    >{{ label }}
  </v-btn>
</template>
