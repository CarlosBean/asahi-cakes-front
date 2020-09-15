export interface Product {
    imageurl: string;
    name: string;
    desc: string;
    sizes: Size[];
}

export interface Size {
    name: string;
    value: number;
    stock: number;
}