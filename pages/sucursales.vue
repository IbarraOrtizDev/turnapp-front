<template lang="">
  <section class="q-ma-md q-py-md">
    <article class="flex gap-5 justify-center">
      <section v-for="suc in sucursales">
        <q-card class="my-card q-pa-xs" style=" width: 100%;max-width: 300px;">
          <div>
            <img style="height: 200px; width: 100%; object-fit: contain; object-position: center;" src="https://seeklogo.com/images/E/estrella-de-la-vida-logo-C4736942A0-seeklogo.com.png">
          </div>
          <q-card-section>
            <div class="text-h6">{{ suc.nombre }}</div>
            <div class="text-subtitle2">
              <q-icon name="location_on" class="q-mr-xs" />
              {{ suc.direccion }}
            </div>
            <div class="text-caption">
              <q-icon name="phone" class="q-mr-xs" />
              {{ suc.telefono }}
            </div>
            <div class="text-caption">
              <q-icon name="email" class="q-mr-xs" />
              {{ suc.email }}
            </div>
          </q-card-section>
          <q-card-actions class="justify-center">
            <div class="text-caption texto_fecha">
                <div><q-icon name="schedule" class="q-mr-xs" />Lunes:</div>
                <div>{{ suc.lunes_apertura }} - {{ suc.lunes_cierre }}</div>
            </div>
            <div class="text-caption texto_fecha">
                <div><q-icon name="schedule" class="q-mr-xs" />Martes:</div>
                <div>{{ suc.martes_apertura }} - {{ suc.martes_cierre }}</div>
            </div>
            <div class="text-caption texto_fecha">
                <div><q-icon name="schedule" class="q-mr-xs" />Miercoles:</div>
                <div>{{ suc.miercoles_apertura }} - {{ suc.miercoles_cierre }}</div>
            </div>
            <div class="text-caption texto_fecha">
                <div><q-icon name="schedule" class="q-mr-xs" />Jueves:</div>
                <div>{{ suc.jueves_apertura }} - {{ suc.jueves_cierre }}</div>
            </div>
            <div class="text-caption texto_fecha">
                <div><q-icon name="schedule" class="q-mr-xs" />Viernes:</div>
                <div>{{ suc.viernes_apertura }} - {{ suc.viernes_cierre }}</div>
            </div>
            <div class="text-caption texto_fecha">
                <div><q-icon name="schedule" class="q-mr-xs" />Sabado:</div>
                <div>{{ suc.sabado_apertura }} - {{ suc.sabado_cierre }}</div>
            </div>
            <div class="text-caption texto_fecha">
                <div><q-icon name="schedule" class="q-mr-xs" />Domingo:</div>
                <div>{{ suc.domingo_apertura }} - {{ suc.domingo_cierre }}</div>
            </div>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn @click="editSucursal(suc.id)" flat round color="primary" icon="edit" />
            <q-btn @click="viewCalendar(suc.id)" flat round color="primary" icon="event" />
          </q-card-actions>
        </q-card>
      </section>
    </article>
    <SucursalAdd @listSucursales="listSucursales" @closeModal="edit = false" :isEdit="edit" :sucursalEdit="dataEdit" />
  </section>
</template>
<script setup lang="ts">
import type { Sucursal } from '~/interfaces/Sucursal';
import type { GenericServicesResponse } from '~/interfaces/GenericServicesResponse';
import { useQuasar } from 'quasar';
import { getGenericServices } from '~/services/genericServices';

const token = ref('')
const sucursales = ref<Sucursal[]>([])
const $q = useQuasar();
const router = useRouter();
const edit = ref(false)
const data = ref([
  { name: 'Ali', age: 25 },
  { name: 'Can', age: 16 },
  { name: 'Ebru', age: 19 }
])
const dataEdit = ref<Sucursal>()
const viewCalendar = (id:number)=>
{
  router.push('/cita/'+id)
}

const editSucursal = (id:number) => {
  dataEdit.value = sucursales.value.find(suc => suc.id === id)
  edit.value = true
}

onMounted(async () => {
  token.value = localStorage.getItem('token') || ''
  await listSucursales()
})
const listSucursales = async () => {
  $q.loading.show();
  const sucursalesQ : GenericServicesResponse<Sucursal> = await getGenericServices<Sucursal>('sucursales');
  $q.loading.hide();
  if(sucursalesQ.status === 401){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/access/login')
    return;
  }
  if(sucursalesQ.status !== 200){
    $q.notify({
      color: 'red',
      message: 'Error al cargar las sucursales',
      position: 'top'
    })
  }
  if(sucursalesQ.data === null || sucursalesQ.data == undefined || sucursalesQ.data.length === 0){
    $q.notify({
      color: 'red',
      message: 'No hay sucursales registradas',
      position: 'top'
    })
  }
  sucursales.value = sucursalesQ.data || [];
}
</script>
<style>
  .texto_fecha{
    display:grid; grid-template-columns: 80px 1fr;
  }
</style>