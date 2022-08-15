import { createSignal } from "solid-js";
export const [products, setProducts] = createSignal([]);

export const [cart, setCart] = createSignal(
  await JSON.parse(localStorage.getItem("cart") || "[]")
);
