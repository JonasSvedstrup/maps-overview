<script setup lang="ts">
import TabsList from '@/components/TabsList.vue';
import TabsViews from '@/components/TabsViews.vue';
import { init, mapViews } from '@/scripts/util';
import { useModalStore } from '@/stores/modal';
import { ref } from 'vue';
import rawMapsData from '../data/maps.json';

const activeView = ref('top');

const modalStore = useModalStore();

function handleChangeView(newView: string) {
  activeView.value = newView;
}

const handleShowImage = (mapShort: string) => {
  document.body.classList.add('modal-open');
  modalStore.setMapShort(mapShort);
  modalStore.setMapView(activeView.value);
  modalStore.showModal();
};

const mapsData = rawMapsData.filter(map => map.hasImages);
init();
</script>

<template>
  <main id="main-compare">
    <section>
      <h1>Maps Compare</h1>
      <h2>Cities Skylines</h2>
      <p>Here you can compare maps by screenshots taken in the game.</p>
    </section>
    <section>
      <div class="tablist">
        <TabsList
          :dataList="mapViews"
          :activeView="activeView"
          @change-view="handleChangeView"
        />
      </div>
    </section>
    <section class="full-width">
      <TabsViews
        :dataList="mapsData"
        :activeView="activeView"
        @handle-show-image="handleShowImage"
      />
    </section>
  </main>
</template>
