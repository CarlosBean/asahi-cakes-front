export interface Order {
    id: string;
    imageurl: string;
    name: string;
    desc: string;
    size: string;
    price: number;
    quantity?: number;
}