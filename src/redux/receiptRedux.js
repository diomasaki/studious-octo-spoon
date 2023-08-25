import { createSlice } from "@reduxjs/toolkit";

export const receiptSlice = createSlice({
    name: "receipt",
    initialState: {
        receipt: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //UPDATE
        addReceiptStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addReceiptSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
        },
        addReceiptFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    addReceiptStart,
    addReceiptSuccess,
    addReceiptFailure,
} = receiptSlice.actions;

export default receiptSlice.reducer;