<template lang="">
  <section class="q-ma-md q-py-md">
    <q-table
      title="Sucursales"
      :rows="sucursales"
      :columns="columns"
      row-key="name"
    />
    <q-dialog v-model="alert" persistent>
      <q-card style="max-width:500px;width:100%">
        <q-card-section>
          <div class="text-h6">Crear Sucursal</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input outlined type="text" label="Label" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="warning" v-close-popup />
          <q-btn flat label="Crear" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-sticky position="bottom-right" :offset="[30, 30]">
      <q-btn fab icon="add" color="primary" @click="openModal" />
      <q-tooltip anchor="bottom middle" self="top middle">Agregar Sucursal</q-tooltip>
    </q-page-sticky>
  </section>
</template>
<script setup lang="ts">
import type { Column } from '~/interfaces/Columns';
import type { Sucursal } from '~/interfaces/Sucursal';
import type { GenericServicesResponse } from '~/interfaces/GenericServicesResponse';
import { useQuasar } from 'quasar';
import { getGenericServices } from '~/services/genericServices';

const alert = ref(false)
const token = ref('')
const sucursales = ref<Sucursal[]>([])
const $q = useQuasar();
const router = useRouter();
console.log(token)
const columns : Column[] = [
  {
    name: 'nombre',
    label: 'Nombre',
    align: 'left',
    field: 'nombre',
    sortable: true,
    required: false,
    format: undefined,
  },
  {
    name: 'direccion',
    label: 'Direccion',
    align: 'left',
    field: 'direccion',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'telefono',
    label: 'Teléfono',
    align: 'left',
    field: 'telefono',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'email',
    label: 'Correo Electronico',
    align: 'left',
    field: 'email',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'lunes_apertura',
    label: 'Lunes Apertura',
    align: 'left',
    field: 'lunes_apertura',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'lunes_cierre',
    label: 'Lunes Cierre',
    align: 'left',
    field: 'lunes_cierre',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'martes_apertura',
    label: 'Martes Apertura',
    align: 'left',
    field: 'martes_apertura',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'martes_cierre',
    label: 'Martes Cierre',
    align: 'left',
    field: 'martes_cierre',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'miercoles_apertura',
    label: 'Miercoles Apertura',
    align: 'left',
    field: 'miercoles_apertura',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'miercoles_cierre',
    label: 'Miercoles Cierre',
    align: 'left',
    field: 'miercoles_cierre',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'jueves_apertura',
    label: 'Jueves Apertura',
    align: 'left',
    field: 'jueves_apertura',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'jueves_cierre',
    label: 'Jueves Cierre',
    align: 'left',
    field: 'jueves_cierre',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'viernes_apertura',
    label: 'Viernes Apertura',
    align: 'left',
    field: 'viernes_apertura',
    sortable: true,
    required: false,
    format: undefined
  },
  {
    name: 'viernes_cierre',
    label: 'Viernes Cierre',
    align: 'left',
    field: 'viernes_cierre',
    sortable: true,
    required: false,
    format: undefined
  }
]
const data = ref([
  { name: 'Ali', age: 25 },
  { name: 'Can', age: 16 },
  { name: 'Ebru', age: 19 }
])
const openModal = () => {
  alert.value = true
}
onMounted(async () => {
  token.value = localStorage.getItem('token') || ''
  $q.loading.show();
    const sucursalesQ : GenericServicesResponse<Sucursal> = await getGenericServices<Sucursal>('sucursales');
    $q.loading.hide();
    if(sucursalesQ.status === 401){
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      router.push('/login')
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
<style lang="">
  
</style>