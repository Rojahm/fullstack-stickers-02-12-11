import { create } from "zustand";

const useCart = create((set) => ({
  count: 0,
  addToCart: () => set((state) => ({ count: state.count + 1 })),
  // addToCart: (qty) =>
  //   set((state) => {
  //     count: {
  //       state.count < qty ? state.count + 1 : state.count;
  //     }
  //   }),
  // decreaseCart: () =>
  //   set((state) => {
  //     if (state.count > 0) {
  //       count: state.count - 1;
  //     }
  //   }),
  // updateCart: (num, qty) =>
  //   set((state) => {
  //     if (state.count + num < qty) {
  //       count: state.count + num;
  //     } else if (state.count + num >= qty) {
  //       count: qty;
  //     }
  //   }),
  // removeFromCart: () => set({ count: 0 }),
}));

export default useCart;
