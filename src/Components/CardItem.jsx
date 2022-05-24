import React from "react";
import { formatMoney } from "../helper";

export default function CardItem({product, basket, setBasket, total, money}) {
    const basketItem = basket.find((item) => item.id === product.id);
    const addItem = () => {
        const checkBasket = basket.find((item) => item.id === product.id);
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([
                ...basket.filter((item) => item.id !== product.id),
                checkBasket
            ])
        } else {
            setBasket([
                ...basket, {
                    id: product.id,
                    amount: 1,
                    title: product.title,
                    price: product.price
                }
            ])
        }
    };

    const removeItem = () => {
        const currentBasket = basket.find((item) => item.id === product.id);
        const basketWithoutCurrent = basket.filter((item) => item.id !== product.id);
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0) setBasket([ ...basketWithoutCurrent ]);
        else setBasket([ ...basketWithoutCurrent, currentBasket ]);
    };

    return (
        <div className="card-item">
            <img src={product.image} alt={`${product.title}`}/>
            <div className="card-text">
                <h3>{product.title}</h3>
                <h3>${formatMoney(product.price)}</h3>
            </div>
            <div className="actions">
                <button className="btn btn-sell" onClick={removeItem} disabled={!basketItem}>Remove</button>
                <span>{basketItem ? basketItem.amount : 0}</span>
                <button className="btn btn-buy" onClick={addItem} disabled={total + product.price > money}>Add</button>
            </div>
        </div>
    )
}