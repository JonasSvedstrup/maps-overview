<script setup lang="ts">
import type { ColDefs, MapsRowData, PlaylistRowData } from '@/scripts/types';
import { AllCommunityModule, ModuleRegistry, type DomLayoutType } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
defineProps<{
  columns: ColDefs[];
  rows: MapsRowData[] | PlaylistRowData[];
  domLayout?: DomLayoutType | undefined;
  height?: number | undefined;
}>();
</script>

<template>
  <p>
    Hold 'Shift' to sort multiple columns.
  </p>
  <p>
    <ag-grid-vue :rowData="rows" :columnDefs="columns" :domLayout="domLayout" :pagination=true :paginationPageSize="10"
      :paginationPageSizeSelector="[10, 50, 100]" :style="height ? `height: ${height}px` : ''" />
  </p>
</template>

<script lang="ts">
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "GridTable",
  components: {
    AgGridVue
  },
};

</script>