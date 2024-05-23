<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary text-white">
        <q-btn flat round dense icon="menu" @click="drawerOpen = !drawerOpen" class="q-mr-sm" />
        <!-- <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar> -->
        <q-toolbar-title>Turn App</q-toolbar-title>
        <q-btn flat round dense icon="notifications" />
        <q-btn flat round dense icon="person">
          <q-menu style="width:180px;max-width: 180px;">
            <q-list style="width: 100%">
              <q-item clickable v-ripple @click="verPerfil">
                <q-item-section avatar>
                  <q-icon name="person" size="xs" class="text-primary" />
                </q-item-section>
                <q-item-section>Perfil</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="closeSession">
                <q-item-section avatar>
                  <q-icon name="login" size="xs" class="text-primary" />
                </q-item-section>
                <q-item-section>Cerrar Sesion</q-item-section>
              </q-item>
              <!-- Agrega más opciones aquí -->
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above>
      <h6 class="q-ma-md">Menú</h6>
      <q-list>
        <NuxtLink href="/" class="no-decoration text-grey-10">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" class="text-primary" />
            </q-item-section>
            <q-item-section>Inicio</q-item-section>
          </q-item>
        </NuxtLink>
        <NuxtLink href="/cita" class="no-decoration text-grey-10">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="event" class="text-primary" />
            </q-item-section>
            <q-item-section>Citas</q-item-section>
          </q-item>
        </NuxtLink>
        <NuxtLink v-if="tipo_usuario != 'afiliado' && tipo_usuario != 'Medico' && tipo_usuario != 'Médico'" href="/sucursales" class="no-decoration text-grey-10">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="local_hospital" class="text-primary" />
            </q-item-section>
            <q-item-section>Sucursales</q-item-section>
          </q-item>
        </NuxtLink>
        <NuxtLink v-if="tipo_usuario != 'afiliado' && tipo_usuario != 'Medico' && tipo_usuario != 'Médico'" href="/usuarios" class="no-decoration text-grey-10">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="people" class="text-primary" />
            </q-item-section>
            <q-item-section>Colaboradores</q-item-section>
          </q-item>
        </NuxtLink>
        <NuxtLink v-if="tipo_usuario != 'Medico' && tipo_usuario != 'Médico'" href="/proceso" class="no-decoration text-grey-10">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="people" class="text-primary" />
            </q-item-section>
            <q-item-section>Médico</q-item-section>
          </q-item>
        </NuxtLink>
      </q-list>
    </q-drawer>

    <q-page-container style="background-color: rgb(223 221 205 / 25%); min-height: 100vh;">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const router = useRouter()
const tipo_usuario = ref('')
const verPerfil = () => {
  router.push('/perfil')
}

const link = (url: string) => {
  router.push(url)
}

const closeSession = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/access/login')
}

onMounted(() => {
  if (!localStorage.getItem('token')) {
    router.push('/access/login')
  }
  const profile = localStorage.getItem('profile')
  if(profile){
    tipo_usuario.value = JSON.parse(profile).tipo_usuario
  }
})

const drawerOpen = ref(false)
</script>

<style scoped></style>