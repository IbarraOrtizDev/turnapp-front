<template lang="">
    <section>
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="email" label="Email *" />
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="password" label="Password *" type="password" />
        <NuxtLink href="/access/forgetpassword" class="q-ml-md text-white no-decoration">Olvide la contraseña</NuxtLink>
        <NuxtLink href="/access/register" class="q-ml-md text-white no-decoration">Registrarse</NuxtLink>
        <div class="flex justify-end">
            <q-btn class="q-ma-md " label="Iniciar Sesion" color="primary" />
        </div>
    </section>
</template>
<script setup>
const email = ref('')
const password = ref('')
definePageMeta({
    layout:'auth'
})
</script>
<style lang="">

</style>