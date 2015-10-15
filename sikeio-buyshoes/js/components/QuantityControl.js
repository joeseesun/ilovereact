const React = require('react');

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

module.exports = QuantityControl;
