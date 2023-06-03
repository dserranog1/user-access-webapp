import { emailRegex } from "@/misc/regex";

export const emailRules = [
  (value: string) => {
    if (value) return true;

    return "E-mail is required.";
  },
  (value: string) => {
    if (emailRegex.test(value)) return true;

    return "E-mail must be valid.";
  },
];

export const passwordRules = [
  (value: string) => {
    if (value?.length >= 8) return true;
    return "Password must have at least 8 characters";
  },
];
