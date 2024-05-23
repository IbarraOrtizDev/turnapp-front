<template>
  <div class="q-mt-lg">
    <div class="q-ma-md">

      <div class="text-h5 q-py-md">Mis Citas en Proceso</div>
      <StatusAppointment :citas="citas.filter(x=> x.estado == 'Confirmada')" :loading="true" />
      <div class="text-h5 q-py-md">Mis Citas Canceladas</div>
      <StatusAppointment :citas="citas.filter(x=> x.estado == 'Pendiente')"  :icons="false" />
      <div class="text-h5 q-mt-lg q-py-md" >Mis Citas Finalizadas</div>
      <StatusAppointment :icons="false" :finalizada="true"  :citas="citas.filter(x=> x.estado == 'Finalizada')"  />
    </div>
  </div>
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

onMounted(async () => {
  await getSucursal();
  await getListCitas();
});

const getListCitas = async () => {
  $q.loading.show();
  const data = await getGenericServices<Cita>('citasn');
  $q.loading.hide();
  if(data.status === 200){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(Object.keys(user).length === 0) router.push('/login');
    if (data.data) {
      citas.value = data.data.map(x => ({
        ...x,
        sucursal: sucursal.value.find(y => y.id === x.id_sucursal) || null
      }));
      // data.data.filter((itm) => itm.paciente_id === user.id);
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