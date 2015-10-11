let products = {
	"jameson-vulc" : {
		id: "jameson-vulc",
	    name: "Jameson Vulc",
	    price: 64.99,
	    imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
	    gender: "man",
	},
	"marana-x-hook-ups": {
    id: "marana-x-hook-ups",
    name: "Marana X Hook-Up",
    price: 79.99,
    imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
    gender: "man",
  },

  "jameson-e-lite": {
    id: "jameson-e-lite",
    name: "Jameson E-Lite",
    price: 69.99,
    imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
    gender: "man",
  },

  "jameson-e-lite-julian-davidson-4": {
    id: "jameson-e-lite-julian-davidson-4",
    name: "Jameson E-Lite Julian Davidson",
    price: 74.99,
    imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
    gender: "man",
  },

  "scout-womens-6": {
    id: "scout-womens-6",
    name: "Scout Women's",
    imagePath: "img/shoes/scout-womens-6-teal-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "scout-womens-coco-ho-5": {
    id: "scout-womens-coco-ho-5",
    name: "Scout Women's Coco Ho",
    imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "jameson-2-womens-8": {
    id: "jameson-2-womens-8",
    name: "Jameson 2 Women's",
    imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
    price: 59.99,
    gender: "woman",
  },

  "corby-womens-2": {
    id: "corby-womens-2",
    name: "Corby Women's",
    imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
    price: 44.99,
    gender: "woman",
  },
};

let cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1,
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2,
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        quantity: 2,
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        quantity: 1,
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        quantity: 1,
    },
};

let Product = React.createClass({
  render() {
  	let {name, price, imagePath} = this.props.product;

    return (

      <div className="product">
        	{this.renderDisplay(price, imagePath)}
        	{this.renderDesc(name)}
      </div>
    );
  },
  renderDisplay(price , imagePath){
  	let item = cartItems[this.props.product.id];
  	let opt = item ? <QuantityControl item={item} variant="gray" /> : (<a className = "product_add"><img className="product__add__icon" src="img/cart-icon.svg" /></a>);

  	return (
  		<div className="product__display">
            <img className="product__img" src={imagePath}/>
            {opt}
            <div className="product__price">{price}</div>
        </div>
  	);
  },
  renderDesc(name){
	    return(
	        <div className="product__description">
	            <div className="product__name">{name}</div>
	            <img className="product__heart" src="img/heart.svg" />
	        </div>
	    )
  },
});

let Products = React.createClass({
    render() {
    	let productArr = [];
    	for (var key in products) {
    		productArr.push( <Product key={key} product={products[key]}/>);
    	};

        return (
                <div className="products">
                    {productArr}
                </div>
            );
    }
});




let SiteTitle = React.createClass({
  render: function() {
    return (

      <div className="title">
        <h2>Buy Me Shoes</h2>
        <img className="title__heart" src="img/heart.svg" />
      </div>
    );
  }
});

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


let QuantityControl = React.createClass({
    render() {
        let quantity = this.props.item.quantity;
        return(
            <div className={"adjust-qty" + (this.props.variant === 'gray' ? " adjust-qty--gray" : "")}>
                <a className="adjust-qty__button">-</a>
                <div className="adjust-qty__number">{quantity}</div>
                <a className="adjust-qty__button">+</a>
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

let App = React.createClass({
  render(){
    return (

      <div className="site">
         {this.renderBackground()}
        <div className="site__main">
          <div className="site__left-sidebar">
           <SiteTitle />
          </div>
          <div className="site__content">
           <Products />
          </div>
        </div>
        <div className="site__right-sidebar">
	        <Cart />
	        <Checkout />
        </div>
        <a className="site__right-sidebar-toggle">
          <img src="img/arrow-icon.svg" />
        </a>
      </div>
    );
  },
  renderBackground(){
  	return(
  		<div className="bg">  	
            <div className="bg__img"></div>
        </div>
  	)
  },
});

window.onload = ()=> {
	React.render(<App />, document.querySelector('#root'));
}