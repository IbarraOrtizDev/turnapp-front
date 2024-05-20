<template>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
        style="background-color: #fff;"
      >
        <q-step
          :name="1"
          title="Crear empresa"
          caption="Requerido"
          icon="settings"
          :done="step > 1"
        >
          <q-input outlined v-model="name" label="Nombre de la empresa *" class="q-my-md" />
          <q-input outlined v-model="phone" label="Telefono" class="q-my-md" />
          <q-input outlined v-model="email" label="Sitio Web" class="q-my-md" />
  
          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>
  
        <q-step
          :name="2"
          title="Crear Usuario"
          caption="Requerido"
          icon="person"
          :done="step > 2"
        >
          <q-input outlined v-model="username" label="Nombre de usuario *" class="q-my-md" />
          <q-input outlined v-model="email" label="Correo electrónico *" class="q-my-md" />
          <q-input outlined v-model="password" label="Contraseña *" type="password" class="q-my-md" />
          <q-input outlined v-model="confirmPassword" label="Confirmar contraseña *" type="password" class="q-my-md" />
  
          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Crear" />
            <q-btn flat @click="step = 1" color="primary" label="Regresar" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
      <div class="q-mt-lg q-mx-sm flex justify-end">
        <NuxtLink href="/access/login" class="q-ml-md text-white no-decoration">Login</NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  const step = ref(1)
  definePageMeta({
    layout:'auth'
})
  </script>