import { FaDollarSign } from "react-icons/fa6";
import PropTypes from "prop-types";

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item
    return (
        <div className="flex gap-4 mb-2 lg:px-8">
            <div  className="h-[100px] w-[150px]">
                <img src={image} alt="" className="w-full h-full rounded-tr-full rounded-bl-full rounded-br-full"  />
            </div>
            <div className="flex-1">
                <h1 className="text-lg md:text-xl font-bold uppercase">{name} --</h1>
                <p className="text-base">{recipe}</p>
            </div>
            <div className="">
                <p className="flex justify-start items-center text-yellow-600 font-bold text-xl"><FaDollarSign></FaDollarSign>{price}</p>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object
}

export default MenuItem;