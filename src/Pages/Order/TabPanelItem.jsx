import FoodCard from "../../Components/FoodCard";
import PropTypes from "prop-types";


const TabPanelItem = ({items}) => {
   
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-2">
            {
                items.map(item => <FoodCard
                key={item._id}
                item={item}></FoodCard>)
            }
        </div>
    );
};

TabPanelItem.propTypes = {
    items: PropTypes.array
}

export default TabPanelItem;