const Button = (props) => {
  const handleOnClick = () => {
    props.openBasket();
    props.addProduct(props.product);
  };

  return (
    <button className="container__products__button" onClick={handleOnClick}>
      Add to basket
    </button>
  );
};

export default Button;
