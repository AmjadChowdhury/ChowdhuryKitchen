
import HeadingTitle from "../../Components/HeadingTitle";
import Menu from "../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu,loading] = useMenu()
    const popularItems = menu.filter(item => item.category === 'popular')
    
    return (
        <div>
            <HeadingTitle
            subHeading="Check It Out"
            heading="From Our Menu"></HeadingTitle>
            <div className="grid md:grid-cols-2 gap-4 px-2">
                {
                    loading? 'astese':
                    popularItems.map(item => <Menu
                    key={item._id}
                    item={item}></Menu>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;