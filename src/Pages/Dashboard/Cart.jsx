import useCart from "../../Hooks/useCart";
import HeadingTitle from "../../Components/HeadingTitle.jsx";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 items-center mb-8">
          <h2 className="text-base lg:text-xl font-bold">Items : <span className="text-[#D1A054]">{cart.length}</span></h2>
          <h2 className="text-base lg:text-xl font-bold">Price : <span className="text-[#D1A054]">{totalPrice} </span>tk.</h2>
          {
            cart.length ? <Link to="/dashboard/payment" className="flex  justify-start lg:justify-end"><button className="btn bg-[#D1A054] text-white">Pay</button></Link> : <button disabled className="btn bg-[#D1A054] text-white">Pay</button>
          }
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white rounded-full">
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
                    cart.map((item,idx) => <tr key={item._id} className={`${idx%2 == 0 ? 'bg-slate-100': 'bg-white'}`}>
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
                           className="btn bg-white"><FaTrash className="text-2xl text-red-500"></FaTrash></button>
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
