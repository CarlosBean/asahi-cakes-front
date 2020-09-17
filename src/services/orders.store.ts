import { writable } from 'svelte/store';
import type { Product } from '../models/product'
const { subscribe, set, update } = writable(<Product[]>[]);

function init() {
    const orderList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    set(orderList);
}

function setOrders(product: Product, isAdd: boolean) {
    update(products => {
        isAdd ? products.push(product) : products.filter(item => item.id !== product.id);
        localStorage.setItem('cart', JSON.stringify(products));
        return products;
    });
}

function reset() {
    localStorage.setItem('cart', JSON.stringify([]));
    set([]);
}

function createCount() {
    init();
    return {
        subscribe,
        add: (product: Product) => setOrders(product, true),
        remove: (product: Product) => setOrders(product, false),
        reset
    };
}

export const orders = createCount();