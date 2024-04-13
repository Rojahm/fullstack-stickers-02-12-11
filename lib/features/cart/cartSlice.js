import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartPrice: 0,
  cartQty: 0,
  showCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.product._id === action.payload._id
      );
      if (action.payload.quantity > 0) {
        if (item) {
          state.cartItems.map((item) => {
            if (item.product._id === action.payload._id) {
              if (item.availability > 0) {
                item.qty++;
                item.price += action.payload.price;
                item.availability--;
                state.cartQty++;
                state.cartPrice += action.payload.price;
              }
            }
          });
        } else {
          const item = {
            product: action.payload,
            qty: 1,
            price: action.payload.price,
            availability: action.payload.quantity,
          };
          item.availability--;
          state.cartItems.push(item);
          state.cartQty++;
          state.cartPrice += action.payload.price;
        }
      }
    },
    removeFromCart: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.product._id === action.payload._id
      );
      if (item) {
        item.qty--;
        item.price -= action.payload.price;
        item.availability++;
        state.cartQty--;
        state.cartPrice -= action.payload.price;
        if (item.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.product._id !== action.payload._id
          );
        }
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.product._id === action.payload._id) {
          state.cartQty -= cartItem.qty;
          state.cartPrice -= cartItem.price;
          state.cartItems = state.cartItems.filter(
            (item) => item.product._id !== action.payload._id
          );
        }
      });
    },
    showCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const selectCount = (state) => {
  state.cart.cartItems;
  state.cart.cartPrice;
  state.cart.cartQty;
  state.cart.showCart;
};

const cartItems = (state) => state.cartItems;

export const productQtyInCartSelector = createSelector(
  [cartItems, (_cartItems, productId) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product._id === productId)?.qty
);

// export const totalCartItemsSelector = createSelector([cartItems], (cartItems) =>
//   cartItems.reduce((total, curr) => (total += curr.qty), 0)
// );
// export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
//   cartItems.reduce((total, curr) => (total += curr.qty * curr.product.price), 0)
// );

export const { addToCart, removeFromCart, showCart, deleteFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
