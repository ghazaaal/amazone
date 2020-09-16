import React from 'react';
import './Checkout.css';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}]=useStateValue();


    // noinspection JSAnnotator
    return (
        <div className={"checkout"}>
            <div className={"left__side"}>
                <img className={"checkout__ad"} src={"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"}/>
                {basket?.length === 0 ? (
                    <div>
                        <h2> your shopping basket is empty </h2>
                        <p> you have no items in your basket.enter add to basket button to shop.</p>


                    </div>

                ):(
                    <div>
                        <h2 className={"checkout__title"}> your shopping basket </h2>
                        {basket.map((item) =>
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image ={item.image}
                                price = {item.price}
                                rating = {item.rating}



                            />
                        )}

                    </div>
                    )
                }
            </div>
            {basket?.length > 0 && (
                <div className={"right__side"}>
                    <Subtotal/>

                </div>
            )
            }



        </div>



    );
}



export default Checkout;
