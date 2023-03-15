import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  purchases: [],
  totalValue: 0,
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    addPurchase: (state, action) => {
      state.purchases.push(action.payload);
      state.totalValue += action.payload.value;
    },
  },
});

export const { addPurchase } = purchaseSlice.actions;
export default purchaseSlice.reducer;
