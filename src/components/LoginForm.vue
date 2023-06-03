<script setup lang="ts">
import { handleError } from "@/helpers";
import { emailRules } from "@/shared/fieldRules";
import { createPasswordField } from "@/shared/fields";
import { useSnackbarsStore } from "@/stores/snackbars";
import { CustomInputField } from "@/types";
import axios from "axios";
import { ref } from "vue";
import SubmitButton from "./ui/SubmitButton.vue";

const snackbarsStore = useSnackbarsStore();

const isValid = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const identityField: CustomInputField = {
  name: "identity",
  type: "text",
  required: true,
  label: "Email",
  placeholder: "Email",
  rules: emailRules,
  value: "",
  error: "",
};
const passwordField = createPasswordField();

const formInputs = ref([identityField, passwordField]);

const handleSubmit = async () => {
  isLoading.value = true;
  const payload: { [key: string]: string } = {};
  formInputs.value.forEach((input) => {
    payload[input.name] = input.value;
  });
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_HOST_URL}/collections/users/auth-with-password`,
      payload
    );
    localStorage.setItem("JWT", response.data.token);
    snackbarsStore.setSuccessSnackbar(true, "Success!");
  } catch (err) {
    handleError(err, formInputs);
    snackbarsStore.setfailureSnackbar(
      true,
      "There has been an error while logging you in"
    );
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <v-form v-model="isValid" @submit.prevent="handleSubmit()">
    <template v-for="input in formInputs" :key="input.label">
      <v-text-field
        v-model="input.value"
        :type="input.type"
        :placeholder="input.placeholder"
        :required="input.required"
        :rules="input.rules"
        :label="input.label"
        @update:model-value="
          () => {
            input.error = ``;
          }
        "
        :error-messages="input.error"
      >
      </v-text-field>
    </template>
    <SubmitButton
      :loading="isLoading"
      :disabled="!isValid"
      label="Sign up"
    ></SubmitButton>
  </v-form>
</template>
