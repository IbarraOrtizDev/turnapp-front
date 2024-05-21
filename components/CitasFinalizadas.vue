<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { StatusApploinment } from '~/interfaces/StatusApploinment';
const props = defineProps({
  loading: {
    type: Boolean,
    required: false
  }
})
const citas = ref<StatusApploinment[]>([
  {
    id: 1,
    name: 'Cita 1',
    date: '2021-10-10',
    time: '10:00',
    status: 'pending'
  },
  {
    id: 2,
    name: 'Cita 2',
    date: '2021-10-10',
    time: '10:00',
    status: 'pending'
  },
  {
    id: 3,
    name: 'Cita 3',
    date: '2021-10-10',
    time: '10:00',
    status: 'pending'
  },
  {
    id: 4,
    name: 'Cita 3',
    date: '2021-10-10',
    time: '10:00',
    status: 'pending'
  }
]);

const slide = ref(0);
</script>

<template>
  <section class="bg-white grid-autoColumns">
    <pre>{{ props.loading }}</pre>
    <div class="" v-for="(itm,index) in citas" style=" width: 100%;">
      <card-status-await :loading="props.loading" class="col-6" />
    </div>
  </section>
</template>

<style scoped>
.grid-autoColumns {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1px;
}
</style>
