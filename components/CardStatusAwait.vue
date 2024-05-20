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
          <q-item-label class="text-subtitle1">Sisben</q-item-label>
          <q-item-label class="flex" caption>
            <q-icon name="event" class="q-mr-xs" />
            <div><b>Fecha:</b> 18-09-2024</div>
          </q-item-label>
          <q-item-label caption>
            <q-icon name="access_alarms" class="q-mr-xs" />
            <b>Hora Aproximada:</b> 03:00</q-item-label>
          <q-item-label caption class="flex q-pt-md">
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
      <q-linear-progress indeterminate color="primary" />
      </q-card>
    </q-card-section>
</template>
<script>
</script>
<style lang="">
    
</style>