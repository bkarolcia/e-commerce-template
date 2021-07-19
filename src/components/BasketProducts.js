import BasketProduct from "./BasketProduct";

const BasketProducts = (props) => {
  return (
    <div className="productsInBasket">
      {props.basketProducts.map((product) => (
        <BasketProduct
          product={product}
          addProduct={props.addProduct}
          deleteProduct={props.deleteProduct}
          setProductQuantity={props.setProductQuantity}
        />
      ))}
    </div>
  );
};

export default BasketProducts;
