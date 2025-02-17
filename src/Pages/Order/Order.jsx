import Cover from "../Shared/Cover";
import orderImg from "../../assets/shop/banner2.jpg"
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";



const Order = () => {
    const {category} = useParams()
    return (
        <div>
            <Cover img={orderImg} title="Our Shop"></Cover>
            <OrderTab category={category}></OrderTab>
        </div>
    );
};

export default Order;