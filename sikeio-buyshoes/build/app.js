"use strict";

var products = {
    "jameson-vulc": {
        id: "jameson-vulc",
        name: "Jameson Vulc",
        price: 64.99,
        imagePath: "img/shoes/jameson-vulc-brown-gum-orig.png",
        gender: "man"
    },
    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        name: "Marana X Hook-Up",
        price: 79.99,
        imagePath: "img/shoes/marana-x-hook-ups-black-orig.png",
        gender: "man"
    },

    "jameson-e-lite": {
        id: "jameson-e-lite",
        name: "Jameson E-Lite",
        price: 69.99,
        imagePath: "img/shoes/jameson-e-lite-maroon-orig.png",
        gender: "man"
    },

    "jameson-e-lite-julian-davidson-4": {
        id: "jameson-e-lite-julian-davidson-4",
        name: "Jameson E-Lite Julian Davidson",
        price: 74.99,
        imagePath: "img/shoes/jameson-e-lite-julian-davidson-4-black-gum-orig.png",
        gender: "man"
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        name: "Scout Women's",
        imagePath: "img/shoes/scout-womens-6-teal-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        name: "Scout Women's Coco Ho",
        imagePath: "img/shoes/scout-womens-coco-ho-5-olive-white-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        name: "Jameson 2 Women's",
        imagePath: "img/shoes/jameson-2-womens-8-black-white-gum-orig.png",
        price: 59.99,
        gender: "woman"
    },

    "corby-womens-2": {
        id: "corby-womens-2",
        name: "Corby Women's",
        imagePath: "img/shoes/corby-womens-2-tan-white-orig.png",
        price: 44.99,
        gender: "woman"
    }
};

var cartItems = {
    "jameson-vulc": {
        id: "jameson-vulc",
        quantity: 1
    },

    "marana-x-hook-ups": {
        id: "marana-x-hook-ups",
        quantity: 2
    },

    "scout-womens-6": {
        id: "scout-womens-6",
        quantity: 2
    },

    "scout-womens-coco-ho-5": {
        id: "scout-womens-coco-ho-5",
        quantity: 1
    },

    "jameson-2-womens-8": {
        id: "jameson-2-womens-8",
        quantity: 1
    }
};

var Product = React.createClass({
    displayName: "Product",

    render: function render() {
        var _props$product = this.props.product;
        var name = _props$product.name;
        var price = _props$product.price;
        var imagePath = _props$product.imagePath;

        return React.createElement(
            "div",
            { className: "product" },
            this.renderDisplay(price, imagePath),
            this.renderDesc(name)
        );
    },
    renderDisplay: function renderDisplay(price, imagePath) {
        var item = cartItems[this.props.product.id];
        var opt = item ? React.createElement(QuantityControl, { item: item, variant: "gray" }) : React.createElement(
            "a",
            { className: "product_add" },
            React.createElement("img", { className: "product__add__icon", src: "img/cart-icon.svg" })
        );

        return React.createElement(
            "div",
            { className: "product__display" },
            React.createElement("img", { className: "product__img", src: imagePath }),
            opt,
            React.createElement(
                "div",
                { className: "product__price" },
                price
            )
        );
    },
    renderDesc: function renderDesc(name) {
        return React.createElement(
            "div",
            { className: "product__description" },
            React.createElement(
                "div",
                { className: "product__name" },
                name
            ),
            React.createElement("img", { className: "product__heart", src: "img/heart.svg" })
        );
    }
});

var Products = React.createClass({
    displayName: "Products",

    render: function render() {
        var productArr = [];
        for (var key in products) {
            productArr.push(React.createElement(Product, { key: key, product: products[key] }));
        };

        return React.createElement(
            "div",
            { className: "products" },
            productArr
        );
    }
});

var SiteTitle = React.createClass({
    displayName: "SiteTitle",

    render: function render() {
        return React.createElement(
            "div",
            { className: "title" },
            React.createElement(
                "h2",
                null,
                "Buy Me Shoes"
            ),
            React.createElement("img", { className: "title__heart", src: "img/heart.svg" })
        );
    }
});

var CartItem = React.createClass({
    displayName: "CartItem",

    render: function render() {
        var cartItem = this.props.cartItem;

        var quantity = cartItem.quantity;
        var product = products[cartItem.id];
        return React.createElement(
            "div",
            { className: "cart-item" },
            React.createElement(
                "div",
                { className: "cart-item__top-part" },
                React.createElement(
                    "div",
                    { className: "cart-item__image" },
                    React.createElement("img", { src: product.imagePath })
                ),
                React.createElement(
                    "div",
                    { className: "cart-item__top-part__middle" },
                    React.createElement(
                        "div",
                        { className: "cart-item__title" },
                        product.name
                    ),
                    React.createElement(
                        "div",
                        { className: "cart-item__price" },
                        quantity === 1 ? "$" + product.price : "$" + product.price + "*" + quantity
                    )
                ),
                React.createElement("img", { className: "cart-item__trash", src: "img/trash-icon.svg" })
            ),
            React.createElement(
                "div",
                { className: "cart-item__qty" },
                React.createElement(QuantityControl, { item: cartItem })
            )
        );
    }
});

var QuantityControl = React.createClass({
    displayName: "QuantityControl",

    render: function render() {
        var quantity = this.props.item.quantity;
        return React.createElement(
            "div",
            { className: "adjust-qty" + (this.props.variant === 'gray' ? " adjust-qty--gray" : "") },
            React.createElement(
                "a",
                { className: "adjust-qty__button" },
                "-"
            ),
            React.createElement(
                "div",
                { className: "adjust-qty__number" },
                quantity
            ),
            React.createElement(
                "a",
                { className: "adjust-qty__button" },
                "+"
            )
        );
    }
});

var Cart = React.createClass({
    displayName: "Cart",

    componentDidMount: function componentDidMount() {
        var $overflow = React.findDOMNode(this.refs.overflow);
        Ps.initialize($overflow);
    },

    render: function render() {
        var cartItemsArr = [];
        for (var key in cartItems) {
            cartItemsArr.push(React.createElement(CartItem, { key: key, cartItem: cartItems[key] }));
        }
        return React.createElement(
            "div",
            { className: "cart", ref: "overflow" },
            React.createElement(
                "h3",
                { className: "cart__title" },
                "Shopping Cart"
            ),
            React.createElement(
                "div",
                { className: "cart__content" },
                cartItemsArr
            )
        );
    }
});

var Checkout = React.createClass({
    displayName: "Checkout",

    render: function render() {
        var total = 0;
        for (var key in cartItems) {
            total += cartItems[key].quantity * products[key].price;
        }
        return React.createElement(
            "div",
            { className: "checkout" },
            React.createElement("hr", { className: "checkout__divider" }),
            React.createElement("input", { type: "text", className: "checkout__coupon-input", placeholder: "coupon code" }),
            React.createElement(
                "div",
                { className: "checkout__amount" },
                React.createElement(
                    "div",
                    { className: "checkout__amount-label" },
                    "Subtotal"
                ),
                React.createElement(
                    "div",
                    { className: "checkout__amount-price" },
                    '$' + total
                )
            ),
            React.createElement(
                "a",
                { className: "checkout__button" },
                React.createElement("img", { className: "checkout__button__icon", src: "img/cart-icon.svg" }),
                React.createElement(
                    "span",
                    { className: "checkout__button__label" },
                    "Checkout"
                )
            )
        );
    }
});

var App = React.createClass({
    displayName: "App",

    render: function render() {
        return React.createElement(
            "div",
            { className: "site" },
            this.renderBackground(),
            React.createElement(
                "div",
                { className: "site__main" },
                React.createElement(
                    "div",
                    { className: "site__left-sidebar" },
                    React.createElement(SiteTitle, null)
                ),
                React.createElement(
                    "div",
                    { className: "site__content" },
                    React.createElement(Products, null)
                )
            ),
            React.createElement(
                "div",
                { className: "site__right-sidebar" },
                React.createElement(Cart, null),
                React.createElement(Checkout, null)
            ),
            React.createElement(
                "a",
                { className: "site__right-sidebar-toggle" },
                React.createElement("img", { src: "img/arrow-icon.svg" })
            )
        );
    },
    renderBackground: function renderBackground() {
        return React.createElement(
            "div",
            { className: "bg" },
            React.createElement("div", { className: "bg__img" })
        );
    }
});

window.onload = function () {
    React.render(React.createElement(App, null), document.querySelector('#root'));
};
