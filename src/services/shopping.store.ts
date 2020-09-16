import { writable } from 'svelte/store';
const { subscribe, set, update } = writable(0);

function setInitial() {
    const quantity = localStorage.getItem('order') ? Number(localStorage.getItem('order')) : 0;
    set(quantity);
}

function setQuantity(value: number, isIncrement: boolean) {
    update(n => {
        n = isIncrement ? n + value : n - value;
        localStorage.setItem('order', String(n));
        return n;
    });
}

function reset() {
    localStorage.setItem('order', String(0));
    set(0);
}

function createCount() {
    setInitial();
    return {
        subscribe,
        increment: (value: number) => setQuantity(value, true),
        decrement: (value: number) => setQuantity(value, false),
        reset
    };
}

export const count = createCount();