import { createEffect, createSignal } from "solid-js";
import { cart, setCart } from "../state";
export default function SingleProduct({ product }) {
  createEffect(() => {
    setInCart(cart().some((item) => item.id === product.id));
  });

  const addToCart = () => {
    setCart([...cart(), { ...product, qty: 1 }]);
  };

  const removeFromCart = () => {
    setCart(cart().filter((item) => item.id !== product.id));
    localStorage.setItem("cart", JSON.stringify(cart()));
  };

  const [inCart, setInCart] = createSignal(false);
  return (
    <div class="product">
      <p>{product.title}</p>
      <img src={product.images[0]} alt={product.title} />
      <div class="product-details">
        <h5>Price: ${product.price}</h5>
        {!inCart() ? (
          <button class="add" onClick={addToCart}>
            Add to Cart
          </button>
        ) : (
          <button onClick={removeFromCart} class="remove">
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}
