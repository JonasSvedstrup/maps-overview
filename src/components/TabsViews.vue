<script setup lang="ts">
import type { MapsData } from '@/scripts/types';
import { formatMapShort } from '@/scripts/util';
defineProps<{
  dataList: MapsData[];
  activeView: string;
}>();
const emitShowImage = defineEmits(['handleShowImage']);
const setActiveMap = (mapShort: string) => {
  emitShowImage('handleShowImage', mapShort);
};
</script>
<template>
  <div v-for="map in dataList" v-bind:key="map.name" class="compare-wrapper">
    <img
      class="compare-img"
      @click="setActiveMap(formatMapShort(map.name))"
      v-bind:src="`/maps-overview/maps/${formatMapShort(map.name)}/${formatMapShort(map.name)}-${activeView}.png`"
    />

    <!--

https://jonassvedstrup.github.io/cs-maps-overview/maps/foggy-hills/foggy-hills-top.png
cs-maps-overview/maps/foggy-hills/foggy-hills-top.png


maps-overview/src/assets/maps/foggy-hills/foggy-hills-top.png

-->

    <h2>
      <a v-bind:href="`map?name=${formatMapShort(map.name)}`">{{ map.name }}</a>
    </h2>
  </div>
</template>
