import type { Size } from "./product";

export interface Order {
    id: string;
    imageurl: string;
    name: string;
    desc: string;
    size: Size;
    quantity: number;
}