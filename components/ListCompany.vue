<template>
  <section class="q-pt-xl" style="display: grid; grid-template-columns: 1fr 50px;max-width: 400px;margin:10px auto; gap:2px">
    <q-input outlined v-model="text"  type="text" label="Buscar compañías" class="bg-white" />
    <q-btn icon="search" flat color="primary" />
  </section>
  <section class="bg-white q-pa-md flex gap-3 justify-center" style="min-height: 200px;">
    
    <q-card v-for="suc in filtrar()" class="my-card q-pa-xs" style=" width: 100%;max-width: 300px;">
      <div>
        <img style="height: 200px; width: 100%; object-fit: cover; object-position: center;" :src="suc.imagen">
      </div>
      <q-card-section>
        <div class="text-h6">{{ suc.nombre }}</div>
        <div class="text-subtitle2">
          <q-icon name="location_on" class="q-mr-xs" />
          {{ suc.direccion }}
        </div>
        <div class="text-caption">
          <q-icon name="phone" class="q-mr-xs" />
          {{ suc.celular }}</div>
      </q-card-section>
    </q-card>
  </section>
</template>
<script lang="ts" setup>
import {ref } from 'vue';
import type { Sucursal } from '~/interfaces/Sucursal';
const text = ref('');
const sucursales = ref<Sucursal[]>([
  {
    id: 1,
    nombre: 'Sisben',
    direccion: 'Calle 1 # 2-3',
    celular: '1234567890',
    imagen: 'https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain',
    domingo_apertura: null,
    domingo_cierre: null,
    lues_apertura: null,
    lunes_cierre: null,
    martes_apertura: null,
    martes_cierre: null,
    miercoles_apertura: null,
    miercoles_cierre: null,
    jueves_apertura: null,
    jueves_cierre: null,
    viernes_apertura: null,
    viernes_cierre: null,
    sabado_apertura: null,
    sabado_cierre: null,
    id_cia: 1,
    tiempo_por_usuario: 10,
    usuario_por_dia: 10
  },
  {
    id: 2,
    nombre: 'Registraduria',
    direccion: 'Calle 1 # 2-3',
    celular: '1234567890',
    imagen: 'https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain',
    domingo_apertura: null,
    domingo_cierre: null,
    lues_apertura: null,
    lunes_cierre: null,
    martes_apertura: null,
    martes_cierre: null,
    miercoles_apertura: null,
    miercoles_cierre: null,
    jueves_apertura: null,
    jueves_cierre: null,
    viernes_apertura: null,
    viernes_cierre: null,
    sabado_apertura: null,
    sabado_cierre: null,
    id_cia: 1,
    tiempo_por_usuario: 10,
    usuario_por_dia: 10
  },
  {
    id: 3,
    nombre: 'Notaria',
    direccion: 'Calle 1 # 2-3',
    celular: '1234567890',
    imagen: 'https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain',
    domingo_apertura: null,
    domingo_cierre: null,
    lues_apertura: null,
    lunes_cierre: null,
    martes_apertura: null,
    martes_cierre: null,
    miercoles_apertura: null,
    miercoles_cierre: null,
    jueves_apertura: null,
    jueves_cierre: null,
    viernes_apertura: null,
    viernes_cierre: null,
    sabado_apertura: null,
    sabado_cierre: null,
    id_cia: 1,
    tiempo_por_usuario: 10,
    usuario_por_dia: 10
  },
  {
    id: 4,
    nombre: 'Alcaldia',
    direccion: 'Calle 1 # 2-3',
    celular: '1234567890',
    imagen: 'https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain',
    domingo_apertura: null,
    domingo_cierre: null,
    lues_apertura: null,
    lunes_cierre: null,
    martes_apertura: null,
    martes_cierre: null,
    miercoles_apertura: null,
    miercoles_cierre: null,
    jueves_apertura: null,
    jueves_cierre: null,
    viernes_apertura: null,
    viernes_cierre: null,
    sabado_apertura: null,
    sabado_cierre: null,
    id_cia: 1,
    tiempo_por_usuario: 10,
    usuario_por_dia: 10
  },
  {
    id: 5,
    nombre: 'Clinica el Rosario',
    direccion: 'Calle 1 # 2-3',
    celular: '1234567890',
    imagen: 'https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain',
    domingo_apertura: null,
    domingo_cierre: null,
    lues_apertura: null,
    lunes_cierre: null,
    martes_apertura: null,
    martes_cierre: null,
    miercoles_apertura: null,
    miercoles_cierre: null,
    jueves_apertura: null,
    jueves_cierre: null,
    viernes_apertura: null,
    viernes_cierre: null,
    sabado_apertura: null,
    sabado_cierre: null,
    id_cia: 1,
    tiempo_por_usuario: 10,
    usuario_por_dia: 10
  }
])

const filtrar = () => {
  return sucursales.value.filter((suc: Sucursal) => {
    return suc.nombre.toLowerCase().includes(text.value.toLowerCase());
  });
}
</script>

<style scoped></style>
