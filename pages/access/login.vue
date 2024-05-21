<template lang="">
    <section>
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="email" label="Email *" />
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="password" label="Password *" type="password" />
        <NuxtLink href="/access/forgetpassword" class="q-ml-md text-white no-decoration">Olvide la contraseña</NuxtLink>
        <NuxtLink href="/access/register" class="q-ml-md text-white no-decoration">Registrarse</NuxtLink>
        <div class="flex justify-end">
            <q-btn class="q-ma-md " label="Iniciar Sesion" color="primary" @click="login" />
        </div>
    </section>
</template>
<script setup>
import { base_api } from '~/boot/base_api';
import { useQuasar } from 'quasar';
const email = ref('')
const password = ref('')
const $q = useQuasar();
definePageMeta({
    layout:'auth'
})

const login = () => {
    if(!email.value || !password.value){
        $q.notify({
            color: 'red',
            message: 'Por favor complete todos los campos',
            position: 'top'
        })
        return
    }
    const data = {
        username: email.value,
        password: password.value
    }
    useFetch(base_api + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        console.log(response)
        $q.notify({
            color: 'green',
            message: 'Inicio de sesion exitoso',
            position: 'top'
        })
    }).catch((error) => {
        $q.notify({
            color: 'red',
            message: 'Error al iniciar sesion',
            position: 'top'
        })
    })
    console.log(email.value, password.value)
}
</script>
<style lang="">

</style>