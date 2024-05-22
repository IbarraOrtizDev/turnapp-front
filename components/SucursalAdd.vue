<template lang="">
    <q-dialog v-model="alert" persistent>
      <q-card style="max-width:500px;width:100%">
        <q-card-section>
          <div class="text-h6">Crear Sucursal</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-input outlined class="q-my-sm" v-model="sucursal.nombre" label="Nombre" />
            <q-input outlined class="q-my-sm" v-model="sucursal.direccion" label="Direccion" />
            <q-input outlined class="q-my-sm" v-model="sucursal.telefono" label="Telefono" />
            <q-input outlined type="email" class="q-my-sm" v-model="sucursal.email" label="Email" />
            <q-input outlined class="q-my-sm" type="number" v-model="sucursal.tiempo_por_usuario" label="Tiempo por usuario (Minuto)" />
            <div>
                <div class="text-h6 q-mb-md">Horario de Atencion</div>
            </div>
            <div class="q-ml-md">
                <div class="text-subtitle1">Lunes</div>
                <div class="flex gap-4 left-1 q-ml-md justify-center">
                    <q-input outlined type="time" v-model="sucursal.lunes_apertura" label="Apertura" />
                    <q-input outlined type="time" v-model="sucursal.lunes_cierre" label="Cierre" />
                </div>
            </div>

            <div class="q-ml-md">
                <div class="text-subtitle1">Martes</div>
                <div class="flex gap-4 left-1 q-ml-md justify-center">
                    <q-input outlined type="time" v-model="sucursal.martes_apertura" label="Apertura" />
                    <q-input outlined type="time" v-model="sucursal.martes_cierre" label="Cierre" />
                </div>
            </div>

            <div class="q-ml-md">
                <div class="text-subtitle1">Miercoles</div>
                <div class="flex gap-4 left-1 q-ml-md justify-center">
                    <q-input outlined type="time" v-model="sucursal.miercoles_apertura" label="Apertura" />
                    <q-input outlined type="time" v-model="sucursal.miercoles_cierre" label="Cierre" />
                </div>
            </div>

            <div class="q-ml-md">
                <div class="text-subtitle1">Jueves</div>
                <div class="flex gap-4 left-1 q-ml-md justify-center">
                    <q-input outlined type="time" v-model="sucursal.jueves_apertura" label="Apertura" />
                    <q-input outlined type="time" v-model="sucursal.jueves_cierre" label="Cierre" />
                </div>
            </div>

            <div class="q-ml-md">
                <div class="text-subtitle1">Viernes</div>
                <div class="flex gap-4 left-1 q-ml-md justify-center">
                    <q-input outlined type="time" v-model="sucursal.viernes_apertura" label="Apertura" />
                    <q-input outlined type="time" v-model="sucursal.viernes_cierre" label="Cierre" />
                </div>
            </div>

            <div class="q-ml-md">
                <div class="text-subtitle1">Sabado</div>
                <div class="flex gap-4 left-1 q-ml-md justify-center">
                    <q-input outlined type="time" v-model="sucursal.sabado_apertura" label="Apertura" />
                    <q-input outlined type="time" v-model="sucursal.sabado_cierre" label="Cierre" />
                </div>
            </div>

            <div class="q-ml-md">
                <div class="text-subtitle1">Domingo</div>
                <div class="flex gap-4 left-1 q-ml-md justify-center">
                    <q-input outlined type="time" v-model="sucursal.domingo_apertura" label="Apertura" />
                    <q-input outlined type="time" v-model="sucursal.domingo_cierre" label="Cierre" />
                </div>
            </div>

        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="warning" v-close-popup />
          <q-btn flat label="Crear" v-if="!props.isEdit" color="primary" @click="createSucursal" />
          <q-btn flat label="Actualizar" v-else="!props.isEdit" color="primary" @click="createSucursal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-sticky position="bottom-right" :offset="[30, 30]">
      <q-btn fab icon="add" color="primary" @click="openModal" />
      <q-tooltip anchor="bottom middle" self="top middle">Agregar Sucursal</q-tooltip>
    </q-page-sticky>
</template>
<script setup>
import { useQuasar } from 'quasar';
import { postGenericServices, patchGenericServices } from '~/services/genericServices';
const emit = defineEmits(['listSucursales', 'closeModal'])
const props = defineProps({
  isEdit: {
    type: Boolean,
    required: true,
    default: false
  },
    sucursalEdit: {
        type: Object,
        default: () => ({})
    }
})
const alert = ref(false)
const $q = useQuasar();
const sucursal = reactive({
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    lunes_apertura: '',
    lunes_cierre: '',
    martes_apertura: '',
    martes_cierre: '',
    miercoles_apertura: '',
    miercoles_cierre: '',
    jueves_apertura: '',
    jueves_cierre: '',
    viernes_apertura: '',
    viernes_cierre: '',
    sabado_apertura: '',
    sabado_cierre: '',
    domingo_apertura: '',
    domingo_cierre: '',
    tiempo_por_usuario: '',
    usuario_por_dia: 1,
    id_cia: 1
})

const createSucursal = async () => {
    if(!sucursal.nombre || !sucursal.direccion || !sucursal.telefono || !sucursal.email){
        $q.notify({
            color: 'red',
            message: 'Por favor complete todos los campos',
            position: 'top'
        })
        return
    }

    if(!sucursal.lunes_apertura || !sucursal.lunes_cierre || !sucursal.martes_apertura || !sucursal.martes_cierre || !sucursal.miercoles_apertura || !sucursal.miercoles_cierre || !sucursal.jueves_apertura || !sucursal.jueves_cierre || !sucursal.viernes_apertura || !sucursal.viernes_cierre || !sucursal.sabado_apertura || !sucursal.sabado_cierre || !sucursal.domingo_apertura || !sucursal.domingo_cierre){
        $q.notify({
            color: 'red',
            message: 'Por favor complete todos los campos',
            position: 'top'
        })
        return
    }
    debugger
    if(transformTime(sucursal.lunes_apertura) >= transformTime(sucursal.lunes_cierre) || transformTime(sucursal.martes_apertura) >= transformTime(sucursal.martes_cierre) || transformTime(sucursal.miercoles_apertura) >= transformTime(sucursal.miercoles_cierre) || transformTime(sucursal.jueves_apertura) >= transformTime(sucursal.jueves_cierre) || transformTime(sucursal.viernes_apertura) >= transformTime(sucursal.viernes_cierre) || transformTime(sucursal.sabado_apertura) >= transformTime(sucursal.sabado_cierre) || transformTime(sucursal.domingo_apertura) > transformTime(sucursal.domingo_cierre)){
        $q.notify({
            color: 'red',
            message: 'La hora de apertura no puede ser mayor o igual a la hora de cierre',
            position: 'top'
        })
        return
    }
    if(props.isEdit){
        await update()
    }else{
        await create()
    }
    
}
const create = async () => {
    $q.loading.show()
    const response = await postGenericServices('sucursales', sucursal);
    $q.loading.hide()
    if(!statusResponse(response)) return
    $q.notify({
        color: 'green',
        message: 'Sucursal creada exitosamente',
        position: 'top'
    })
    alert.value = false
    emit('listSucursales')
}
const update = async ()=> {
    const dat = {...sucursal, id: props.sucursalEdit.id}
    $q.loading.show()
    const response = await patchGenericServices('sucursales', dat);
    $q.loading.hide()
    if(!statusResponse(response)) return
    $q.notify({
        color: 'green',
        message: 'Sucursal actualizada exitosamente',
        position: 'top'
    })
    alert.value = false
    emit('listSucursales')
}

const statusResponse = (response) => {
    if(response.status === 401){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/access/login')
        return false;
    }
    if(response.status === 403){
        $q.notify({
            color: 'red',
            message: 'No tiene permisos para ejecutar esta accion',
            position: 'top'
        })
        return false;
    }
    if( ![200,201].includes(response.status)){
        $q.notify({
            color: 'red',
            message: 'Error al ejecutar esta acción',
            position: 'top'
        })
        return false
    }
    return true
}



const openModal = () => {
    alert.value = true
}
const transformTime = (time) => {
    const fechaActual = new Date().toISOString().split('T')[0]
    return new Date(fechaActual + ' ' + time.replaceAll('.', '')).getTime()
}
watch(()=> props.sucursalEdit, (value) => {
    if(value){
        alert.value = true
    }
})
watch(() => alert.value, (value) => {
    if(!alert.value){
        emit('closeModal')
    };
    if(props.isEdit){
        sucursal.nombre = props.sucursalEdit.nombre
        sucursal.direccion = props.sucursalEdit.direccion
        sucursal.telefono = props.sucursalEdit.telefono
        sucursal.email = props.sucursalEdit.email
        sucursal.lunes_apertura = props.sucursalEdit.lunes_apertura
        sucursal.lunes_cierre = props.sucursalEdit.lunes_cierre
        sucursal.martes_apertura = props.sucursalEdit.martes_apertura
        sucursal.martes_cierre = props.sucursalEdit.martes_cierre
        sucursal.miercoles_apertura = props.sucursalEdit.miercoles_apertura
        sucursal.miercoles_cierre = props.sucursalEdit.miercoles_cierre
        sucursal.jueves_apertura = props.sucursalEdit.jueves_apertura
        sucursal.jueves_cierre = props.sucursalEdit.jueves_cierre
        sucursal.viernes_apertura = props.sucursalEdit.viernes_apertura
        sucursal.viernes_cierre = props.sucursalEdit.viernes_cierre
        sucursal.sabado_apertura = props.sucursalEdit.sabado_apertura
        sucursal.sabado_cierre = props.sucursalEdit.sabado_cierre
        sucursal.domingo_apertura = props.sucursalEdit.domingo_apertura
        sucursal.domingo_cierre = props.sucursalEdit.domingo_cierre
        sucursal.tiempo_por_usuario = props.sucursalEdit.tiempo_por_usuario
    }else{
        sucursal.nombre = ''
        sucursal.direccion = ''
        sucursal.telefono = ''
        sucursal.email = ''
        sucursal.lunes_apertura = ''
        sucursal.lunes_cierre = ''
        sucursal.martes_apertura = ''
        sucursal.martes_cierre = ''
        sucursal.miercoles_apertura = ''
        sucursal.miercoles_cierre = ''
        sucursal.jueves_apertura = ''
        sucursal.jueves_cierre = ''
        sucursal.viernes_apertura = ''
        sucursal.viernes_cierre = ''
        sucursal.sabado_apertura = ''
        sucursal.sabado_cierre = ''
        sucursal.domingo_apertura = ''
        sucursal.domingo_cierre = ''
        sucursal.tiempo_por_usuario = ''
    }
})
</script>
<style lang="">
    
</style>