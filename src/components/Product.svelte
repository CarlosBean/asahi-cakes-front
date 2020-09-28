<script lang="ts">
  import type { Product, Size } from "../models/product";
  import type { Order } from "../models/order";

  import CustomSelect from "../components/CustomSelect.svelte";
  import { count } from "../services/shopping.store";
  import { orders } from "../services/orders.store";

  export let product: Product;

  const currency = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });

  let selectedSize: Size;
  let selectedQuantity: number;

  function buildOrder(product: Product, size: Size, quantity: number): Order {
    let order: Order = {
      id: product.id,
      imageurl: product.imageurl,
      name: product.name,
      desc: product.desc,
      size: size.name,
      price: size.value,
      quantity,
    };

    return order;
  }
</script>

<style>
  .thumbnail {
    background-color: white;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-template-rows: auto;
  }

  .thumbnail img {
    border-radius: 8px;
    width: 100%;
    max-height: 200px;
    max-width: 200px;
    min-width: 150px;
    justify-self: center;
  }

  .thumbnail-info {
    padding-left: 1.5em;
  }

  .thumbnail-info > * {
    margin: 0 0 1em 0;
  }

  .thumbnail-info p {
    font-size: 14px;
    color: lightslategray;
  }
</style>

<div class="thumbnail">
  <img src={product.imageurl} alt={product.imageurl} />
  <div class="thumbnail-info">
    <h4 class="capitalize">Torta de {product.name}</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

    {#if selectedSize}
      <h5>{currency.format(selectedSize.value * selectedQuantity)}</h5>
    {/if}

    <CustomSelect
      label="Tamaño"
      options={product.sizes}
      bind:selected={selectedSize} />

    {#if selectedSize}
      <CustomSelect
        label="Cantidad"
        options={Array(selectedSize.stock)}
        bind:selected={selectedQuantity} />
    {/if}

    <button
      class="primary"
      on:click={() => count.increment(selectedQuantity)}
      on:click={() => orders.add(buildOrder(product, selectedSize, selectedQuantity))}>Agregar</button>
  </div>
</div>
