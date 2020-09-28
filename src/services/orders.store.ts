import { writable } from 'svelte/store';
import type { Order } from '../models/order'
const { subscribe, set, update } = writable(<Order[]>[]);

function init() {
    const orderList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    set(orderList);
}

function add(order: Order) {
    update(orders => {
        let index = orders.findIndex(item => item.id === order.id && item.size === order.size);

        if (index >= 0) {
            orders[index].quantity = orders[index].quantity + order.quantity;
            orders[index].price = orders[index].quantity * order.price;
        } else {
            order.price = order.price * order.quantity;
            orders.push(order);
        }

        localStorage.setItem('cart', JSON.stringify(orders));
        return orders;
    });
}

function remove(order: Order) {
    update(orders => {
        let filtered = orders.filter(item => item.id !== order.id && item.size !== order.size);
        localStorage.setItem('cart', JSON.stringify(orders));
        return filtered;
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
        add,
        remove,
        reset
    };
}

export const orders = createCount();