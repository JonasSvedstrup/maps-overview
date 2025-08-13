<script setup lang="ts">
import { navs } from "@/scripts/util";
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <nav>
      <RouterLink
        v-for="nav in navs"
        v-bind:key="nav.name"
        :to="nav.path"
        :tabindex="1"
        class="transition"
        >{{ nav.name }}
      </RouterLink>
    </nav>
  </section>
</template>
