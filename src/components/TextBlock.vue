<script setup lang="ts">
defineProps<{
  header: string;
  text: string;
}>();
</script>

<template>
  <h2>
    {{ header }}
  </h2>
  <p>
    {{ text }}
  </p>
</template>