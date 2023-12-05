import style from './Cart.module.scss'
import s from '../Goods/Goods.module.scss'
import {useAppSelector} from "../../store/store.ts";
import {GoodsState} from "../../store/goods.reducer.ts";
import {Button} from "@mui/material";

type Props = {}

export const Cart = ({}: Props) => {

    const cartGoods = useAppSelector<GoodsState>(state => state.cart)

    return (
        <ul className={style.cartContainer}>
            {
                cartGoods.map(cartGood => {
                    return <li key={cartGood.id} className={s.goodItem}>
                        <figure className={s.figure}>
                            <img
                                src={cartGood.link}
                                alt="milk" className={s.goodPhoto}/>
                            <figcaption className={s.figcaption}>
                                {cartGood.title}
                            </figcaption>
                        </figure>
                        <p className={s.description}>
                            {cartGood.description}
                        </p>
                        <p className={s.price}>
                            {cartGood.price}
                        </p>
                        <Button variant={'contained'}>Buy & Add</Button>
                    </li>
                })
            }
        </ul>
    );
};

