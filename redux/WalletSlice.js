import { createSlice } from "@reduxjs/toolkit";
import _coins from '../data.json'

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    coins: [],
  },
  reducers: {
    addCoinList: (state, action) => {
      const { id, name, current_price } = action.payload;
      const index = state.coins.findIndex((coin) => coin.id === id);
      if (index !== -1) {
        state.coins[index].amount += 1;
      } else {
        state.coins.push({
          id,
          name,
          current_price,
          amount: 1,
        });
      }
    },
  },
});

export const { addCoinList } = walletSlice.actions;

export default walletSlice.reducer;