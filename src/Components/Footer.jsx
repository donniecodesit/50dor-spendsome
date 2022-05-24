import React from "react";
import { formatMoney } from "../helper";

export default function Footer({ setBasket, basket, total}) {
    const resetCart = () => {
        setBasket([]);
    }

    return (
        <div className="footer">
            <div className="footer-header">Your Cart</div>
            <div className="footer-container">
                {
                    basket.map((item) => (
                        <div className="footer-basket-item" key={item.id}>
                            <span>{item.title}</span>
                            <span>{item.amount}</span>
                        </div>
                    ))
                }
            </div>
            <div className="button-container">
                <span>Total: ${formatMoney(total)}</span>
                <button className="btn btn-reset" onClick={resetCart}>Reset</button>
            </div>
        </div>
    )
}