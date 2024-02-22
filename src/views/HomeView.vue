<template>
  <div>
    <router-link :to="{ name: 'about' }">About</router-link>
    Home view
    <div>
      <div v-for="user in itemStore.users">
        <router-link :to="{
          name: 'item',
          params: {
            id: user.id
          }
        }">open</router-link>
        <div>{{ user.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useItemStore } from '@/store/ItemStore';

const itemStore = useItemStore();

//  Получите посты с jsonplace, запишите в стор
// При открытие конкретного поста, брать данные о нем в сторе

onMounted(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  itemStore.users = await res.json();
})
</script>

<style scoped>

</style>