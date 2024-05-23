export interface CreateCita {
    fecha_hora: string;
    paciente_id: number;
    medico_id: {
        value: number;
        label: string;
    };
    tipo_cita: string;
    estado: string;
    id_sucursal: number;
}