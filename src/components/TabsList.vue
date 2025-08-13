<script setup lang="ts">
import { formatMapName } from '@/scripts/util';
defineProps<{
  dataList: string[];
  activeView: string;
}>();
const emit = defineEmits(['change-view']);
</script>
<template>
  <div v-for="mapView in dataList" v-bind:key="mapView" @click="emit('change-view', mapView)"
    @keyup.enter="emit('change-view', mapView)" :tabIndex="1" :id="`map-view-button-${mapView}`"
    :class="`transition tab ${mapView === activeView ? 'active' : ''}`">{{
      formatMapName(mapView) }}
  </div>
</template>
