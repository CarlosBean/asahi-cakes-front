export interface Product {
    imageurl: string;
    name: string;
    desc: string;
    sizes: Size[];
    stock: number;
}

export interface Size {
    name: string;
    value: number;
}