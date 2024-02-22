<template>
  <div>
    {{ getCurrent }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useItemStore } from '@/store/ItemStore';

const itemStore = useItemStore();

interface Props {
  id: number;
  type: string;
}
const props = defineProps<Props>();

const getCurrent = computed(() => {
  for (const user of itemStore.users) {
    if (user.id === props.id) {
      return user;
    }
  }
  return null;
})
</script>

<style scoped>

</style>