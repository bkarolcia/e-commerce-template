import React, { useState } from "react";
import "../styles/basketProduct.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const BasketProduct = (props) => {
  const [image, setImage] = useState("");

  import(`./../images/${props.product.id}.jpg`).then((image) =>
    setImage(image.default)
  );
  return (
    <div className="basket-product">
      <div className="basket-product__elements">
        <img src={image} className="basket-product__image" />

        <div className="basket-product__product-right">
          <div className="basket-product__firstRow__elements__name">
            {props.product.name}
          </div>
          <div className="basket-product__trash">
            <div className="basket-product__quantity-input">
              <FontAwesomeIcon
                icon={faMinus}
                onClick={() =>
                  props.setProductQuantity(
                    props.product,
                    props.product.quantity - 1
                  )
                }
              />
              <input type="text" value={props.product.quantity} />
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => props.addProduct(props.product)}
              />
            </div>
            <div
              className="basket-product__trash__button"
              onClick={() => props.deleteProduct(props.product)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>
          <div className="basket-product__price">
            {props.product.price * props.product.quantity} PLN
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
