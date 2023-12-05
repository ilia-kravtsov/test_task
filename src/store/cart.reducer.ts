import { createSlice } from '@reduxjs/toolkit';
import {GoodsState} from "store/goods.reducer.ts";

const initialState: GoodsState = []

const cartReducer = createSlice({
    name: 'goods',
    initialState,
    reducers: {

    },
});

// Export the actions and reducer
// export const { increment } = cartReducer.actions;
export default cartReducer.reducer;