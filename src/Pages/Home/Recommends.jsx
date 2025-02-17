
import HeadingTitle from "../../Components/HeadingTitle";
import RecommendCard from "./RecommendCard";
import useMenu from "../../Hooks/useMenu";


const Recommends = () => {
    const [menu, loading] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    // const [recommend,setRecommend] = useState([])
    // useEffect(()=> {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const offered = data.filter(item => item.category === 'offered')
    //         setRecommend(offered)
    //     })
    // })
    return (
        <div>
            <HeadingTitle
            subHeading="Should try"
            heading="CHEF RECOMMENDS"></HeadingTitle>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-2">
                {
                    loading? 'astese':
                    offered.map(item => <RecommendCard
                    key={item._id}
                    item={item}></RecommendCard>)
                }
            </div>
        </div>
    );
};

export default Recommends;