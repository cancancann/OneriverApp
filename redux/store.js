import { configureStore } from "@reduxjs/toolkit";
import purchaseSlice from "./purchaseSlice";


export default configureStore({
  reducer: {
    purchase : purchaseSlice
  },
});