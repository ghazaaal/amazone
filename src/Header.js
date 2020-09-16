
import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import './Header.css'
import {useStateValue} from "./StateProvider";

function Header() {
    const [{basket}]=useStateValue();

    return (

        <nav className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt={"NavBarLogo"}/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchBox"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__Nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Qazi</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="header__BasketIcon"/>
                        <span className="header__optionLineTwo header__optionCount" >{basket?.length}</span>

                    </div>
                </Link>

            </div>




        </nav>


    );
}



export default Header;