<script setup lang="ts">
defineProps<{ message: string; modelValue: boolean }>();
defineEmits<{ (e: "update:modelValue", newState: boolean): void }>();
</script>
<template>
  <v-snackbar
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', false)"
    variant="tonal"
    color="success"
    timeout="2000"
    >{{ message }}
  </v-snackbar>
</template>
