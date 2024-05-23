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
<script setup>
const headers = ref([
    { name: 'id', align: 'left', label: '#', field: row => row.id},
    { name: 'Paciente', align: 'left', label: 'Paciente', field: row => row.paciente },
    { name: 'Cedula', align: 'left', label: 'Cedula', field: row => row.cedula },
    { name: 'Telefono', align: 'left', label: 'Telefono', field: row => row.telefono },
    { name: 'Acciones', align: 'center', label: 'Acciones', field: row => row.acciones }
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
</script>
<style lang="">
    
</style>