<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Cita } from '~/interfaces/Cita';
const props = defineProps({
  loading: {
    type: Boolean,
    required: false
  },
  icons: {
    type: Boolean,
    default: ()=> true,
  },
  finalizada : {
    type: Boolean,
    default: ()=> false,
  },
  citas: {
    type: Array as () => Cita[],
    required: true
  }
})
const dividir = computed(() => {
  return props.citas.map((itm:Cita, i) => {
    const acc = [];
    if ((i+1) % 2 === 0) {
      acc.push(props.citas[i-1]);
      acc.push(itm);
    }
    if((props.citas.length-1) === i && props.citas.length % 2 !== 0){
      acc.push(itm);
    }
    return acc;
  }, []).filter((itm) => itm.length > 0);
});

const slide = ref(0);
</script>

<template>
  <div v-if="props.finalizada" class="bg-white grid-autoColumns">
    <div class="" v-for="(itm,index) in citas" style=" width: 100%;">
      <card-status-await :cita="itm" :icons="false" :loading="false" class="col-6" />
    </div>
  </div>
  <div v-else>
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
      :height="props.icons ? '250px' : '200px'"
    >
      <q-carousel-slide v-for="(itm,index) in dividir"  :name="index" class="column no-wrap justify-center" style="align-items: center;" >
        <div class="row wrap" style="flex-wrap: nowrap; width: 100%;">
          <card-status-await :icons="props.icons" :loading="props.loading" v-for="it in itm"  :cita="it" class="col-6" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>

</template>

<style scoped>
.grid-autoColumns {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1px;
}
</style>
