import React from "react";
import { formatMoney } from "../helper";

export default function Header({money, total}) {
    return <div className="header">
        {/* When cart is empty. */}
        { total === 0 && (
            <span>
                {"Balance: "}
                <span className="money">
                    ${formatMoney(money)}
                </span>
                {" "}
                {"Total: "}
                <span className="money">
                    ${formatMoney(total)}
                </span>
            </span>
        )}


        {/* When cart has some items in it. */}
        { total > 0 && money - total !== 0 && (
            <span>
                {"Balance: "}
                <span className="money">
                    ${formatMoney(money - total)}
                </span>
                {" "}
                {"Total: "}
                <span className="money">
                    ${formatMoney(total)}
                </span>
            </span>
        )}

        {/* When cart total is all of your balance.  */}
        { money - total === 0 && (
            <span>
                {"Balance: "}
                <span className="money">
                    $0
                </span>
                {" "}
                {"Total: "}
                <span className="money">
                    ${formatMoney(total)}
                </span>
            </span>
        )}
    </div>
}