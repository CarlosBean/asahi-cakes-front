<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Products from "./components/Products.svelte";
  import Footer from "./components/Footer.svelte";
  export let name: string;
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
</style>

<Navbar />
<main>
  <h1>Hello {name}!</h1>
  <p>Nuestros pasteles únicos a tu alcance</p>
</main>
<Products />
<Footer />
