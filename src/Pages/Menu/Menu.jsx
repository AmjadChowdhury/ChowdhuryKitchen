import Cover from "../Shared/Cover";
import dessertsImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import menuImg from '../../assets/menu/banner3.jpg'
import MenuSection from "../Shared/MenuSection";
import HeadingTitle from "../../Components/HeadingTitle";


const Menu = () => {
    return (
        <div>
            <Cover img={menuImg} title="menu"></Cover>

            <HeadingTitle
            subHeading="Don't miss"
            heading="Today's Offer"></HeadingTitle>
            <MenuSection categoryName="offered" btnName="Order your favourite Food"></MenuSection>

            <Cover img={dessertsImg} title="Desserts"></Cover>
            <MenuSection categoryName="dessert" btnName="Order your favourite Food"></MenuSection>

            <Cover img={pizzaImg} title="pizza"></Cover>
            <MenuSection categoryName="pizza" btnName="Order your favourite Food"></MenuSection>

            <Cover img={saladImg} title="salad"></Cover>
            <MenuSection categoryName="salad" btnName="Order your favourite Food"></MenuSection>

            <Cover img={soupImg} title="soup"></Cover>
            <MenuSection categoryName="soup" btnName="Order your favourite Food"></MenuSection>
            
            
        </div>
    );
};

export default Menu;