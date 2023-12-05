import s from './App.module.scss'
import {Button} from "@mui/material";
import {Goods} from "../Goods/Goods.tsx";
import {Route, Routes} from "react-router-dom";
import {Cart} from "../Cart/Cart.tsx";
import {Error} from "../Error/Error.tsx";
import { useNavigate } from 'react-router-dom';
import {useState} from "react";

function App() {
  let [cartToggle, setCartToggle] = useState<boolean>(true)
  const navigate = useNavigate();
  const onCartClick = () => {
      if (cartToggle) {
          navigate('/cart');
          setCartToggle(!cartToggle)
      } else {
          navigate('/goods');
          setCartToggle(!cartToggle)
      }

  }

  return (
    <div className={s.container}>
        <header className={s.header}>
            {cartToggle
                ? <Button variant={'contained'}
                                  onClick={onCartClick}
                                  sx={{mr: '2vw'}}
                                  className={s.cartButton}>
                    Cart
                </Button>
                : <Button variant={'contained'}
                          onClick={onCartClick}
                          sx={{mr: '2vw'}}
                          className={s.cartButton}>
                    Goods
                </Button>
            }

        </header>
        <main className={s.mainContainer}>
            <Routes>
                <Route path={"/"} element={<Goods />} />
                <Route path={"/goods"} element={<Goods />} />
                <Route path={"/cart"} element={<Cart />} />
                <Route path={"*"} element={<Error />} />
            </Routes>
        </main>
    </div>
  )
}

export default App
