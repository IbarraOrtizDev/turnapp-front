<template>
    <q-page padding class="q-ma-md">
        <!-- <section class="flex justify-center gap-5">
          <section v-for="suc in usuarios">
            <q-card class="my-card q-pa-xs" style=" width: 100%;max-width: 300px;">
              <q-card-section>
                <div class="text-h6"><b>Nombre: </b>{{ suc.id_usuario.first_name }} {{ suc.id_usuario.last_name }}</div>
                <div class="text-subtitle2">
                  <b>Correo: </b>{{ suc.id_usuario.email }}
                </div>
                <div class="text-caption">
                  <b>Usuario: </b>{{ suc.id_usuario.username }}
                </div>
                <div class="text-caption">
                  <b>Cargo: </b>{{ suc.cargo }}
                </div>
                <div class="text-caption">
                  <b>Especialidad: </b>{{ suc.especialidad }}
                </div>
              </q-card-section>
            </q-card>
          </section>
        </section> -->
        <section>
            <q-table
            title="Colaboradores"
                :columns="headers"
                :rows="usuarios"
                row-key="id"
                wrap-cells
                no-data-label="No hay datos"
            >
                <template v-slot:body-cell-name="props">
                    <q-td :props="props">
                        {{ props.row.id_usuario.first_name }} {{ props.row.id_usuario.last_name }}
                    </q-td>
                </template>
                <template v-slot:body-cell-username="props">
                    <q-td :props="props">
                        {{ props.row.id_usuario.username }}
                    </q-td>
                </template>
                <template v-slot:body-cell-email="props">
                    <q-td :props="props">
                        {{ props.row.id_usuario.email }}
                    </q-td>
                </template>
                <template v-slot:body-cell-cargo="props">
                    <q-td :props="props">
                        {{ props.row.cargo }}
                    </q-td>
                </template>
                <template v-slot:body-cell-especialidad="props">
                    <q-td :props="props">
                        {{ props.row.especialidad }}
                    </q-td>
                </template>
            </q-table>
        </section>
        <q-dialog v-model="alert" persistent>
            <q-card style="max-width:500px;width:100%">
                <q-card-section>
                    <div class="text-h6">Crear Colaborador</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.email" label="Correo *" />
                    <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.username" label="Usuario *" />
                    <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.name" label="Nombre *" />
                    <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.lastname" label="Apellido *" />
                    <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.telefono" label="Teléfono *" />
                    <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.cedula" label="Cedula *" />
                    <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.password" label="Contraseña *" type="password" />
                    <q-input outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.validate_password" label="Validar Contraseña *" type="password" />

                    <q-select
                    class="q-ma-md bg-white"
                        v-model="createUserInfor.sucursal"
                        :options="sucursales"
                        label="Sucursal *"
                        outlined
                        style="border-radius:5px"
                    />
                    <q-select
                    class="q-ma-md bg-white"
                        v-model="createUserInfor.rol"
                        :options="roles"
                        label="Rol *"
                        outlined
                        style="border-radius:5px"
                    />
                    <q-input v-if="createUserInfor.rol.value == 'Medico'" outlined class="q-ma-md bg-white" style="border-radius:5px" v-model="createUserInfor.especialidad" label="Especialidad *" />
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="Cancelar" color="warning" v-close-popup />
                    <q-btn flat label="Crear" color="primary" @click="createEmploye" />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <q-page-sticky position="bottom-right" :offset="[30, 30]">
            <q-btn fab icon="add" color="primary" @click="openModal" />
            <q-tooltip anchor="bottom middle" self="top middle">Agregar Colaborador</q-tooltip>
        </q-page-sticky>
    </q-page>
</template>
<script lang="ts" setup>
import { getGenericServices } from '~/services/genericServices';
import type { GenericServicesResponse } from '~/interfaces/GenericServicesResponse';
import type { Sucursal } from '~/interfaces/Sucursal';
import type { ISelect } from '~/interfaces/ISelect';
import { useQuasar } from 'quasar';
import { postGenericServices } from '~/services/genericServices';
import type { Usuario } from '~/interfaces/Usuario';
import type { Column } from '~/interfaces/Columns';
const alert = ref(false);
const $q = useQuasar();
const router = useRouter();
const sucursales = ref<ISelect[]>([]);
const usuarios = ref<Usuario[]>([]);
const roles = [
    {label: 'Administrador', value: 'Admin'},
    {label: 'Medico', value: 'Medico'}
]
const headers : Column[]= [
    {
        name: 'name',
        required: true,
        label: 'Nombre',
        align: 'left',
        field: 'id_usuario.first_name',
        format: (val: any) => `${val}`,
        sortable: true,
    },
    {
        name: 'username', 
        required: true,
        label: 'Usuario',
        align: 'left',
        field: 'id_usuario.username',
        format: (val: any) => `${val}`,
        sortable: true,
    },
    {
        name: 'email',
        required: true,
        label: 'Correo',
        align: 'left',
        field: 'id_usuario.email',
        format: (val: any) => `${val}`,
        sortable: true,
    },
    {
        name: 'cargo',
        required: true,
        label: 'Cargo',
        align: 'left',
        field: 'cargo',
        format: (val: any) => `${val}`,
        sortable: true,
    },
    {
        name: 'especialidad',
        required: true,
        label: 'Especialidad',
        align: 'left',
        field: 'especialidad',
        format: (val: any) => `${val}`,
        sortable: true,
    }
]
const createUserInfor = reactive({
    username: '',
    email: '',
    password: '',
    validate_password: '',
    name: '',
    lastname: '',
    sucursal: {label: '', value: ''},
    rol: {label: '', value: ''},
    cedula: '',
    telefono: '',
    especialidad: ''
})
const openModal = () => {
    alert.value = true
}
onMounted(async () => {
  await listSucursales()
  await listEmpleados()
    console.log('Usuarios')
})

const listSucursales = async () => {
  $q.loading.show();
  const sucursalesQ : GenericServicesResponse<Sucursal> = await getGenericServices<Sucursal>('sucursales');
  $q.loading.hide();
  if(sucursalesQ.status === 401){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/access/login')
    return;
  }
  if(sucursalesQ.status !== 200){
    $q.notify({
      color: 'red',
      message: 'Error al cargar las sucursales',
      position: 'top'
    })
  }
  if(sucursalesQ.data === null || sucursalesQ.data == undefined || sucursalesQ.data.length === 0){
    $q.notify({
      color: 'red',
      message: 'No hay sucursales registradas',
      position: 'top'
    })
  }
  sucursales.value = sucursalesQ.data?.map(x=> {
    return {
      label: x.nombre,
      value: x.id.toString()
    }
  })  || [];
}

const listEmpleados = async ()=>{
  $q.loading.show();
  const response = await getGenericServices<Usuario>('empleados')
  $q.loading.hide();
  if(response.status === 401){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/access/login')
    return;
  }
  if(response.status !== 200){
    $q.notify({
      color: 'red',
      message: 'Error al cargar los usuarios',
      position: 'top'
    })
  }
  usuarios.value = response.data || [];

  console.log(usuarios.value)

}


const createEmploye= async () => {
    if(!passwordSecurity()) return

    if(!createUserInfor.email || !createUserInfor.username || !createUserInfor.name || !createUserInfor.lastname || !createUserInfor.cedula || !createUserInfor.password || !createUserInfor.validate_password){
      $q.notify({
        color: 'red',
        message: 'Por favor complete todos los campos',
        position: 'top'
      })
      return
    }
    const data = {
      email: createUserInfor.email,
      username: createUserInfor.username,
      first_name: createUserInfor.name,
      last_name: createUserInfor.lastname,
      cedula: createUserInfor.cedula,
      password: createUserInfor.password,
      tipo_usuario: createUserInfor.rol.value,
      estado: 'Activo',
      id_afiliado: 1,
      id_cia: 1
    }
    $q.loading.show();
    try{
      const response = await postGenericServices<any>('register', data)

      if(response.status === 401){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/access/login')
        return;
      }
      debugger
      if(![200,201].includes(response.status)){
        $q.notify({
          color: 'red',
          message: 'Error al crear el usuario',
          position: 'top'
        })
        return;
      }
      const colaborador = {
        id_usuario: response.dataOnly?.user.id,
        id_sucursal: parseInt(createUserInfor.sucursal.value),
        especialidad: createUserInfor.especialidad,
        cargo: createUserInfor.rol.value,
        cedula: createUserInfor.cedula,
        id_tipo_empleado: 1,
        activo: true,
      }
      
      const responseColaborador = await postGenericServices('empleados', colaborador)
      if(responseColaborador.status === 401){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/access/login')
        return;
      }
      if( ![200, 201].includes(responseColaborador.status)){
        $q.notify({
          color: 'red',
          message: 'Error al crear el usuario',
          position: 'top'
        })
        return;
      }
      $q.notify({
        color: 'green',
        message: 'Usuario creado exitosamente',
        position: 'top'
      })
      alert.value = false;
    }catch(error){
      console.log(error)
      $q.notify({
        color: 'red',
        message: 'Error al crear el usuario',
        position: 'top'
      })
    }finally{
      $q.loading.hide();
    }
    await listEmpleados()
  }
const passwordSecurity = () => {
  if(createUserInfor.password != createUserInfor.validate_password){
    $q.notify({
      color: 'red',
      message: 'Las contraseñas no coinciden',
      position: 'top'
    })
    return false;
  }
  //password validation, at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if(!passwordRegex.test(createUserInfor.password)){
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
<style lang="">
    
</style>