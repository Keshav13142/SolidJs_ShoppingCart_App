import { onMount } from "solid-js";
import { products, setProducts } from "../state";
import SingleProduct from "./SingleProduct";

function Product() {
  onMount(() => {
    fetchProducts();
  });

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const { products: data } = await response.json();
    setProducts(data);
  };
  return (
    <div class="products-container">
      <For each={products()}>
        {(prod) => {
          return <SingleProduct product={prod} />;
        }}
      </For>
    </div>
  );
}

export default Product;
