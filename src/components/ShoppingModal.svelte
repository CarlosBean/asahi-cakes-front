<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte";
  import { count } from "../services/shopping.store";
  import { orders } from "../services/orders.store";
  import { currency } from "../utils/currency";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let totalPrice: number;

  const unsubscribe = orders.subscribe((orders) => {
    totalPrice = orders.reduce((sum, order) => sum + order.price, 0);
  });

  onDestroy(unsubscribe);
</script>

<style>
  .shopping-modal {
    border-top-left-radius: 8px;
    box-shadow: -3px -3px 4px rgb(0, 0, 0, 0.2);
    width: 280px;
    min-height: 320px;
    padding: 1.5em;
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .shopping-modal h4,
  .shopping-modal p {
    margin: 0 0 1em 0;
  }

  .shopping-modal p {
    font-size: 14px;
  }

  .order-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .order-item p {
    margin-bottom: 0;
  }

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.5em;
  }
</style>

<div class="shopping-modal">
  <span class="close-button">
    <img
      class="pointer"
      on:click={close}
      src="icons/times.svg"
      alt="times.svg"
      width="20" />
  </span>
  <div>
    <h4 style="margin-bottom: 2em">
      <img class="icon s2" src="./icons/factura.svg" alt="factura.svg" />
      <span>Mi pedido</span>
    </h4>
    {#if $orders}
      {#each $orders as order}
        <div class="order-item">
          <p>
            {order.quantity} x {order.name}
            {order.size}
            <span class="bold">{currency.format(order.price)}</span>
          </p>
          <img
            on:click={() => count.decrement(order.quantity)}
            on:click={() => orders.remove(order)}
            class="icon m-0 pointer"
            src="./icons/trash.svg"
            alt="trash.svg" />
        </div>
        <hr />
      {/each}
      <p>
        Total pedido <span class="bold">{currency.format(totalPrice)}</span>
      </p>
    {/if}
  </div>
  <div>
    <button class="primary">
      <img class="icon" src="./icons/whatsapp.svg" alt="whatsapp.svg" />
      <span>Enviar</span>
    </button>
    <button on:click={count.reset} on:click={orders.reset}>Vaciar</button>
  </div>
</div>
