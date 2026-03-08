const { Cart } = await import("./cart.js");
const { fetchProductsFromDB } = await import("./db.js");
const {
  sortByPrice,
  groupByCategory,
  getUniqueCategories
} = await import("./utils.js");

const cart = new Cart();

const products = await fetchProductsFromDB();

products.forEach((product) => {
  cart.addItem(product, 2);
});

cart.applyDiscount(10);

const clonedCart = cart.clone();
const sortedItems = sortByPrice(cart.getItems());
const groupedItems = groupByCategory(cart.getItems());
const uniqueCategories = getUniqueCategories(cart.getItems());

const summary = `
{
  "total": ${cart.getTotal()},
  "itemsCount": ${cart.getItems().length},
  "uniqueCategories": ${JSON.stringify([...uniqueCategories])},
  "items": ${JSON.stringify(clonedCart, null, 2)}
}
`;

console.log(summary);