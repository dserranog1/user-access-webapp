import { CustomInputField } from "@/types";
import axios from "axios";
import { Ref } from "vue";

export const handleError = (
  err: unknown,
  formInputs: Ref<CustomInputField[]>
) => {
  if (axios.isAxiosError(err)) {
    if (err?.response?.status == 400) {
      const errorData = err.response.data.data;
      const errorKeys = Object.keys(errorData);
      errorKeys.forEach((errorKey) => {
        formInputs.value.forEach((input) => {
          if (errorKey === input.name) {
            input.error = errorData[errorKey].message;
          }
        });
      });
    } else if (err?.response?.status === 500) {
      //TODO handle other errors
    }
  }
};
