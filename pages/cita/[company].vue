<template lang="">
    <q-page class="q-mt-md q-pa-lg grid-calendar-page">
        <section class="bg-white q-pt-md">
            <LateralCita :sucursal="sucursal" />
        </section>
        <section class="">
            <CalendarioCitas @separarEspacio="separarEspacio"/>
        </section>
    </q-page>
</template>
<script lang="ts" setup>
import { getGenericServices } from '~/services/genericServices';
import type { Sucursal } from '~/interfaces/Sucursal';
import { useQuasar } from 'quasar';
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

const separarEspacio = (fecha: string) => {
    if(tiempoUsuarios.value === 0){
        $q.notify({
            color: 'red',
            message: 'No hay empleados registrados en esta sucursal, por lo que no se pueden separar espacios',
            position: 'top'
        })
        return;
    }
    $q.dialog({
        title: 'Turnos disponibles',
        message: 'Para el dia hay 32 turnos disponibles y debes estar en el logur a las 10:30. ¿Desea reservar uno?',
        ok: 'Aceptar',
        cancel: 'Cancelar'
    }).onOk(async () => {
        console.log('OK')
    }).onCancel(() => {
        console.log('Cancel')
    })
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
    getGenericServices('empleados').then((res) => {
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
        const usuarioUbicacion = res.data?.filter((empleado: any) => {
            empleado.id_sucursal == route.params.company;
        });
        if(usuarioUbicacion == undefined || usuarioUbicacion.length === 0){
            tiempoUsuarios.value = 0;
            $q.notify({
                color: 'red',
                message: 'No hay empleados registrados en esta sucursal',
                position: 'top'
            })
            return;
        }
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
onMounted(() => {
    consultaSucursal();
    getEmpleados();
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