<template>
    <q-page class="q-pa-lg">
      <section class="q-pt-xl q-pb-lg" style="display: grid; grid-template-columns: 1fr 50px;max-width: 600px;margin:10px auto; gap:2px">
    <q-input outlined v-model="text"  type="text" label="Buscar compañías" class="bg-white" />
    <q-btn icon="search" flat color="primary" />
  </section>
  <section class="q-pa-md flex gap-5 justify-center" style="min-height: 200px;">
    
    <q-card v-for="suc in filtrar()" class="my-card q-pa-xs" style=" width: 100%;max-width: 300px;">
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
          {{ suc.telefono }}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn @click="viewCalendar(suc.id)" flat round color="primary" icon="event" />
      </q-card-actions>
    </q-card>
  </section>
    </q-page>
  </template>
  <script lang="ts" setup>
  import { useQuasar } from 'quasar';
  import { getGenericServices } from '~/services/genericServices';
  import type { Sucursal } from '~/interfaces/Sucursal';
  import type { GenericServicesResponse } from '~/interfaces/GenericServicesResponse';
  const text = ref('');
  const router = useRouter();
  const $q = useQuasar();
  const sucursales = ref<Sucursal[]>([]);
  const viewCalendar = (id:number)=>
  {
    router.push('/cita/'+id)
  }
  const filtrar = () => {
    return sucursales.value.filter((suc: Sucursal) => {
      return suc.nombre.toLowerCase().includes(text.value.toLowerCase());
    });
  }
  onMounted(async () => {
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
  })
  </script>  