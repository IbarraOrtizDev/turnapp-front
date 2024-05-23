<template>
  <div class="q-mt-lg">
    <div class="q-ma-md">

      <div class="text-h5 q-py-md">Mis Citas en Proceso</div>
      <StatusAppointment :loading="true" />
      <div class="text-h5 q-py-md">Mis Citas Canceladas</div>
      <StatusAppointment :icons="false" />
      <div class="text-h5 q-mt-lg q-py-md">Mis Citas Finalizadas</div>
      <CitasFinalizadas />
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>