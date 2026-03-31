import { create } from 'zustand'
import type { Product } from '../types';

interface CartStore {
    products: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
}

const useCartStore = create<CartStore>((set) => ({
    products: [],
    addToCart: (product: Product) => {
        set((state) => {
            const exists = state.products.some(item => item.id === product.id)
            if (exists) {
                // If product exists, don't add duplicate
                return state
            } else {
                // Add new product to cart
                return { products: [...state.products, product] }
            }
        })
    },
    removeFromCart: (id: number) => {
        set((state) => {
            const products = state.products.filter((product) => product.id !== id)
            return { products }
        })
    }

}))

export default useCartStore