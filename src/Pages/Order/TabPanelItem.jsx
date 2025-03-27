import { useState } from "react";
import FoodCard from "../../Components/FoodCard";
import PropTypes from "prop-types";

const TabPanelItem = ({ items }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 m-2 lg:m-4">
        {selectedItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      {
        totalPages>1 &&  <div className="join flex justify-center my-5">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`join-item btn btn-square  ${currentPage === index + 1 ? "btn-active bg-[#D1A054] text-white" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      }
    </div>
  );
};

TabPanelItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TabPanelItem;
