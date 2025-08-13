<script setup lang="ts">
import { formatMapShort, pickSelectedMap } from "@/scripts/util";
import rawMapsData from "../data/maps.json";

const onChange = (event: Event) => {
  const target = event.target as HTMLButtonElement;

  if (target) {
    pickSelectedMap(formatMapShort(target.value));
  }
};
</script>

<template>
  <select class="select" @change="onChange($event)">
    <option v-for="map in rawMapsData" v-bind:key="map.name">
      {{ map.name }}
    </option>
  </select>
</template>
