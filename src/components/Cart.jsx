import { createEffect, createSignal } from "solid-js";
import { cart, setCart } from "../state";
function Cart() {
  const [total, setTotal] = createSignal(0);
  createEffect(() => {
    if (cart().length === 0) {
      setTotal(0);
      return;
    }
    setTotal(
      cart()
        .reduce((acc, { price, qty }) => acc + price * qty, 0)
        .toFixed(2)
    );

    localStorage.setItem("cart", JSON.stringify(cart()));
  });

  const changeQty = (id, val) => {
    setCart(
      cart().map((item) => {
        if (item.id === id) {
          item.qty += val;
        }
        return item;
      })
    );
    setCart(
      cart().filter((item) => {
        return item.qty !== 0;
      })
    );
  };

  return (
    <div class="cart-container">
      <div>
        <h3>Cart</h3>
        <p>
          Subtotal: <span>${total()}</span>{" "}
        </p>
      </div>
      <div class="items-container">
        {cart().map((item) => (
          <div class="item">
            <img src={item.images[0]} alt={item.title} />
            <div className="item-details">
              <h4>{item.title.substring(0, 20) + " ......."}</h4>
              <div className="quantity">
                <button onClick={() => changeQty(item.id, -1)}>-</button>{" "}
                {item.qty}{" "}
                <button onClick={() => changeQty(item.id, 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
