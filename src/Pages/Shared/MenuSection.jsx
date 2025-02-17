import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import useMenu from "../../Hooks/useMenu";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

const MenuSection = ({ categoryName, btnName }) => {
  const [menu, loading] = useMenu();
  const menuItems = menu.filter((item) => item.category === categoryName);
  return (
    <div className="my-4">
      <div className="grid md:grid-cols-2 gap-4 px-2">
        {loading
          ? "astese"
          : menuItems.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${categoryName}`}><Button name={btnName}></Button></Link>
      </div>
    </div>
  );
};

MenuSection.propTypes = {
    categoryName: PropTypes.string,
    btnName: PropTypes.string
}

export default MenuSection;
