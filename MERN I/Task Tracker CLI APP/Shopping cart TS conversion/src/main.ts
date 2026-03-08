import { Cart } from "./cart.js";
import { createProduct } from "./product.js";
import { createInventory, addProductToInventory } from "./inventory.js";
import { validateEntity } from "./validators.js";
import { Product } from "./types.js";


/* handler function */

function createOrder(cart: Cart) {

  return {
    success: true,
    items: cart.getItems()
  };

}

/* infer ReturnType */

type OrderResult = ReturnType<typeof createOrder>;


const inventory = createInventory();

const laptop: Product = createProduct(
  "1",
  "Laptop",
  1000,
  "electronics"
);

if (validateEntity(laptop)) {
  addProductToInventory(inventory, laptop);
}

const cart = new Cart();

cart.addItem(laptop, 2);

/* update using Partial + Pick */

cart.updateProduct("1", { price: 1200 });

const order: OrderResult = createOrder(cart);

console.log(JSON.stringify(order, null, 2));