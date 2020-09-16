import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";



function CheckoutProduct({id, title, image, price, rating}) {

    const [{}, dispatch]=useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',

            id: id,




        })
    };


    return (
        <div className={"checkout__product"}>
            <img className={"checkoutProduct__img"} src={image}/>
            <div className={"checkoutProduct__info"}>
                <p className={"checkoutProduct__title"}>{title}</p>
                <p className={"checkoutProduct__price"}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={"checkoutProduct__rating"}>
                    {Array(rating)
                        .fill()
                        .map((_)=>(
                                <img className="image__rating" src="data:image/png;base64,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"/>
                            )
                        )
                    }
                </div>
                <button onClick={removeFromBasket} className={"checkoutProduct__button"}>Remove From Basket</button>

            </div>

        </div>




    );
}



export default CheckoutProduct;
