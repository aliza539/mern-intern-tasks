import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Interface zaroori hai errors khatam karne ke liye
interface WishlistState {
  items: number[];
  toggleWishlist: (productId: number) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set) => ({
      items: [],
      toggleWishlist: (productId: number) => 
        set((state: WishlistState) => {
          const isExist = state.items.includes(productId);
          return {
            items: isExist 
              ? state.items.filter((i) => i !== productId) 
              : [...state.items, productId]
          };
        }),
    }),
    { name: 'wishlist-storage' }
  )
);