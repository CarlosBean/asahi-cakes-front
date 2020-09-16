<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Products from "./components/Products.svelte";
  import Footer from "./components/Footer.svelte";
  import ShoppingModal from "./components/ShoppingModal.svelte";
  export let name: string;

  let showModal = false;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .fab-modal {
    position: fixed;
    right: 0;
    padding-right: 10px;
    text-align: left;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.4);
    bottom: 320px;
  }
</style>

<Navbar />
<main>
  <h1>Hello {name}!</h1>
  <p>Nuestros pasteles únicos a tu alcance</p>
</main>
<button class="fab-modal" on:click={() => (showModal = true)}>
  <img src="./icons/shopping-cart.svg" alt="shopping-cart.svg" width="25" />
</button>
<Products />
<Footer />

{#if showModal}
  <ShoppingModal on:close={() => (showModal = false)} />
{/if}
