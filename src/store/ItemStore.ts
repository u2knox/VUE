import { defineStore } from "pinia";
import { ref } from "vue";

export const useItemStore = defineStore('itemStore', () => {
  const users = ref<any[]>([])
  const count = ref(0);
  const accessToken = ref('')
  return { users, count, accessToken };
});