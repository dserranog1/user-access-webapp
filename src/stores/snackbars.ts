import { defineStore } from "pinia";
import { ref } from "vue";

export const useSnackbarsStore = defineStore("snackbars", () => {
  const successSnackbar = ref({ isActive: false, message: "" });
  const failureSnackbar = ref({ isActive: false, message: "" });

  const setSuccessSnackbar = (newState: boolean, message: string) => {
    successSnackbar.value.isActive = newState;
    successSnackbar.value.message = message;
  };
  const setfailureSnackbar = (newState: boolean, message: string) => {
    failureSnackbar.value.isActive = newState;
    failureSnackbar.value.message = message;
  };

  return {
    successSnackbar,
    failureSnackbar,
    setSuccessSnackbar,
    setfailureSnackbar,
  };
});
