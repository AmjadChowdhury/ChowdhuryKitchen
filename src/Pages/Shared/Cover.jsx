import { Parallax } from "react-parallax";
import PropTypes from "prop-types";

const Cover = ({ img,title,description }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="p-8 lg:p-20">
        <div className="p-8 lg:p-16 text-center text-white bg-black bg-opacity-20">
          <h1 className="text-base lg:text-2xl font-bold uppercase">{title}</h1>
          <p className="text-xs lg:text-base">
            {description}
          </p>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
    img: PropTypes.img,
    title: PropTypes.string,
    description: PropTypes.string
}

export default Cover;
