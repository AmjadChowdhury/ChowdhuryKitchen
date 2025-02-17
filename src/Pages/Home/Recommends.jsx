
import HeadingTitle from "../../Components/HeadingTitle";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard";


const Recommends = () => {
    const [menu, loading] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <HeadingTitle
            subHeading="Should try"
            heading="CHEF RECOMMENDS"></HeadingTitle>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-2">
                {
                    loading? 'astese':
                    offered.map(item => <FoodCard
                    key={item._id}
                    item={item}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Recommends;