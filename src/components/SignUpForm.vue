<script setup lang="ts">
import { emailRegex } from "@/misc/regex";
import axios from "axios";
import { ref } from "vue";

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const isValid = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const nameRules = [
  (value: string) => {
    if (value) return true;
    return "Name is requred.";
  },
];

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

const handleSubmit = async () => {
  isLoading.value = true;
  const payload = {
    name: name.value,
    email: email.value,
    password: password.value,
    passwordConfirm: password.value,
  };
  try {
    await axios.post(
      `${import.meta.env.VITE_HOST_URL}/collections/users/records`,
      payload
    );
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err?.response?.status == 400) {
        console.log("400");
      } else {
        console.log("403");
      } // TODO finish individual messages for each possible error
    }
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <v-form v-model="isValid" @submit.prevent="handleSubmit()">
    <v-text-field v-model="name" required :rules="nameRules" label="Full name">
    </v-text-field>
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
      :loading="isLoading"
      :disabled="!isValid"
      color="teal-darken-1"
      type="submit"
      class="text-none w-100"
      >Sign up</v-btn
    >
  </v-form>
</template>
