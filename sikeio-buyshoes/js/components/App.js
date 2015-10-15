const React = require('react');

let SiteTitle = require("./SiteTitle");
let Products = require("./Products");
let Cart = require("./Cart");
let Checkout = require("./Checkout");


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



module.exports = App;