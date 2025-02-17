import { Parallax } from "react-parallax";
import PropTypes from "prop-types";

const Cover = ({ img,title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="p-12 lg:p-20">
        <div className="p-8 lg:p-16 text-center text-white bg-black bg-opacity-20">
          <h1 className="text-4xl uppercase">{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            quaerat dolor doloribus praesentium expedita quasi impedit enim
            facere veritatis mollitia.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
    img: PropTypes.img,
    title: PropTypes.string
}

export default Cover;
