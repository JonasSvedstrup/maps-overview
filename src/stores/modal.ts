import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const modalOpen = ref(false);
  const mapShort = ref("");
  const mapView = ref("");

  function showModal() {
    modalOpen.value = true;
  }

  function hideModal() {
    modalOpen.value = false;
  }

  function setMapShort(str: string) {
    mapShort.value = str;
  }

  function setMapView(str: string) {
    mapView.value = str;
  }

  return { modalOpen, showModal, hideModal, mapShort, setMapShort, mapView, setMapView };
});
