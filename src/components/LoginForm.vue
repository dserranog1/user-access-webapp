<script setup lang="ts">
import { emailRegex } from "@/misc/regex";
import { ref } from "vue";

const email = ref<string>("");
const password = ref<string>("");
const isValid = ref<boolean>(false);

const emailRules = [
  (value: string) => {
    if (value) return true;

    return "E-mail is requred.";
  },
  (value: string) => {
    if (emailRegex.test(value)) return true;

    return "E-mail must be valid.";
  },
];

const passwordRules = [
  (value: string) => {
    if (value?.length >= 8) return true;
    return "Password must have at least 8 characters";
  },
];

const handleSubmit = () => {
  //TODO validate login
  console.log(isValid.value);
};
</script>
<template>
  <v-form v-model="isValid" @submit.prevent="handleSubmit()">
    <v-text-field
      type="email"
      placeholder="example@email.com"
      required
      label="Email"
      :rules="emailRules"
      v-model="email"
    >
    </v-text-field>
    <v-text-field
      type="password"
      v-model="password"
      required
      :rules="passwordRules"
      label="Password"
    >
    </v-text-field>
    <v-btn
      :disabled="!isValid"
      color="teal-darken-1"
      type="submit"
      class="text-none w-100"
      >Login</v-btn
    >
  </v-form>
</template>
