<template>
    <q-page padding class="q-mx-md">
        <h5>Usuarios</h5>
        <section>
            
        </section>
        <q-dialog v-model="alert" persistent>
            <q-card style="max-width:500px;width:100%">
                <q-card-section>
                    <div class="text-h6">Crear Colaborador</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <q-input outlined class="q-my-sm" type="text" label="Nombre" />
                    <q-input outlined class="q-my-sm" type="text" label="Apellido" />
                    <q-input outlined class="q-my-sm" type="text" label="Correo" />
                    <q-input outlined class="q-my-sm" type="text" label="Teléfono" />
                    <q-input outlined class="q-my-sm" type="text" label="Dirección" />
                    <q-input outlined class="q-my-sm" type="text" label="Contraseña" />
                    <q-input outlined class="q-my-sm" type="text" label="Confirmar Contraseña" />
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="Cancelar" color="warning" v-close-popup />
                    <q-btn flat label="Crear" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <q-page-sticky position="bottom-right" :offset="[30, 30]">
            <q-btn fab icon="add" color="primary" @click="openModal" />
            <q-tooltip anchor="bottom middle" self="top middle">Agregar Colaborador</q-tooltip>
        </q-page-sticky>
    </q-page>
</template>
<script setup>
const alert = ref(false)
const openModal = () => {
    alert.value = true
}
</script>
<style lang="">
    
</style>