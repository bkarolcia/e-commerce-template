import ImageGallery from "react-image-gallery";
import jacket from "../images/jacket.jpg";
import kardigan from "../images/kardigan.jpg";
import tshirt from "../images/tshirt.jpg";

const images = [
  {
    original: jacket,
  },
  {
    original: kardigan,
  },
  {
    original: tshirt,
  },
];

const Image = () => {
  return (
    <div className="container__image">
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        autoPlay={true}
        showPlayButton={false}
        showNav={false}
      />
    </div>
  );
};

export default Image;
