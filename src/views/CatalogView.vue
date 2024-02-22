<template>
  <div>
    <nav>
      <ul>
        <li>Наушники</li>
        <li>Мышки</li>
        <li>Клавиатуры</li>
        <li>Микрофоны</li>
        <li>Apple VR Vision Pro</li>
      </ul>
      {{ itemStore.count }}
      <button @click="itemStore.count++">+</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useItemStore } from '@/store/ItemStore';

const itemStore = useItemStore();
</script>

<style scoped>

</style>