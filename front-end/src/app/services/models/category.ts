import { Product } from "./product";

export interface Category {
    id: number;
    name: string;
    products: Product[];
    created_at: Date;
    updated_at: Date;
}