import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
// import { motion } from "motion/react"

const FoodCard = ({ item }) => {
  const { image, name, recipe, _id, price } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          //refetch cart to update the cart items count..
          refetch();
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: `${name} added to the carts.`,
          });
          
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="flex flex-col border border-dashed border-b-2 border-b-[#D1a054] hover:shadow-lg hover:shrink-0 hover:bg-opacity-90 hover:transition-all hover:scale-y-105 hover:border-[#D1A054]">
      <figure>
        <img src={image} alt={name} className="w-full h-40 lg:h-52" />
      </figure>
      <div className="flex-1 ml-4 mt-2 space-y-2">
        <h2 className="card-title text-sm md:text-lg font-semibold">{name}</h2>
        <p className="text-xs lg:text-sm">{recipe}</p>
      </div>
      <div className=" mb-2 mt-4 flex justify-center">
        {/* <button
          onClick={handleAddToCart}
          className="btn text-xs font-semibold text-[#D1A054] hover:text-white hover:border-none bg-black hover:bg-[#D1A054]"
        >
          Add to cart
        </button> */}
        {/* https://devdojo.com/tailwindcss/buttons */}
         <button onClick={handleAddToCart}>
            <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#D1A054] rounded-xl group">
    <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4">
        <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
    </span>
    <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-black rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
    <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Add To cart</span>
</a>
        </button>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
