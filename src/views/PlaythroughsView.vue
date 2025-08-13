<script setup lang="ts">
import GridTable from '@/components/GridTable.vue';
import { getGridTablePlaylistsColumns, getGridTablePlaylistsRows } from '@/scripts/gridTable';
import { init } from '@/scripts/util';
import rawAuthorsData from '../data/authors.json';
import rawPlaylistsData from '../data/lets-play.json';
init();
</script>
<template>
  <main id="main-playthrough">
    <section>
      <h1>Let's Play - Playlists</h1>
      <h2>Cities Skylines</h2>
      <p>
        Here is a list of Let's Play videos, where the map is identified and the YouTuber has made a playlist.
        Only maps that are part of the vanilla game or its DLC are included in this list.
        By clicking on the titles, you will be redirected to the playlist.
      </p>
      <h2>Playlists</h2>
      <p>
        Click on a map name to see map details. You can navigate to the author or playlist on YouTube.<br />
        Sort by clicking on any column.
      </p>
    </section>
    <section class="full-width">
      <GridTable :columns="getGridTablePlaylistsColumns()" :height="514"
        :rows="getGridTablePlaylistsRows(rawPlaylistsData, rawAuthorsData)" />
    </section>
  </main>
</template>