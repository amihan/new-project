import {  useState } from "react";
import './Cart.css'
import { IData } from "../App";



const Cart = (props: IData ) => {

    const {count, text, id} = props

    const [data, setData] = useState({count, text, id})

    const handleChange = () => {
        fetch(`https://6560440183aba11d99d07f11.mockapi.io/new/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: data.id,
                count: data.count+1,
                text: data.text
              }),
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
                console.log(data)
                setData(data)
            })
            .catch(error => {
              console.error('Ошибка при выполнении запроса:', error);
            });
    }


    return (
        <div className="cartItem">
            <p className="cartItem__title">{data.text}</p>
            <p className="cartItem__value">{data.count}</p>
            <button className="cartItem__btn" onClick={handleChange}>нравится</button>
        </div>
    );
};

export default Cart;