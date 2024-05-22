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
          <q-btn flat label="Crear" color="primary" @click="createSucursal" />
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
import { postGenericServices } from '~/services/genericServices';
const emit = defineEmits(['listSucursales'])
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

    if(transformTime(sucursal.lunes_apertura) >= transformTime(sucursal.lunes_cierre) || transformTime(sucursal.martes_apertura) >= transformTime(sucursal.martes_cierre) || transformTime(sucursal.miercoles_apertura) >= transformTime(sucursal.miercoles_cierre) || transformTime(sucursal.jueves_apertura) >= transformTime(sucursal.jueves_cierre) || transformTime(sucursal.viernes_apertura) >= transformTime(sucursal.viernes_cierre) || transformTime(sucursal.sabado_apertura) >= transformTime(sucursal.sabado_cierre) || transformTime(sucursal.domingo_apertura) >= transformTime(sucursal.domingo_cierre)){
        $q.notify({
            color: 'red',
            message: 'La hora de apertura no puede ser mayor o igual a la hora de cierre',
            position: 'top'
        })
        return
    }
    $q.loading.show()
    const response = await postGenericServices('sucursales', sucursal);
    $q.loading.hide()
    if(response.status === 401){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/access/login')
        return;
    }
    if(response.status !== 201){
        $q.notify({
            color: 'red',
            message: 'Error al crear la sucursal',
            position: 'top'
        })
        return
    }
    $q.notify({
        color: 'green',
        message: 'Sucursal creada exitosamente',
        position: 'top'
    })
    alert.value = false
    emit('listSucursales')
}
const openModal = () => {
    alert.value = true
}
const transformTime = (time) => {
    const fechaActual = new Date().toISOString().split('T')[0]
    return new Date(fechaActual + ' ' + time.replaceAll('.', '')).getTime()
}
</script>
<style lang="">
    
</style>