import s from './Goods.module.scss'
import {Button} from "@mui/material";
import {useAppSelector} from "../../store/store.ts";
import {GoodsState} from "../../store/goods.reducer.ts";

type Props = {}

export const Goods = ({}: Props) => {

    const goods = useAppSelector<GoodsState>(state => state.goods)

    return (
        <div className={s.goodsContainer}>
            <h1 className={s.pageTitle}>Welcome to the grocery store!</h1>
            <ul className={s.goodsList}>
                {
                    goods.map(cartGood => {
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
        </div>
    );
};

