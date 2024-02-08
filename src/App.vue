<template>
  <div>
    <input type="number" v-model.number="age"><br>
    <input
      type="text"
      v-model="password"
    />
    <p v-if="isValidPassword == false">Пароль не соответствует требованиям</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const password = ref("test");
const age = ref(0);

// 1. Но и проверял чтобы в пароле были и числа и 
// заaглавные буквы и спец символы( .?!$#& )
// 2. Сделать инпут с вводом возразта и давать ошибку
// если возраст юзер будет меньше 15

/[\?\.\!\$\#\&]/

const isValidPassword = computed(() => {
  console.log('isValidPassword called')
  if (password.value.length < 7) return false;
  return true;
})
</script>

<style scoped></style>
