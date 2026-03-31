import { Product } from "../../types"
import { Button } from "../ui/button"
import useCartStore from "../../stores/useCartStore"




export const ProductCard = ({ product }: { product: Product }) => {

    const { addToCart } = useCartStore();

    const handleAddToCart = () => {
        addToCart(product);
    }

    return (
        <div className="border border-gray-200 rounded-lg p-4 max-w-50">
            <img className="w-full h-48 object-cover rounded-lg" src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p className="text-lg font-bold "><span className="line-through">${product.price + 100}</span> <span className="text-red-500">${product.price}</span></p>
            <Button onClick={handleAddToCart} className="w-full cursor-pointer">Add to Cart</Button>
        </div>
    )
}