import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";
// import { motion } from "motion/react"


const FoodCard = ({item}) => {
  const {image,name,recipe,_id,price} = item
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  const location = useLocation()
  const [,refetch] = useCart()


  const handleAddToCart = () => {
    if(user && user.email){
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `${name} added to the carts.`
          });
          //refetch cart to update the cart items count..
          refetch()
        }
      })
    }
    else{
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from: location}})
        }
      });
    }
  }
  return (
    
<div className="card border-2 border-b-4 border-b-yellow-600">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
      </div>
      <div className="mb-2 flex justify-center">
      <button onClick={handleAddToCart} className="btn btn-outline border-b-2 text-xs font-semibold text-yellow-600 hover:border-none hover:text-yellow-600">Add to cart</button>
      </div>
    </div>

    
  );
};

FoodCard.propTypes = {
    item: PropTypes.object
}

export default FoodCard;
