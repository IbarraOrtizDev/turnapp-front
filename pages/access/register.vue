<template>
    <div class="q-pa-md">
      <section>
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="usuario.email" label="Correo Electronico *" />
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="usuario.username" label="Usuario *" />
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="usuario.first_name" label="Nombre *" />
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="usuario.last_name" label="Apellido *" />
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="usuario.cedula" label="Cedula *" />
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="usuario.password" label="Contraseña *" type="password" />
        <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="usuario.validate_password" label="Validar Contraseña *" type="password" />
      </section>
      <div class="q-mx-sm flex justify-end">
        <NuxtLink href="/access/login" class="q-ml-md text-white no-decoration self-center">Login</NuxtLink>
        <div class="flex justify-end">
            <q-btn class="q-ma-md " label="Crear Usuario" color="primary" @click="createUser" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useQuasar } from 'quasar';
  import { base_api } from '~/boot/base_api';
  definePageMeta({
    layout:'auth'
  })
  const $q = useQuasar();
  const router = useRouter();

  const usuario = reactive({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    cedula: '',
    password: '',
    validate_password: ''
  })

  const createUser = async () => {
    if(!passwordSecurity()) return
    if(!usuario.email || !usuario.username || !usuario.first_name || !usuario.last_name || !usuario.cedula || !usuario.password || !usuario.validate_password){
      $q.notify({
        color: 'red',
        message: 'Por favor complete todos los campos',
        position: 'top'
      })
      return
    }
    const data = {
      email: usuario.email,
      username: usuario.username,
      first_name: usuario.first_name,
      last_name: usuario.last_name,
      cedula: usuario.cedula,
      password: usuario.password,
      tipo_usuario: 'afiliado',
      estado: 'Activo',
      id_afiliado: 1,
      id_cia: 1
    }
    try{
      const response = await fetch(base_api + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      debugger
      const result = await response.json()
      if( ![200,201].includes(response.status) ){
        console.log(response.status)
        $q.notify({
          color: 'red',
          message: JSON.stringify(result.username.join('\n')),
          position: 'top'
        })
        return
      }
      localStorage.setItem('token', result.token)
      localStorage.setItem('user', JSON.stringify(result.user))
      localStorage.setItem('user', JSON.stringify(result.profile))
      $q.notify({
        color: 'green',
        message: 'Usuario creado exitosamente',
        position: 'top'
      })
      router.push('/')
    }catch(error){
      console.log(error)
      $q.notify({
        color: 'red',
        message: 'Error al crear el usuario',
        position: 'top'
      })
    }
  }
  const passwordSecurity = () => {
    if(usuario.password != usuario.validate_password){
      $q.notify({
        color: 'red',
        message: 'Las contraseñas no coinciden',
        position: 'top'
      })
      return false;
    }
    //password validation, at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(!passwordRegex.test(usuario.password)){
      $q.notify({
        color: 'red',
        message: 'La contraseña debe tener al menos 8 caracteres, 1 mayuscula, 1 minuscula, 1 numero y 1 caracter especial',
        position: 'top'
      })
      return false;
    }
    return true;
  }
  </script>