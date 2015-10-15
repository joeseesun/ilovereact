const React = require('react');
let {products,cartItems}  = require("../data");
let QuantityControl = require("./QuantityControl");

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

module.exports = Products;