<template lang="">
    <form>
        <div>
            <q-input class="bg-white" style="border-radius:5px" v-model="email" label="Email" outlined />
        </div>
        <div class="flex justify-end q-mt-md flex-col gap-1" >
            <q-btn label="Regresar" flat @click="cancel" color="white" />
            <q-btn label="Recuperar" @click="recoverPassword" class="" color="primary" />
        </div>
    </form>
</template>
<script setup>
import { useQuasar } from 'quasar'

const email = ref('')
const $q = useQuasar()

const recoverPassword = () => {
    $q.notify({
        color: 'primary',
        position: 'top',
        message: 'Recuperando contraseña, por favor revise su correo electrónico',
        icon: 'email'
    })
    console.log(email.value)
}

const cancel = () => {
    const router = useRouter()
    router.push('/access/login')
}

definePageMeta({
    layout:'auth'
})
</script>
<style lang="">
    
</style>