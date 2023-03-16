import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  purchases: [],
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    addPurchase: (state, action) => {
      const index=state.purchases.findIndex(item => item.name===action.payload.name)
      if( index !== -1 ){
        state.purchases[index].amount+=1
        state.purchases=state.purchases
      }else{
        action.payload.amount = 1 
        state.purchases.push(action.payload)
      }
    },
  },
});

export const { addPurchase } = purchaseSlice.actions;
export default purchaseSlice.reducer;
