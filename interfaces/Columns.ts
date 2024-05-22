export interface Column {
    name: string;
    required: boolean;
    label: string;
    align: string;
    field: any | null | undefined;
    format: any | null | undefined;
    sortable: boolean;
}