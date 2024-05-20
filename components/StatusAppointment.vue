<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { StatusApploinment } from '~/interfaces/StatusApploinment';

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

const dividir = computed(() => {
  return citas.value.map((itm:StatusApploinment, i) => {
    const acc = [];
    if ((i+1) % 2 === 0) {
      acc.push(citas.value[i-1]);
      acc.push(itm);
    }
    if((citas.value.length-1) === i && citas.value.length % 2 !== 0){
      acc.push(itm);
    }
    return acc;
  }, []).filter((itm) => itm.length > 0);
});

const slide = ref(0);
</script>

<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    control-color="primary"
    navigation
    padding
    arrows
    height="250px"
  >
    <q-carousel-slide v-for="(itm,index) in dividir"  :name="index" class="column no-wrap justify-center" style="align-items: center;" >
      <div class="row wrap" style="flex-wrap: nowrap; width: 100%;">
        <card-status-await v-for="it in itm" class="col-6" />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<style scoped></style>
