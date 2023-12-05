import { createSlice } from '@reduxjs/toolkit';
import {v4} from 'uuid';

type Goods = {
    id: string
    description: string
    price: number
    title: string
    link: string
}

export type GoodsState = Goods[]

const initialState: GoodsState = [
    {id: v4(), title: 'milk' ,description: 'some description', price: 10, link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkQREVSVMjw5Sr20lts3smQFA9WNljBHZ-Q&usqp=CAU'},
    {id: v4(), title: 'coffee' ,description: 'some description', price: 10, link: 'https://c8n.tradeling.com/img/plain/pim/rs:auto:600::0/f:webp/up/608e6cbb3c6a50001cc5b504/1e1757a8c3260a128a78da706c53db80.jpg'},
    {id: v4(), title: 'juice' ,description: 'some description', price: 10, link: 'https://getyourglow.me/cdn/shop/products/image_ce6146c9-8a2c-4168-8a77-05fa5e16a9bf_1000x1000.jpg?v=1642512310'},
    {id: v4(), title: 'whiskey' ,description: 'some description', price: 10, link: 'https://www.winesnspirits.sg/cdn/shop/products/JackDaniel_sWhisky_grande.jpg?v=1654060497'},
    {id: v4(), title: 'cola' ,description: 'some description', price: 10, link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DPGcf_dUo_K4v07uuOYOO-KCfx6ale8yzg&usqp=CAU'},
    {id: v4(), title: 'wine' ,description: 'some description', price: 10, link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2YuCLFqbUUsj6D_bnNaFEnxzuJX9XUV2mkHkCL4xUxTWH3R0E3hTGJPNUqc1pUSeh6kY&usqp=CAU'},
    {id: v4(), title: 'champagne' ,description: 'some description', price: 10, link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxkLZwRJbxYW-HV39SBfSzuIL1IENaw615j7rjNE97cBo6ZcD5uaKT0c7VIPpJTiEqxc&usqp=CAU'},
    {id: v4(), title: 'rome' ,description: 'some description', price: 10, link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVi8Ptay0RuarfZnOSPwE9ZoP6q8RTHmRu4VRI3cJKWuU2PsMx5gAE9Fs8BnnfkG6BLk&usqp=CAU'},
    {id: v4(), title: 'scotch' ,description: 'some description', price: 10, link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaqi3-REakrLuZv-Q5xdh6CgyJOcg0oA7kXo7nI6XSES9VMVitL67EhDDBvy9-ptaQmQ&usqp=CAU'},
]

const goodsReducer = createSlice({
    name: 'goods',
    initialState,
    reducers: {

    },
});

// Export the actions and reducer
// export const { increment } = cartReducer.actions;
export default goodsReducer.reducer;