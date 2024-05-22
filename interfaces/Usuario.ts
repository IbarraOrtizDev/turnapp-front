export interface Usuario{
    id: number;
    id_tipo_empleado: number;
    especialidad: string;
    cargo: string;
    activo: boolean;
    id_usuario: {
        id: number;
        username: string;
        email: string;
        password: string;
        first_name: string;
        last_name: string;
    };
    id_sucursal: number;
}