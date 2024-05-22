export interface GenericServicesResponse<T> {
    status: number;
    data?: T[] | null | undefined;
    dataOnly?: T | null | undefined;
}