export interface Sucursal {
    id: number;
    nombre: string;
    direccion: string;
    telefono: string;
    imagen: string;
    id_cia: number | null | undefined;
    lunes_apertura: string | null | undefined;
    lunes_cierre: string | null | undefined;
    martes_apertura: string | null | undefined;
    martes_cierre: string | null | undefined;
    miercoles_apertura: string | null | undefined;
    miercoles_cierre: string | null | undefined;
    jueves_apertura: string | null | undefined;
    jueves_cierre: string | null | undefined;
    viernes_apertura: string | null | undefined;
    viernes_cierre: string | null | undefined;
    sabado_apertura: string | null | undefined;
    sabado_cierre: string | null | undefined;
    domingo_apertura: string | null | undefined;
    domingo_cierre: string | null | undefined;
    usuario_por_dia: number | null | undefined;
    tiempo_por_usuario: number | null | undefined;
}