<template lang="">
    <q-card-section  style="">
      <q-card clickable v-ripple>
        <section class="flex q-pa-md ">
          <q-item-section avatar>
          <q-img
            src="https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain"
            :ratio="1/1"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle1">{{props.cita.sucursal.nombre}}</q-item-label>
          <q-item-label class="flex" caption>
            <q-icon name="event" class="q-mr-xs" />
            <div><b>Fecha:</b> {{ props.cita.fecha_hora.split('T')[0] }}</div>
          </q-item-label>
          <q-item-label caption>
            <q-icon name="access_alarms" class="q-mr-xs" />
            <b>Hora Aproximada:</b> {{ new Date(props.cita.fecha_hora).toLocaleTimeString() }}</q-item-label>
          <q-item-label v-if="props.icons" caption class="flex q-pt-md">
            <q-btn flat color="purple" round icon="person" class="q-ml-md">
              <q-badge color="red" floating>4</q-badge>
              <q-tooltip>
                Ahora mismo hay 4 personas en la cola
              </q-tooltip>
            </q-btn>
            <q-btn flat color="purple" round icon="notifications" class="q-ml-md">
              <q-badge color="red" floating>4</q-badge>
              <q-tooltip>
                Tienes 4 notificaciones
              </q-tooltip>
            </q-btn>
          </q-item-label>
        </q-item-section>
        </section>
      <q-linear-progress v-if="props.loading" indeterminate color="primary" />
      </q-card>
    </q-card-section>
</template>
<script lang="ts" setup>

import type { Cita } from '~/interfaces/Cita';

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  icons: {
    type: Boolean,
    default: () => true
  },
  cita:{
    type: Object as () => Cita,
    required: true
  }
})
</script>
<style lang="">
    
</style>