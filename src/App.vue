<script setup lang="ts">
import { RouterView } from 'vue-router';
import AutoModal from './components/AutoModal.vue';
import FooterSection from './components/FooterSection.vue';
import TopNavigation from './components/TopNavigation.vue';
</script>

<template>
  <header>
    <TopNavigation />
  </header>
  <RouterView />
  <AutoModal />
  <footer>
    <FooterSection />
  </footer>
</template>
