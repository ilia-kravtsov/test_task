import { configureStore } from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import cartReducer from "./cart.reducer.ts";
import goodsReducer from "./goods.reducer.ts";

// Define your state and reducers
const store = configureStore({
    reducer: {
        cart: cartReducer,
        goods: goodsReducer,
    },
});

// Define the RootState type
type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Create a typed useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Export the store and dispatch types
export {store};

