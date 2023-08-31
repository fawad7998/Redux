import { configureStore } from "@reduxjs/toolkit";
// slices
import userSlice from "./slices/userSlice";
const store = configureStore({
    reducer: {
        user: userSlice
    }
});
export default store;