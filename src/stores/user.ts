import { User } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);

  const setUser = (userData: User) => {
    user.value = userData;
  };
  const removeUser = () => {
    user.value = null;
  };
  return { user, setUser, removeUser };
});
