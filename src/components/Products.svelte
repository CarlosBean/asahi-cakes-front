<script lang="ts">
  import Product from "./Product.svelte";
  let products = [
    {
      imageurl: "./images/durazno_pastel.jpg",
      name: "durazno",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cum alias consequatur sapiente eveniet officia excepturi iste quas, hic magnam?",
      sizes: [
        { name: "pequeña", value: 10000, stock: 3 },
        { name: "mediana", value: 18000, stock: 4 },
        { name: "grande", value: 34000, stock: 5 },
      ],
    },
    {
      imageurl: "./images/frutos_pastel.jpg",
      name: "frutos",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cum alias consequatur sapiente eveniet officia excepturi iste quas, hic magnam?",
      sizes: [
        { name: "pequeña", value: 12000, stock: 4 },
        { name: "mediana", value: 22000, stock: 2 },
        { name: "grande", value: 38000, stock: 5 },
      ],
    },
    {
      imageurl: "./images/oreo_pastel.jpg",
      name: "chocolate",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cum alias consequatur sapiente eveniet officia excepturi iste quas, hic magnam?",
      sizes: [
        { name: "pequeña", value: 12000, stock: 1 },
        { name: "mediana", value: 24000, stock: 8 },
        { name: "grande", value: 36000, stock: 2 },
      ],
    },
    {
      imageurl: "./images/fresa_pastel.jpg",
      name: "fresa",
      desc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cum alias consequatur sapiente eveniet officia excepturi iste quas, hic magnam?",
      sizes: [
        { name: "pequeña", value: 9000, stock: 4 },
        { name: "mediana", value: 17000, stock: 3 },
        { name: "grande", value: 32000, stock: 1 },
      ],
    },
  ];
</script>

<style>
  .products {
    margin: 0 40px;
  }

  .products-title {
    margin: 0 0 2em 0;
  }

  .products-container {
    display: grid;
    column-gap: 30px;
    row-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(400px, auto));
    grid-template-rows: auto;
  }
</style>

<section class="products">
  <h2 class="products-title uppercase">Nuestros Pasteles</h2>
  <div class="products-container">
    {#each products as product}
      <Product {product} />
    {/each}
  </div>
</section>
