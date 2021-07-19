import "../styles/basket.scss";
import React from "react";
import BasketProducts from "./BasketProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Basket = (props) => {
  return (
    <div
      className={`basket ${props.showBasket ? `basket--show` : `basket--hide`}`}
    >
      <div className="basket__header">
        <div className="basket__header__title">BASKET</div>
        <div className="basket__header__icon" onClick={props.toggleBasket}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
      <BasketProducts
        basketProducts={props.basketProducts}
        addProduct={props.addProduct}
        deleteProduct={props.deleteProduct}
        setProductQuantity={props.setProductQuantity}
      />

      <div className="total"> Total: {props.totalBasketPrice} PLN</div>
    </div>
  );
};

export default Basket;
