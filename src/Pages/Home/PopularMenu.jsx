import { useEffect, useState } from "react";
import HeadingTitle from "../../Components/HeadingTitle";
import Menu from "../Shared/Menu";


const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <div>
            <HeadingTitle
            subHeading="Check It Out"
            heading="From Our Menu"></HeadingTitle>
            <div className="grid md:grid-cols-2 gap-4 px-2">
                {
                    menu.map(item => <Menu
                    key={item._id}
                    item={item}></Menu>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;