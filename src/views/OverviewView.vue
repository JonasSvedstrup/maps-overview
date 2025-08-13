<script setup lang="ts">
import GridTable from "@/components/GridTable.vue";
import {
  getGridTableMapsOverviewColumns,
  getGridTableMapsOverviewRows,
} from "@/scripts/gridTable";
import { init } from "@/scripts/util";
import rawMapsData from "../data/maps.json";
init();
</script>

<template>
  <main id="main-overview">
    <section>
      <h1>Maps Overview</h1>
      <h2>Cities Skylines</h2>
      <p>
        Welcome to <a href="">Cities Skylines</a> Maps Overview, a page where
        you can inspect and compare maps before deciding where to build your
        next city. This site includes a list of all the maps in Cities
        Skylines.<br />
      </p>
      <p>
        This includes the downloadable content: Snowfall, Natural Disasters,
        Mass Transit, Green Cities, Parklife, Industries, Campus, Sunset Harbor,
        Airports, Plazas and Promenades, Financial Districts, Hotels & Retreats,
        Map Pack 1, Map Pack 2, Map Pack 3
      </p>
    </section>
    <section>
      <h2>Maps list</h2>
    </section>
    <section class="full-width">
      <GridTable
        :columns="getGridTableMapsOverviewColumns()"
        :height="514"
        :rows="getGridTableMapsOverviewRows(rawMapsData)"
      />
    </section>
  </main>
</template>
