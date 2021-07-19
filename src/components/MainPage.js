import banner from "../images/banner.jpg";
import "../styles/mainpage.scss";
import Header from "./Header";
import Text from "./Text.js";
import Image from "./Image.js";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="banner">
        <img className="banner__image" src={banner} alt="Banner"></img>
      </div>
      <div className="container">
        <Text />
        <Image />
      </div>
    </div>
  );
};

export default MainPage;
