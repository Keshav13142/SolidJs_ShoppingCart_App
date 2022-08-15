<h1>Simple Shopping Cart App!</h1>

`Funcionalities`

- Fetches dummy product data from https://dummyjson.com/products
- Can add and remove products from Cart.
- Can change quantity of the item in the cart.
- Updates the SubTotal of the cart in real time

---

<h2>Trying out SolidJS for the first time!!</h2>

_\*Notes for future reference_

- `createSignal()` -> Similar to `useState()` in React.
- `createEffect()` -> Similar to `useEffect()` in React but with no dependency Array (WOWW 😮)
- Was surprisingly easy to work with since I've been working with React for sometime
- Uses `vite` -> which is also very fast .
- `class` instead of `className`
- Instead of using `map` to loop through data SolidJs had a `For` component

---

Each component is only executed once and only the reactive elements inside it are updated and re-renderd (Unlike React that uses Virtual DOM to Re-render the whole component after a change in state is detected)
