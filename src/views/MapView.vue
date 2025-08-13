<script setup lang="ts">
import GridTable from "@/components/GridTable.vue";
import MapDetails from "@/components/MapDetails.vue";
import MapSelect from "@/components/MapSelect.vue";
import {
  getGridTablePlaylistsColumns,
  getGridTablePlaylistsRows,
} from "@/scripts/gridTable";
import {
  formatMapName,
  getSelectedMap,
  init,
  mapViews,
  pickRandomMap,
} from "@/scripts/util";
import { useModalStore } from "@/stores/modal";
import rawAuthorsData from "../data/authors.json";
import rawPlaylistsData from "../data/lets-play.json";
import rawMapsData from "../data/maps.json";

const modalStore = useModalStore();

const fallbackMap: string = "roslyn-peninsula";
const selectedMap: string = getSelectedMap() ?? fallbackMap;
const formattedMapName: string = formatMapName(selectedMap);

const handleShowImage = (mapShort: string, mapView: string) => {
  document.body.classList.add("modal-open");
  modalStore.setMapShort(mapShort);
  modalStore.setMapView(mapView);
  modalStore.showModal();
};

const changeView = (view: string) => {
  mapViews.forEach(mapView => {
    const mapViewButton = document.querySelector(
      `#map-view-button-${mapView}`,
    ) as HTMLDivElement;
    const mapViewEl = document.querySelector(
      `#map-view-${mapView}`,
    ) as HTMLDivElement;
    mapViewButton.classList.remove("active");
    mapViewEl.style.display = "none";
  });
  const mapViewButtonClicked = document.querySelector(
    `#map-view-button-${view}`,
  ) as HTMLDivElement;
  const mapViewSelected = document.querySelector(
    `#map-view-${view}`,
  ) as HTMLDivElement;
  mapViewButtonClicked.classList.add("active");
  mapViewSelected.style.display = "block";
};

init();
</script>

<template>
  <main
    id="main-map"
    :style="`background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.25), #141e32),
    url('src/assets/maps/${selectedMap}/${selectedMap}-top.png')`"
  >
    <section>
      <h1>Map Details</h1>
      <h2>{{ formattedMapName }}</h2>
      <p>
        Here you can switch to a different map:
        <MapSelect /> or
        <button @click="pickRandomMap(rawMapsData)">pick a random* map</button>
      </p>
      <MapDetails />
      <h3>Let's Play playlists</h3>
      <p>A collection of lets play playlists on this map</p>
    </section>
    <section class="full-width grid-table-single">
      <GridTable
        :columns="getGridTablePlaylistsColumns()"
        domLayout="autoHeight"
        :rows="
          getGridTablePlaylistsRows(
            rawPlaylistsData,
            rawAuthorsData,
            formattedMapName,
          )
        "
      />
    </section>
    <section>
      <h3>Screenshots</h3>
      <div class="tablist">
        <div
          v-for="mapView in mapViews"
          v-bind:key="mapView"
          @click="changeView(mapView)"
          :id="`map-view-button-${mapView}`"
          :class="`tab ${mapView === 'top' ? 'active' : ''}`"
        >
          {{ formatMapName(mapView) }}
        </div>
      </div>
    </section>
    <section>
      <div
        v-for="mapView in mapViews"
        v-bind:key="mapView"
        :class="`map-view-img`"
        @click="handleShowImage(selectedMap, mapView)"
        :id="`map-view-${mapView}`"
        :style="`${mapView === 'top' ? 'display: block;' : ''}`"
      >
        <img
          class="map-img"
          v-bind:src="`src/assets/maps/${selectedMap}/${selectedMap}-${mapView}.png`"
        />
      </div>
    </section>
  </main>
</template>
