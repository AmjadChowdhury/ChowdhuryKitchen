import { loadStripe } from "@stripe/stripe-js";
import HeadingTitle from "../../Components/HeadingTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_publish_KEY)
const Payment = () => {
    return (
        <div>
            <HeadingTitle subHeading={'Please, pay to eat'} heading={'Payment'}/>
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        </div>
    );
};

export default Payment;