
import HeadingTitle from "../../Components/HeadingTitle";
import MenuSection from "../Shared/MenuSection";


const PopularMenu = () => {
    return (
        <div>
            <HeadingTitle
            subHeading="Check It Out"
            heading="From Our Menu"></HeadingTitle>
            <MenuSection categoryName="popular" btnName="Order your Favourite Food"></MenuSection>
        </div>
    );
};

export default PopularMenu;