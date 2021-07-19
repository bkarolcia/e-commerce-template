import React, { useState } from "react";
import Button from "./Button";

const Product = (props) => {
  const [image, setImage] = useState("");

  import(`./../images/${props.product.id}.jpg`).then((image) =>
    setImage(image.default)
  );

  return (
    <div className="container__products__boxes">
      <div className="product-name">{props.product.name}</div>
      <img className="image" src={image} />
      <div className="price"> {props.product.price} PLN</div>
      <Button
        toggleBasket={props.toggleBasket}
        openBasket={props.openBasket}
        addProduct={props.addProduct}
        product={props.product}
      />
    </div>
  );
};

export default Product;
