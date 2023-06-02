<script setup lang="ts">
import { handleError } from "@/helpers";
import { emailRegex } from "@/misc/regex";
import { CustomInputField } from "@/types";
import axios from "axios";
import { ref } from "vue";
import SuccessSnackbar from "./ui/SuccessSnackbar.vue";
import FailureSnackbar from "./ui/FailureSnackbar.vue";

const nameRules = [
  (value: string) => {
    if (value) return true;

    return "Name is required.";
  },
];

const passwordRules = [
  (value: string) => {
    if (value?.length >= 8) return true;
    return "Password must have at least 8 characters";
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

const emailRules = [
  (value: string) => {
    if (value) return true;

    return "E-mail is required.";
  },
  (value: string) => {
    if (emailRegex.test(value)) return true;

    return "E-mail must be valid.";
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

const emailField: CustomInputField = {
  name: "email",
  type: "email",
  required: true,
  label: "Email",
  placeholder: "Email",
  rules: emailRules,
  value: "",
  error: "",
};

const passwordField: CustomInputField = {
  name: "password",
  type: "password",
  required: true,
  label: "Password",
  placeholder: "Password",
  rules: passwordRules,
  value: "",
  error: "",
};

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
const successSnackbar = ref<boolean>(false);
const failSnackback = ref<boolean>(false);

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
    successSnackbar.value = true;
  } catch (err) {
    handleError(err, formInputs);
    failSnackback.value = true;
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
    <v-btn
      :loading="isLoading"
      :disabled="!true"
      color="teal-darken-1"
      type="submit"
      class="text-none w-100 mt-6"
      >Sign up
    </v-btn>
  </v-form>
  <SuccessSnackbar
    message="User successfully created"
    v-model="successSnackbar"
  ></SuccessSnackbar>
  <FailureSnackbar
    message="Error while creating user"
    v-model="failSnackback"
  ></FailureSnackbar>
</template>
