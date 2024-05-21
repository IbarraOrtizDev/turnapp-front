<template lang="">
    <q-page class="q-mt-md q-pa-lg grid-calendar-page">
        <section class="bg-white q-pt-md">
            <LateralCita />
        </section>
        <section class="">
            <CalendarioCitas/>
        </section>
    </q-page>
</template>
<script>
export default {
    
}
</script>
<style>
    .grid-calendar-page {
        display: grid;
        grid-template-columns: 230px 1fr;
        grid-gap: 20px;
    }
    @media screen and (max-width: 1000px) {
        .grid-calendar-page {
            grid-template-columns: 1fr;
        }
    }
</style>