import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    updateDlvrStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateDlvrSuccess: (state, action) => {
      state.isFetching = false;
      const orderIndex = state.orders.findIndex(
        (order) => order._id === action.payload
      );
      state.orders[orderIndex].statusT = action.payload.wkkx;
    },
    updateDlvrFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getOrderFailure,
  getOrderStart,
  getOrderSuccess,
  updateDlvrStart,
  updateDlvrSuccess,
  updateDlvrFailure
} = orderSlice.actions;

export default orderSlice.reducer;
