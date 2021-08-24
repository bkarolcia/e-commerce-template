import "../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGifts } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__logo">
        <div className="header__icon">
          <FontAwesomeIcon icon={faGifts} />
        </div>
        <div className="header__name">CosiBella</div>
      </div>
      <div className="header__links">
        <Link className="header__links" to="/">
          Main Page
        </Link>
        <Link className="header__links" to="/products">
          All Products
        </Link>
        <Link className="header__links" to="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
      <div className="header__basket">
        <div className="header__basketicon">
          <FontAwesomeIcon
            icon={faShoppingBasket}
            onClick={props.toggleBasket}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
