import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import useMenu from "../../Hooks/useMenu";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuSection = ({ categoryName, btnName }) => {
  const [menu, loading] = useMenu();
  const menuItems = menu.filter((item) => item.category === categoryName);

  // Pagination
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="my-4">
      {/* Grid Section */}
      <div className="grid md:grid-cols-2 gap-4 px-2 lg:p-8">
        {loading
          ? "Loading..."
          : selectedItems.map((item) => (
              <MenuItem key={item._id} item={item} />
            ))}
      </div>

      <div className="flex justify-evenly items-center">
        {totalPages > 1 && (
          <div className="join flex justify-center my-5">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`join-item btn btn-square  ${
                  currentPage === index + 1
                    ? "btn-active bg-[#D1A054] text-white"
                    : ""
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <Link to={`/order/${categoryName}`}>
            <Button name={btnName} />
          </Link>
        </div>
      </div>
    </div>
  );
};

MenuSection.propTypes = {
  categoryName: PropTypes.string,
  btnName: PropTypes.string,
};

export default MenuSection;
