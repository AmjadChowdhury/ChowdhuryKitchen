import { FaDollarSign } from "react-icons/fa6";
import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    

    <div className="flex gap-4 mb-2 lg:px-8 hover:transition-all hover:scale-105">
        <div className="h-[50px] lg:h-[100px] w-[75px] lg:w-[150px]">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-tr-full rounded-bl-full rounded-br-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-sm md:text-lg font-semibold uppercase text-start">{name} --</h1>
          <p className="text-xs lg:text-sm">{recipe}</p>
        </div>
        <div className="">
          <p className="flex justify-start items-center text-[#D1A054] font-bold text-base lg:text-xl">
            <FaDollarSign></FaDollarSign>
            {price}
          </p>
        </div>
      </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
