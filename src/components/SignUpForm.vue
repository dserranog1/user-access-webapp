<script setup lang="ts">
import { handleFormError } from "@/helpers";
import { CustomInputField } from "@/types";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSnackbarsStore } from "@/stores/snackbars";
import { createEmailField, createPasswordField } from "@/shared/fields";
import SubmitButton from "./ui/SubmitButton.vue";

const nameRules = [
  (value: string) => {
    if (value) return true;

    return "Name is required.";
  },
];

const passwordConfirmRules = [
  (value: string) => {
    if (value?.length >= 8) return true;
    return "Password must have at least 8 characters";
  },
  (value: string) => {
    if (value === passwordField.value) return true;
    return "Passwords must match";
  },
];

const nameField: CustomInputField = {
  name: "name",
  type: "text",
  required: true,
  label: "Full name",
  placeholder: "Full name",
  rules: nameRules,
  value: "",
  error: "",
};

const emailField = createEmailField();
const passwordField = createPasswordField();

const passwordConfirmField: CustomInputField = {
  name: "passwordConfirm",
  type: "password",
  required: true,
  label: "Confirm your password",
  placeholder: "Password confirm",
  rules: passwordConfirmRules,
  value: "",
  error: "",
};

const formInputs = ref([
  nameField,
  emailField,
  passwordField,
  passwordConfirmField,
]);
const isValid = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const router = useRouter();
const snackbarsStore = useSnackbarsStore();

const handleSubmit = async () => {
  isLoading.value = true;
  const payload: { [key: string]: string } = {};
  formInputs.value.forEach((input) => {
    payload[input.name] = input.value;
  });
  try {
    await axios.post(
      `${import.meta.env.VITE_HOST_URL}/collections/users/records`,
      payload
    );
    snackbarsStore.setSuccessSnackbar(true, "User successfully created");
    router.push({ name: "Login" });
  } catch (err) {
    handleFormError(err, formInputs);
    snackbarsStore.setfailureSnackbar(true, "Error while creating user");
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <v-form
    validate-on="input"
    v-model="isValid"
    @submit.prevent="handleSubmit()"
  >
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
