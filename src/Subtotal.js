import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getTotalBasket} from "./reducer";

function Subtotal() {
    const [{basket}]=useStateValue();
    return (
        <div className={"subtotal"}>
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket?.length} items) : <strong> {value} </strong>
                        </p>
                        <small className={"subtotal__gift"}>
                            <input type={"checkbox"}/> this order contains gifts.
                        </small >
                    </>



                )

                }
                decimalScale={2}
                value={getTotalBasket(basket)}
                displayType={"text"}
                thousandSeparator={"True"}
                prefix={"$"}

            />
            <button> proceed to checkout</button>

        </div>


    );
}



export default Subtotal;
