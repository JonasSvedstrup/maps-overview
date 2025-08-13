<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
const modalStore = useModalStore();

const checkAndHideModal = (el: MouseEvent) => {
  // @ts-expect-error no need for a type of this.
  if (el && el.target && ['modal-mask'].includes(el.target.className)) {
    hideModal();
  }
};

const hideModal = () => {
  document.body.classList.remove("modal-open");
  modalStore.hideModal();
}
</script>
<template>
  <div v-if="modalStore.modalOpen" class="modal-mask" @click="checkAndHideModal">
    <div class="modal-container">
      <div class="modal-header">
        <button class="modal-close-button" @click="hideModal">X</button>
        {{ modalStore.mapShort }}
      </div>
      <div class="modal-body">
        <img v-if="modalStore.mapShort"
          :src="`/src/assets/maps/${modalStore.mapShort}/${modalStore.mapShort}-${modalStore.mapView}.png`"
          class="modal-image-img" />
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <button class="modal-default-button" @click="hideModal">Close</button>
        </slot>
      </div>
    </div>
  </div>
</template>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  overflow: scroll;
}

.modal-container {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 20px 30px;
  background-color: #333;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  overflow: scroll;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
</style>