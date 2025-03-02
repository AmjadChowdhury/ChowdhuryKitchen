import useCart from "../../Hooks/useCart";
import HeadingTitle from "../../Components/HeadingTitle.jsx";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure()
  const handleDelete = (_id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${_id}`)
          .then(res => {
            if(res.data.deletedCount){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch()
            }
          })
        }
      });
  }
  return (
    <div>
      <HeadingTitle
        subHeading={"My Cart"}
        heading={"Wanna Add More"}
      ></HeadingTitle>

      <div>
        <div className="flex justify-evenly items-center mb-8">
          <h2 className="text-4xl">Items : {cart.length}</h2>
          <h2 className="text-4xl">Total Price : {totalPrice}</h2>
          <button className="btn bg-blue-500">Pay</button>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    cart.map((item,idx) => <tr key={item._id}>
                        <th>
                          {idx+1}
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img
                                  src={item.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {item.name}
                        </td>
                        <td>{item.price}</td>
                        <th>
                          <button
                           onClick={()=> handleDelete(item._id)}
                           className="btn btn-ghost btn-xs"><FaTrash className="text-2xl text-red-500"></FaTrash></button>
                        </th>
                      </tr>)
                }
              </tbody>
             
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
