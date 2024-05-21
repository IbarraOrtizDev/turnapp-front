<template lang="">
    <div class="text-center">
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" alt="Quasar Logo" style="width: 150px">
    </div>
    <section class="q-ma-xs">
        <q-item-list>
            <q-item v-ripple>
                <q-item-section><b>Dirección:</b></q-item-section>
            </q-item>
            <q-item v-ripple>
                <q-item-section><b>Teléfono:</b></q-item-section>
            </q-item>
        </q-item-list>
        <q-item-list>
            <q-item-section style="flex-wrap:nowrap" >
                <q-item v-ripple>
                        <q-item-section><b>Horario de atención:</b></q-item-section>
                    </q-item>
                <q-list class="q-ml-md horario">                        
                    <q-item v-ripple >
                        <q-item-section><b>Lunes</b><i>08:00 am - 05:00 pm</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Martes</b><i>08:00 am - 05:00 pm</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Miercoles</b><i>08:00 am - 05:00 pm</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Jueves</b><i>08:00 am - 05:00 pm</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Viernes</b><i>08:00 am - 05:00 pm</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Sabado</b><i>08:00 am - 05:00 pm</i></q-item-section>
                    </q-item>
                    <q-item v-ripple >
                        <q-item-section><b>Domingo</b><i>08:00 am - 05:00 pm</i></q-item-section>
                    </q-item>
                </q-list>
            </q-item-section>
        </q-item-list>
    </section>
</template>
<script>
export default {
    
}
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