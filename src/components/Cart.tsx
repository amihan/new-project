import { useEffect, useState } from "react";
import { IItems } from "../App";
import './Cart.css'



const Cart = (props:IItems ) => {

    const {
        count,
        text
    } = props

    const [value, setValue] = useState<number>(count)



    useEffect(() => {
        const savedData = localStorage.getItem(text);
        if (savedData) {
            setValue(Number(savedData));
        }
    }, []);

    const handleChange = () => {
        // Обновляем состояние компонента и сохраняем данные в локальное хранилище
        setValue(prev => prev+1);
        localStorage.setItem(text, JSON.stringify(value+1));
    };

    return (
        <div className="cartItem">
            <p className="cartItem__title">{text}</p>
            <p className="cartItem__value">{value}</p>
            <button className="cartItem__btn" onClick={handleChange}>нравится</button>
        </div>
    );
};

export default Cart;