<template lang="">
    <q-page padding>
        <section class="flex justify-center">
            <q-card class="my-card" style=" width:100%; max-width:350px">
            <q-card-section>
                <div class="text-h6">Paciente: Facundo Rodriguez</div>
                <div class="text-subtitle2">Cedula: 7143080</div>
                <div class="text-subtitle2">Telefono: 323226580</div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn color="primary" label="Siguiente" />
            </q-card-actions>
        </q-card>
        </section>
        <div class="q-mt-xl">
            <q-table
                title="Orden de atencion"
                :rows="data"
                :columns="headers"
                row-key="name"
            >
        
            <template v-slot:no-data="{ icon, message, filter }">
                <div class="full-width row flex-center text-accent q-gutter-sm">
                <q-icon size="2em" name="sentiment_dissatisfied" />
                <span>
                    No tienes citas pendientes
                </span>
                <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
                </div>
            </template>
        </q-table>
        </div>
    </q-page>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar';
import type { Cita } from '~/interfaces/Cita';
import type { Sucursal } from '~/interfaces/Sucursal';
import { getGenericServices } from '~/services/genericServices';

const citas = ref<Cita[]>([]);
const sucursal = ref<Sucursal[]>([]);
const router = useRouter();
const $q = useQuasar();
const headers = ref([
    { name: 'id', align: 'left', label: '#', field: (row: { id: any; }) => row.id},
    { name: 'Paciente', align: 'left', label: 'Paciente', field: (row: { paciente: any; }) => row.paciente },
    { name: 'Cedula', align: 'left', label: 'Cedula', field: (row: { cedula: any; }) => row.cedula },
    { name: 'Telefono', align: 'left', label: 'Telefono', field: (row: { telefono: any; }) => row.telefono },
    { name: 'Acciones', align: 'center', label: 'Acciones', field: (row: { acciones: any; }) => row.acciones }
]);
const data = ref([
    {
        id: 1,
        paciente: 'Facundo Rodriguez',
        cedula: '7143080',
        telefono: '323226580',
        acciones: 'Ver'
    },
    {
        id: 2,
        paciente: 'Facundo Rodriguez',
        cedula: '7143080',
        telefono: '323226580',
        acciones: 'Ver'
    },
    {
        id: 3,
        paciente: 'Facundo Rodriguez',
        cedula: '7143080',
        telefono: '323226580',
        acciones: 'Ver'
    },
    {
        id: 4,
        paciente: 'Facundo Rodriguez',
        cedula: '7143080',
        telefono: '323226580',
        acciones: 'Ver'
    
    }
])

onMounted(async () => {
  // await getSucursal();
  await getListCitas();
});

const getListCitas = async () => {
  $q.loading.show();
  const data = await getGenericServices<Cita>('citasn');
  const hoyInicio = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`).getTime();
  const hoyFin = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} 23:59:59`).getTime();
  $q.loading.hide();
  if(data.status === 200){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(Object.keys(user).length === 0) router.push('/login');
    if (data.data) {
      citas.value = data.data.filter(x=> hoyInicio <= new Date(x.fecha_hora).getTime() && hoyFin >= new Date(x.fecha_hora).getTime() && x.medico_id === user.id)
                             .sort((a,b)=> a.id - b.id)
    }
  }else{
    $q.notify({
      color: 'negative',
      message: 'Error al obtener las citas',
      position: 'top',
      timeout: 2000
    });
  }
}

const getSucursal = async () => {
  $q.loading.show();
  const data = await getGenericServices<Sucursal>('sucursales');
  $q.loading.hide();
  if(data.status === 200){
    if (data.data) {
      sucursal.value = data.data;
    }
    console.log(data.data);
  }else{
    $q.notify({
      color: 'negative',
      message: 'Error al obtener las sucursales',
      position: 'top',
      timeout: 2000
    });
  }
}
</script>
<style lang="">
  
</style>