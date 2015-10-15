const React = require('react');

let {products,cartItems}  = require("../data");
let QuantityControl = require("./QuantityControl");

let Checkout = React.createClass({
    render(){
        let total = 0 ;
        for(var key in cartItems){
            total += cartItems[key].quantity * (products[key].price);
        }
        return (

            <div className="checkout">
                <hr className="checkout__divider"/>
                <input type="text" className="checkout__coupon-input" placeholder="coupon code" />
                <div className="checkout__amount">
                    <div className="checkout__amount-label">Subtotal</div>
                    <div className="checkout__amount-price">{'$' + total}</div>
                </div>
                <a className="checkout__button">
                    <img className="checkout__button__icon" src="img/cart-icon.svg"/>
                    <span className="checkout__button__label">Checkout</span>
                </a>
            </div>
        )
    }
});



module.exports = Checkout;