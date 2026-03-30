import ProductList from "@/Components/productlist";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
  );
}