<template lang="">
    <div class="text-center">
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" alt="Quasar Logo" style="width: 150px">
    </div>
    <section class="q-ma-xs">
        <q-item-list>
            <q-item v-ripple>
                <q-item-section><b>Dirección:</b> {{ props.sucursal.direccion}}</q-item-section>
            </q-item>
            <q-item v-ripple>
                <q-item-section><b>Teléfono:</b> {{ props.sucursal.telefono}}</q-item-section>
            </q-item>
        </q-item-list>
        <q-item-list>
            <q-item-section style="flex-wrap:nowrap" >
                <q-item v-ripple>
                        <q-item-section><b>Horario de atención:</b></q-item-section>
                    </q-item>
                <q-list class="q-ml-md horario">                        
                    <q-item v-ripple >
                        <q-item-section><b>Lunes</b><i>{{ props.sucursal.lunes_apertura }} - {{ props.sucursal.lunes_cierre }}</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Martes</b><i>{{ props.sucursal.martes_apertura }} - {{ props.sucursal.martes_cierre }}</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Miercoles</b><i>{{ props.sucursal.miercoles_apertura }} - {{ props.sucursal.miercoles_cierre }}</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Jueves</b><i>{{ props.sucursal.jueves_apertura }} - {{ props.sucursal.jueves_cierre }}</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Viernes</b><i>{{ props.sucursal.viernes_apertura }} - {{ props.sucursal.viernes_cierre }}</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Sabado</b><i>{{ props.sucursal.sabado_apertura }} - {{ props.sucursal.sabado_cierre }}</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Domingo</b><i>{{ props.sucursal.domingo_apertura }} - {{ props.sucursal.domingo_cierre }}</i></q-item-section>
                    </q-item>
                </q-list>
            </q-item-section>
        </q-item-list>
    </section>
</template>
<script lang="ts" setup>
import type { Sucursal } from '~/interfaces/Sucursal';
const props = defineProps({
    sucursal: {
        type: Object,
        required: true,
        default: () => ({})
    }
})
</script>
<style>
    @media screen and (max-width: 1000px) {
        .horario{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 10px;
            grid-auto-rows: min-content;
        }
    }
</style>