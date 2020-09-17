<script>
  import { createEventDispatcher, onDestroy } from "svelte";
  import { count } from "../services/shopping.store";
  import { orders } from "../services/orders.store";

  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");
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
  }

  .shopping-modal h4,
  .shopping-modal p {
    margin: 0 0 1em 0;
  }

  .shopping-modal p {
    font-size: 14px;
  }

  .close-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.5em;
    cursor: pointer;
  }
</style>

<div class="shopping-modal">
  <span class="close-button" on:click={close}><img
      src="icons/times.svg"
      alt="times.svg"
      width="20" />
  </span>
  <h4>
    <img class="icon s2" src="./icons/factura.svg" alt="factura.svg" />
    <span>Mi pedido</span>
  </h4>
  <!--  <p>Nombre: Carlos Benavides</p>
  <p>Dirección: Carrera 28 # 5 -13</p>
  <p>Barrio: Las Orquideas</p>
  <p>2 tortas de durazno pequeñas - $ 20.000</p>
  <p>1 torta de Chocolate mediana - $ 24.000</p>
  <p>Total pedido $44.000</p>
  <p>Voy a pagar con: $50.000</p> -->
  {#if $orders}
    {#each $orders as order}
      <p>{order.name}</p>
    {/each}
  {/if}
  <button class="primary">
    <img class="icon" src="./icons/whatsapp.svg" alt="whatsapp.svg" />
    <span>Enviar</span>
  </button>
  <button on:click={count.reset} on:click={orders.reset}>Vaciar</button>
</div>
