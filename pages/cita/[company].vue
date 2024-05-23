<template lang="">
    <q-page class="q-mt-md q-pa-lg grid-calendar-page">
        <section class="bg-white q-pt-md">
            <LateralCita :sucursal="sucursal" />
        </section>
        <section class="">
            <CalendarioCitas :numMedicos="empleados.length * (sucursal?.tiempo_por_usuario || 0)" :citas="citas" @separarEspacio="separarEspacio"/>
        </section>
        <q-dialog v-model="alert" persistent>
            <q-card style="max-width:500px;width:100%">
                <q-card-section>
                    <div class="text-h6">Agendar Cita para {{ dataCreateCita.fecha_hora.split(' ')[0] }}</div>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <q-select
                    class="q-ma-md bg-white"
                        v-model="dataCreateCita.medico_id"
                        :options="medicosComputed"
                        label="Medico *"
                        outlined
                        style="border-radius:5px"
                    />
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="Cancelar" color="warning" v-close-popup />
                    <q-btn flat label="Crear" color="primary" @click="completeCita" />
                </q-card-actions>
            </q-card>
        </q-dialog>        
    </q-page>
</template>
<script lang="ts" setup>
import { getGenericServices, postGenericServices } from '~/services/genericServices';
import type { Sucursal } from '~/interfaces/Sucursal';
import { useQuasar } from 'quasar';
import type { CreateCita } from '~/interfaces/Cita';
import type { Usuario } from '~/interfaces/Usuario';
import type { Cita } from '~/interfaces/Cita';
const route = useRoute();
const router = useRouter();
const $q = useQuasar();
const sucursal = ref<Sucursal>();
const capacidad = reactive({
    lunes :{
        apertura: '',
        cierre: '',
        capacidad: 0,
    },
    martes :{
        apertura: '',
        cierre: '',
        capacidad: 0,
    },
    miercoles :{
        apertura: '',
        cierre: '',
        capacidad: 0,
    },
    jueves :{
        apertura: '',
        cierre: '',
        capacidad: 0,
    },
    viernes :{
        apertura: '',
        cierre: '',
        capacidad: 0,
    },
    sabado :{
        apertura: '',
        cierre: '',
        capacidad: 0,
    },
    domingo :{
        apertura: '',
        cierre: '',
        capacidad: 0,
    }
});
const tiempoUsuarios = ref(0);
const alert = ref(false);
const empleados = ref<Usuario[]>([]);
const citas = ref<Cita[]>([]);

const dataCreateCita = reactive<CreateCita>({
    estado: 'Pendiente',
    fecha_hora: '',
    id_sucursal: parseInt(route.params.company.toString()),
    paciente_id: 1,
    medico_id: {
        value: 0,
        label: ''
    },
    tipo_cita: 'Presencial',
})

const separarEspacio = (fecha: any) => {
    if(tiempoUsuarios.value === 0){
        $q.notify({
            color: 'red',
            message: 'No hay empleados registrados en esta sucursal, por lo que no se pueden separar espacios',
            position: 'top'
        })
        return;
    }

    alert.value = true;
    dataCreateCita.fecha_hora = `${fecha.anio}-${fecha.mes.toString().padStart(2,'0')}-${fecha.dia.toString().padStart(2,'0')} 00:00`;
}

const completeCita = async () => {
    if(dataCreateCita.medico_id.value === 0){
        $q.notify({
            color: 'red',
            message: 'Debe seleccionar un medico',
            position: 'top'
        })
        return;
    }

    const fechaTiempo = new Date(dataCreateCita.fecha_hora.split(' ')[0]).getTime();
    const profile = JSON.parse(localStorage.getItem('user') || '{}');

    if(citas.value.filter(x=> new Date(x.fecha_hora).getTime() === fechaTiempo && x.paciente_id == profile.id).length){
        $q.notify({
            color: 'red',
            message: 'Ya tienes una cita agendada para este dia',
            position: 'top'
        })
        return;
    }

    
    if(profile.id === undefined){
        router.push('/access/login')
        return;
    }
    const dataSend = {
        estado: dataCreateCita.estado,
        fecha_hora: dataCreateCita.fecha_hora,
        id_sucursal: dataCreateCita.id_sucursal,
        paciente_id: profile.id,
        medico_id: dataCreateCita.medico_id.value,
        tipo_cita: dataCreateCita.tipo_cita,
    }


    
    postGenericServices('citas', dataSend).then((res) => {
        if(res.status === 401){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            router.push('/access/login')
            return;
        }
        if( ![200,201].includes(res.status) ){
            $q.notify({
                color: 'red',
                message: 'Error al crear la cita',
                position: 'top'
            })
            return;
        }
        $q.notify({
            color: 'green',
            message: 'Cita creada correctamente',
            position: 'top'
        })
        alert.value = false;
        getListCitas();
    });
}

const getListCitas = async () => {
  $q.loading.show();
  const data = await getGenericServices<Cita>('citasn');
  const hoyInicio = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`).getTime();
  const hoyFin = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} 23:59:59`).getTime();
  $q.loading.hide();
  if(data.status === 200){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if(Object.keys(user).length === 0) router.push('/login');
    if (data.data) {
      citas.value = data.data.filter(x=> x.id_sucursal === parseInt(route.params.company.toString()))
    }
  }else{
    $q.notify({
      color: 'negative',
      message: 'Error al obtener las citas',
      position: 'top',
      timeout: 2000
    });
  }
}

const consultaSucursal = () => {
    getGenericServices<Sucursal>('sucursales?id='+route.params.company).then((res) => {
        if(res.status === 401){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            router.push('/access/login')
            return;
        }
        if(res.status !== 200){
            $q.notify({
                color: 'red',
                message: 'Error al cargar la sucursal',
                position: 'top'
            })
            return;
        }
        if(res.data === null || res.data == undefined){
            $q.notify({
                color: 'red',
                message: 'No hay sucursal registrada',
                position: 'top'
            })
        }
        
        sucursal.value = res.data?.find(x=> x.id == parseInt(route.params.company.toString())) || undefined;
        capacidad.lunes.apertura = sucursal.value?.lunes_apertura || '';
        capacidad.lunes.cierre = sucursal.value?.lunes_cierre || '';
        capacidad.martes.apertura = sucursal.value?.martes_apertura || '';
        capacidad.martes.cierre = sucursal.value?.martes_cierre || '';
        capacidad.miercoles.apertura = sucursal.value?.miercoles_apertura || '';
        capacidad.miercoles.cierre = sucursal.value?.miercoles_cierre || '';
        capacidad.jueves.apertura = sucursal.value?.jueves_apertura || '';
        capacidad.jueves.cierre = sucursal.value?.jueves_cierre || '';
        capacidad.viernes.apertura = sucursal.value?.viernes_apertura || '';
        capacidad.viernes.cierre = sucursal.value?.viernes_cierre || '';
        capacidad.sabado.apertura = sucursal.value?.sabado_apertura || '';
        capacidad.sabado.cierre = sucursal.value?.sabado_cierre || '';
        capacidad.domingo.apertura = sucursal.value?.domingo_apertura || '';
        capacidad.domingo.cierre = sucursal.value?.domingo_cierre || '';
        capacidadByDay('lunes');
        capacidadByDay('martes');
        capacidadByDay('miercoles');
        capacidadByDay('jueves');
        capacidadByDay('viernes');
        capacidadByDay('sabado');
        capacidadByDay('domingo');

    });
}
const getEmpleados = () => {
    $q.loading.show();
    getGenericServices<Usuario>('empleados').then((res) => {
        $q.loading.hide();
        if(res.status === 401){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            router.push('/access/login')
            return;
        }
        if(res.status !== 200){
            $q.notify({
                color: 'red',
                message: 'Error al cargar los empleados',
                position: 'top'
            })
            return;
        }
        if(res.data === null || res.data == undefined){
            $q.notify({
                color: 'red',
                message: 'No hay empleados registrados',
                position: 'top'
            })
        }
        const usuarioUbicacion : Usuario[] = res.data ? res.data.filter((x : any)=> x.id_sucursal == route.params.company) : [];
        if(usuarioUbicacion == undefined || usuarioUbicacion.length === 0){
            tiempoUsuarios.value = 0;
            $q.notify({
                color: 'red',
                message: 'No hay empleados registrados en esta sucursal',
                position: 'top'
            })
            return;
        }
        empleados.value = usuarioUbicacion;
        tiempoUsuarios.value = usuarioUbicacion.length * (sucursal.value?.tiempo_por_usuario || 0);
        console.log(res.data);
    });
}
watch(tiempoUsuarios, (value) => {
    capacidadByDay('lunes');
    capacidadByDay('martes');
    capacidadByDay('miercoles');
    capacidadByDay('jueves');
    capacidadByDay('viernes');
    capacidadByDay('sabado');
    capacidadByDay('domingo');
})

const capacidadByDay = (dia : string) => {
    const day = (capacidad as { [key: string]: { apertura: string; cierre: string; capacidad: number } })[dia];
    const inicio = new Date(new Date().toDateString() + ' ' + day.apertura).getTime();
    const fin = new Date(new Date().toDateString() + ' ' + day.cierre).getTime();
    const minutos = (fin - inicio) / 60000;
    capacidad[dia as keyof typeof capacidad].capacidad = minutos / (sucursal.value?.tiempo_por_usuario ?? 0);
}

const quitarTildes = (cadena: string) => {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const medicosComputed = computed(() => {
    return empleados.value?.filter(x => quitarTildes(x.cargo) == 'Medico').map(x => {
        return {
            value: x.id,
            label: x.id_usuario.first_name + ' ' + x.id_usuario.last_name
        }
    }) || [];
})

onMounted(async () => {
    await getListCitas();
    await consultaSucursal();
    await getEmpleados();
})
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