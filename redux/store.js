import { configureStore } from "@reduxjs/toolkit";
import walletReducer from './WalletSlice'

export default configureStore({
  reducer: {
    wallet: walletReducer,
  },
});