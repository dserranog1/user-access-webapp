import { useSnackbarsStore } from "@/stores/snackbars";
import { useUserStore } from "@/stores/user";
import { CustomInputField } from "@/types";
import axios, { AxiosResponse } from "axios";
import { Ref } from "vue";

export const handleFormError = (
  err: unknown,
  formInputs: Ref<CustomInputField[]>
) => {
  const snackbarStore = useSnackbarsStore();
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
    } else {
      snackbarStore.setfailureSnackbar(true, "Unexpected server error");
    }
  } else {
    snackbarStore.setfailureSnackbar(true, "Unexpected error");
  }
};

export const authenticateUser = async (payload?: { [key: string]: string }) => {
  const userStore = useUserStore();
  let response: AxiosResponse;
  if (payload) {
    response = await axios.post(
      `${import.meta.env.VITE_HOST_URL}/collections/users/auth-with-password`,
      payload
    );
  } else {
    response = await axios.post(
      `${import.meta.env.VITE_HOST_URL}/collections/users/auth-refresh`,
      undefined,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("JWT")}` },
      }
    );
  }
  localStorage.setItem("JWT", response.data.token);

  const userData = {
    id: response.data.record.id,
    name: response.data.record.name,
    email: response.data.record.email,
    username: response.data.record.username,
  };
  userStore.setUser(userData);
};
