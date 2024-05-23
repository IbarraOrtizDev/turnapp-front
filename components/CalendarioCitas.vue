<template lang="">
    <q-card class="my-card q-pa-md">
        <div class="flex justify-between items-center q-pa-md" style="">
            <div id="controls" class="flex align-center items-center gap-2">
                <q-btn color="primary" flat round icon="chevron_left" @click="prevMonth" />
                <q-btn color="primary" flat round icon="chevron_right" @click="nextMonth" />
                <div v-if="$q.screen.width > 500"  class="text-subtitle1 text-4">{{mesesAnio[mesSelected]}} {{anioSelected}} </div>
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
                <div class="text-center self-center sibtitle-1" v-for="dia  in diasSemana" :key={dia}><b>{{dia}}</b></div>
            </section>
            <section v-else class="grid-calendar">
                <div class="text-center self-center sibtitle-1" v-for="dia  in diasSemanaCorto" :key={dia}><b>{{dia}}</b></div>
            </section>
            <section class="grid-calendar">
                <div v-for="dia in diasMes" style="height:100%" >
                    <div style="height:100%" v-if="!(new Date(`${anioSelected}-${mesSelected+1}-${dia}`).getTime() < hoy.getTime())" :clickable="!(new Date(`${anioSelected}-${mesSelected+1}-${dia}`).getTime() < hoy.getTime())" >
                        <q-item style="height:100%"  v-ripple clickable  :class="dia != '' ? new Date(`${anioSelected}-${mesSelected+1}-${dia}`).getTime() == hoy.getTime() ? 'border-1 bg-secondary' : 'border-1': ''" :key={dia} @click="separarEspacio(dia)">
                            <q-item-section style="flex-wrap:nowrap" v-if="dia != ''">
                                <div>
                                    {{dia}}
                                </div>
                                <q-chip class="center-chip" v-if="citasMes[dia].valor != 0">
                                    {{citasMes[dia].valor || 0}}
                                </q-chip>
                                <q-tooltip>
                                    Hay {{citasMes[dia].disponibles || 0}} turnos disponibles
                                </q-tooltip>
                            </q-item-section>
                        </q-item>
                    </div>
                    <div style="height:100%"  v-else>
                        <q-item style="height:100%" :class="dia != '' ? new Date(`${anioSelected}-${mesSelected+1}-${dia}`).getTime() == hoy.getTime() ? 'border-1 bg-secondary' : 'border-1': ''" :key={dia} @click="separarEspacio(dia)">
                            <q-item-section style="flex-wrap:nowrap" v-if="dia != ''">
                                <div>
                                    {{dia}}
                                </div>
                                <q-chip class="center-chip" v-if="citasMes[dia].valor != 0">
                                    {{citasMes[dia].valor || 0}}
                                </q-chip>
                            </q-item-section>
                        </q-item>
                    </div>
                </div>
                <!--  -->
            </section>
        </div>
    </q-card>
</template>
<script lang="ts" setup>
import { date, useQuasar } from 'quasar';
import { mesesAnio, diasSemana, diasSemanaCorto } from '~/Helpers/SeddData';
import type { Cita } from '~/interfaces/Cita';
const fechaSelected = ref<string>('');
const mesInit = ref<string>('');
const mesFin = ref<string>('');
const diasMes = ref<string[]>([]);
const datePopup = ref(false)
const mesSelected = ref<number>(0);
const anioSelected = ref<number>(0);
const hoy = new Date(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`);
const citasMes = reactive<any>({});
const $q = useQuasar();
const emit = defineEmits(['separarEspacio']);

const props = defineProps({
    citas: {
        type: Object as () => Cita[],
        default: () => [],
        required: true
    },
    numMedicos: {
        type: Number,
        default: 0
    }
});

const obtenerUltimoDiaMes = () => {
    const fixParseFecha = new Date(fechaSelected.value);
    const month = fixParseFecha.getMonth();
    const year = fixParseFecha.getFullYear();
    const dateInitial = new Date(year, month, 1);
    mesInit.value = date.formatDate(dateInitial, 'YYYY/MM/DD');
    const nextMonth = date.addToDate(dateInitial, {month: 1});
    mesFin.value = date.formatDate(date.subtractFromDate(nextMonth, {day: 1}), 'YYYY/MM/DD');
    const diaInicioSemana = dateInitial.getDay()-1;
    const numDiaFinMes = date.subtractFromDate(nextMonth, {day: 1}).getDate();
    mesSelected.value = month;
    anioSelected.value = year;
    diasMes.value = [];
    for(let i = 1; i <= numDiaFinMes; i++){
        diasMes.value.push(i.toString());
    }
    
    for(let i = 0; i < diaInicioSemana; i++){
        diasMes.value.unshift('');
    }
}

const isLeft = (dia: string) => {
    if(dia == '' || (new Date(`${anioSelected.value}-${mesSelected.value+1}-${dia}`).getTime() < hoy.getTime() )){
        return true;
    }
    return false;
}

const separarEspacio = (dia: string) => {
    if(isLeft(dia)){
        return;
    }
    emit('separarEspacio', {
        dia: parseInt(dia),
        mes: mesSelected.value+1,
        anio: anioSelected.value
    });
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

watch(() => mesSelected, () => {
    obtenerCitasMes();
});

watch(() => anioSelected, () => {
    obtenerCitasMes();
});

watch(() => props.citas, () => {
    obtenerCitasMes();
});

watch(() => props.numMedicos, () => {
    obtenerCitasMes();
});

const obtenerCitasMes = () => {
    const mesInit = new Date(`${anioSelected.value}-${mesSelected.value+1}-01`);
    const mesFin = date.addToDate(mesInit, {month: 1});
    const cit = props.citas.filter(x => new Date(x.fecha_hora.replace('T',' ').replace('Z','')).getTime() >= mesInit.getTime() && new Date(x.fecha_hora.replace('T',' ').replace('Z','')).getTime() < mesFin.getTime());
    fillMonth();
    cit.forEach(x => {
        const key = new Date(x.fecha_hora.replace('T',' ').replace('Z','')).getDate().toString();
        if(citasMes[key]){
            citasMes[key].valor += 1;
            citasMes[key].disponibles -= 1;
        }
    });
}

const fillMonth = ()=>{
    for(let i = 1; i <= 31; i++){
        citasMes[i.toString()] = {
            valor: 0,
            disponibles: props.numMedicos
        }
    }
}


onMounted(() => {
    fechaSelected.value = date.formatDate(new Date(), 'YYYY/MM/DD');
    obtenerUltimoDiaMes();
    obtenerCitasMes();
});
</script>
<style>
.grid-calendar {
    display: grid;
    grid-template-columns: repeat(7, minmax(10px, 1fr));
    grid-auto-rows: 90px;
}
.center-chip>div{
    justify-content: center;
}
</style>