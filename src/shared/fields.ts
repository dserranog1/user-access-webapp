import { CustomInputField } from "@/types";
import { emailRules, passwordRules } from "./fieldRules";

export const createEmailField = (): CustomInputField => {
  return {
    name: "email",
    type: "email",
    required: true,
    label: "Email",
    placeholder: "Email",
    rules: emailRules,
    value: "",
    error: "",
  };
};

export const createPasswordField = (): CustomInputField => {
  return {
    name: "password",
    type: "password",
    required: true,
    label: "Password",
    placeholder: "Password",
    rules: passwordRules,
    value: "",
    error: "",
  };
};
