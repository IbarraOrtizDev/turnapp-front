<template lang="">
  <section class="q-ma-md">
    <h5>Sucursales</h5>
    <q-table
      title="Table Title"
      :rows="data"
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
<script setup>
const alert = ref(false)
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
  },
  { name: 'age', align: 'center', label: 'Age', field: 'age' }
]
const data = ref([
  { name: 'Ali', age: 25 },
  { name: 'Can', age: 16 },
  { name: 'Ebru', age: 19 }
])
const openModal = () => {
  alert.value = true
}
</script>
<style lang="">
  
</style>