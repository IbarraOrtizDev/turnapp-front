<template lang="">
    <q-card class="my-card q-pa-md">
        <div class="flex justify-between items-center q-pa-md" style="">
            <div id="controls" class="flex align-center items-center gap-2">
                <q-btn color="primary" flat round icon="chevron_left" @click="prevMonth" />
                <q-btn color="primary" flat round icon="chevron_right" @click="nextMonth" />
                <div v-if="$q.screen.width > 550"  class="text-subtitle1 text-4">{{mesesAnio[mesSelected]}} {{anioSelected}} </div>
            </div>
            <q-input outlined v-model="fechaSelected" mask="date" :rules="['date']" label="Fecha *" readonly
          @click="openDatePopup" style="padding:0px">
                <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy :model-value="datePopup" cover transition-show="scale" transition-hide="scale"
                        @update:model-value="openDatePopup">
                        <q-date v-model="fechaSelected" mask="YYYY/MM/DD"
                        event-color="primary" minimal>
                        <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                        </q-date>
                    </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
        </div>
        <div>
            <section v-if="$q.screen.width > 550" class="grid-calendar">
                <div class="text-center self-center" v-for="dia  in diasSemana" :key={dia}>{{dia}}</div>
            </section>
            <section v-else class="grid-calendar">
                <div class="text-center self-center" v-for="dia  in diasSemanaCorto" :key={dia}>{{dia}}</div>
            </section>
            <section class="grid-calendar">
                <div  v-for="dia in diasMes"  :class="dia != '' ? 'text-center q-pt-xs border-1' : 'text-center q-pt-xs'":key={dia}>{{dia}}</div>
            </section>
        </div>
    </q-card>
</template>
<script lang="ts" setup>
import { date, useQuasar } from 'quasar';
import { mesesAnio, diasSemana, diasSemanaCorto } from '~/Helpers/SeddData';
const fechaSelected = ref<string>('');
const mesInit = ref<string>('');
const diasMes = ref<string[]>([]);
const datePopup = ref(false)
const mesSelected = ref<number>(0);
const anioSelected = ref<number>(0);
const $q = useQuasar();

const obtenerUltimoDiaMes = () => {
    const fixParseFecha = new Date(fechaSelected.value);
    const month = fixParseFecha.getMonth();
    const year = fixParseFecha.getFullYear();
    const dateInitial = new Date(year, month, 1);
    mesInit.value = date.formatDate(dateInitial, 'YYYY/MM/DD');
    const nextMonth = date.addToDate(dateInitial, {month: 1});
    const diaInicioSemana = dateInitial.getDay()-1;
    const numDiaFinMes = date.subtractFromDate(nextMonth, {day: 1}).getDate();
    mesSelected.value = month;
    anioSelected.value = year;
    diasMes.value = [];
    for(let i = 1; i <= numDiaFinMes; i++){
        diasMes.value.push(i.toString());
    }
    const numDiaFinMesPrev = date.subtractFromDate(dateInitial, {day: 1}).getDate();
    for(let i = 0; i < diaInicioSemana; i++){
        diasMes.value.unshift('');
    }
}

const openDatePopup = (e:any)=> {
  if (typeof e == 'boolean') {
    datePopup.value = e
  } else {
    datePopup.value = true
  }
}

const prevMonth = () => {
    fechaSelected.value = date.formatDate(date.subtractFromDate(new Date(fechaSelected.value), {month: 1}), 'YYYY/MM/DD');
}
const nextMonth = () => {
    fechaSelected.value = date.formatDate(date.addToDate(new Date(fechaSelected.value), {month: 1}), 'YYYY/MM/DD');
}
watch(() => fechaSelected.value, () => {
    obtenerUltimoDiaMes();
    datePopup.value = false;
});

onMounted(() => {
    fechaSelected.value = date.formatDate(new Date(), 'YYYY/MM/DD');
    obtenerUltimoDiaMes();
});
</script>
<style>
.grid-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    grid-auto-rows: 70px;
}

</style>