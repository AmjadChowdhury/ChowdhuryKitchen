import { FaDollarSign } from "react-icons/fa6";
import PropTypes from "prop-types";
import { motion } from "motion/react";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <motion.button
      whileHover={{ scale: 1.2, transition: { duration: 0.3, ease: "easeOut" } }}
      whileTap={{ scale: 1, transition: { duration: 0.2, ease: "easeInOut" } }}
      onHoverStart={() => console.log("hover started!")}
      
    >
      <div className="flex gap-4 mb-2 lg:px-8">
        <div className="h-[100px] w-[150px]">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-tr-full rounded-bl-full rounded-br-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-lg md:text-xl font-bold uppercase text-start">{name} --</h1>
          <p className="text-base text-start">{recipe}</p>
        </div>
        <div className="">
          <p className="flex justify-start items-center text-yellow-600 font-bold text-xl">
            <FaDollarSign></FaDollarSign>
            {price}
          </p>
        </div>
      </div>
    </motion.button>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default MenuItem;
