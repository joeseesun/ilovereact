const React = require('react');
const Ps = require("perfect-scrollbar");
let {products,cartItems}  = require("../data");
let QuantityControl = require("./QuantityControl");

let CartItem = React.createClass({
    render(){
        let {cartItem} = this.props;
        let quantity = cartItem.quantity;
        let product = products[cartItem.id];
        return (
            <div className="cart-item">
                <div className="cart-item__top-part">
                    <div className="cart-item__image">
                        <img  src={product.imagePath}/>
                    </div>
                    <div className="cart-item__top-part__middle">
                        <div className="cart-item__title">{product.name}</div>
                        <div className="cart-item__price">{quantity === 1? "$" + product.price : "$" + product.price + "*" + quantity}</div>
                    </div>
                    <img className="cart-item__trash" src="img/trash-icon.svg"/>
                </div>
                <div className="cart-item__qty">
                  	 <QuantityControl item={cartItem} />
                </div>
            </div>
        )
    }
});




let Cart = React.createClass({

	componentDidMount(){
        let $overflow = React.findDOMNode(this.refs.overflow);
        Ps.initialize($overflow);
    },

    render(){
        let cartItemsArr = [];
        for(var key in cartItems){
            cartItemsArr.push(<CartItem key={key} cartItem={cartItems[key]}/>)
        }
        return (
            <div className="cart" ref="overflow">
                <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content">
                    {cartItemsArr}
                </div>
            </div>
        )
    }
});

module.exports = Cart;