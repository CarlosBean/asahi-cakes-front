<script lang="ts">
  import type { Product, Size } from "../models/product";

  import CustomSelect from "../components/CustomSelect.svelte";
  export let product: Product;

  const currency = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });

  let selectedSize: Size;
  let selectedQuantity: number;

  function formatCurrency(value: number): string {
    return currency.format(value);
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
      <h5>{formatCurrency(selectedSize.value * selectedQuantity)}</h5>
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

    <button class="primary">Agregar</button>
    <!-- <button>Vaciar</button> -->
  </div>
</div>
