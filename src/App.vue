<template>
  <div>
    <router-view></router-view>
    <!-- <custom-input
      v-model="fromCustomInput"
    ></custom-input>
    <input type="text">
    <input type="text" v-focus>
    <button @click="addItem">Создать</button>
    <custom-select
      :items="items"
      v-model="selectValue"
    ></custom-select>
    <button @click="toggle = !toggle">toggle</button>
    <life-cycle v-if="toggle"></life-cycle> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

import CustomInput from "./components/CustomInput.vue";
import CustomSelect from "./components/CustomSelect.vue";
import LifeCycle from "./components/LifeCycle.vue";

import { useItemStore } from "./store/ItemStore";

const itemStore = useItemStore();

const toggle = ref(true);
const fromCustomInput = ref("");
const selectValue = ref<string>("");

const items = ref([
  {
    title: "First",
    value: "one",
  },
  {
    title: "Second",
    value: "two",
  },
]);

const addItem = () => {
  items.value.push({
    title: fromCustomInput.value,
    value: fromCustomInput.value,
  })
  fromCustomInput.value = '';
}

onMounted(() => {
  const token = localStorage.getItem("access_token");
  if (token) {
    itemStore.accessToken = token;
  } else {
    const token = String(Math.random())
    localStorage.setItem("access_token", token);
    itemStore.accessToken = token;
  }
})
</script>

<style scoped></style>
