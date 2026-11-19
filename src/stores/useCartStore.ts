import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "../types";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  changeAmount: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      // มีสินค้าอยู่แล้ว -> amount + 1 / ยังไม่มี -> เพิ่มใหม่ amount: 1
      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, amount: item.amount + 1 } : item
              ),
            };
          }
          return { cart: [...state.cart, { ...product, amount: 1 }] };
        }),

      // เปลี่ยนจำนวนตาม id (ต้องไม่ต่ำกว่า 1)
      changeAmount: (id, amount) =>
        set((state) => {
          const safeAmount = Math.max(1, Math.floor(amount));
          return {
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, amount: safeAmount } : item
            ),
          };
        }),

      // ลบสินค้าตาม id ด้วย filter()
      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

      // ล้างตะกร้าทั้งหมด
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart-storage" } // ชื่อ key ใน localStorage
  )
);
