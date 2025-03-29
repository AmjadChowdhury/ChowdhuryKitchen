import Cover from "../Shared/Cover";
import dessertsImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import menuImg from '../../assets/menu/banner3.jpg'
import MenuSection from "../Shared/MenuSection";
import HeadingTitle from "../../Components/HeadingTitle";


const Menu = () => {
    const menuDes = 'From crisp salads to sizzling pizzas, comforting soups to decadent desserts—every bite tells a delicious story! 🍕🥗🍰🍜'
    const saladDes = "Fresh, crisp, and bursting with goodness—our salads redefine healthy indulgence! 🥗"
    const soupDes = "Warm, comforting, and made with love—our soups are a hug in a bowl! 🍜"
    const pizzaDes = "Oven-baked perfection with melty cheese and bold flavors—every slice is pure joy! 🍕"
    const dessertdes = "Sweet dreams are made of this—treat yourself to pure indulgence! 🍰"
    return (
        <div className="pt-12 lg:pt-0">
            <Cover img={menuImg} title="menu" description={menuDes}></Cover>

            <HeadingTitle
            subHeading="Don't miss"
            heading="Today's Offer"></HeadingTitle>
            <MenuSection categoryName="offered" btnName="Order offered Food"></MenuSection>

            <Cover img={dessertsImg} title="Desserts" description={dessertdes}></Cover>
            <MenuSection categoryName="dessert" btnName="Order dessert"></MenuSection>

            <Cover img={pizzaImg} title="pizza" description={pizzaDes}></Cover>
            <MenuSection categoryName="pizza" btnName="Order pizza"></MenuSection>

            <Cover img={saladImg} title="salad" description={saladDes}></Cover>
            <MenuSection categoryName="salad" btnName="Order salad"></MenuSection>

            <Cover img={soupImg} title="soup" description={soupDes}></Cover>
            <MenuSection categoryName="soup" btnName="Order soup"></MenuSection>
            
            
        </div>
    );
};

export default Menu;