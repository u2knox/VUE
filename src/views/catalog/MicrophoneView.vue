<template>
  <div>
    microphone {{ itemStore.count }}
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useItemStore } from '@/store/ItemStore';

const itemStore = useItemStore();

onMounted(() => {
  fetch("", {
    headers: {
      access_token: `Bearer: ${itemStore.accessToken}`
    }
  })
})
</script>

<style scoped>

</style>