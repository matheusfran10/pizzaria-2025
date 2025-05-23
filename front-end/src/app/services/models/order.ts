export interface Order {
    id: number;
    tableId: number;
    userId: number;
    status: number;
    draft: boolean;
    isActive?: boolean;
    name: string;
    created_at: Date;
    updated_at: Date;
}