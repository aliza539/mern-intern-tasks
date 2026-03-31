import { products } from "../../dummy-data"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}

        </div>
    )
}