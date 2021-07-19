import "../styles/allproducts.scss";
import { products } from "./Products";
import Header from "./Header";
import Product from "./Product";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [showBasket, setShowBasket] = useState(false);

  const toggleBasket = () => setShowBasket(!showBasket);

  const openBasket = () => setShowBasket(true);

  const [basketProducts, setBasketProducts] = useState([]);

  const addProduct = (product) => {
    const productInBasket = basketProducts.find(
      (basketProduct) => basketProduct.id === product.id
    );
    if (productInBasket) {
      setBasketProducts([
        ...basketProducts.map((basketProduct) => {
          if (basketProduct.id === product.id) {
            return { ...basketProduct, quantity: basketProduct.quantity + 1 };
          } else {
            return basketProduct;
          }
        }),
      ]);
    } else {
      setBasketProducts([...basketProducts, { ...product, quantity: 1 }]);
    }
  };

  const totalBasketPrice = basketProducts
    .reduce(
      (previousValue, basketProduct) =>
        previousValue + basketProduct.quantity * basketProduct.price,
      0
    )
    .toFixed(2);

  const deleteProduct = (product) => {
    setBasketProducts(
      basketProducts.filter((basketProduct) => basketProduct.id !== product.id)
    );
  };
  const setProductQuantity = (product, quantity) => {
    if (quantity > 0) {
      return setBasketProducts(
        basketProducts.map((basketProduct) =>
          basketProduct.id === product.id
            ? { ...basketProduct, quantity: quantity }
            : basketProduct
        )
      );
    } else {
      deleteProduct(product);
    }
  };

  return (
    <div>
      <Header toggleBasket={toggleBasket} />

      <Basket
        showBasket={showBasket}
        basketProducts={basketProducts}
        toggleBasket={toggleBasket}
        addProduct={addProduct}
        totalBasketPrice={totalBasketPrice}
        deleteProduct={deleteProduct}
        setProductQuantity={setProductQuantity}
      />
      <div className="container">
        <div className="container__products">
          {products.map((product) => (
            <Product
              product={product}
              toggleBasket={toggleBasket}
              openBasket={openBasket}
              addProduct={addProduct}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
