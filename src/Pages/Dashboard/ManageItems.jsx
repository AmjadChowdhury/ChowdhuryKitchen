import { FaTrash } from "react-icons/fa6";
import HeadingTitle from "../../Components/HeadingTitle";
import useMenu from "../../Hooks/useMenu";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";

const ManageItems = () => {
  const [ menu, ,refetch ] = useMenu();
  const axiosSecure = useAxiosSecure()

  const handleDeleteItem = (item) => {
    console.log(item._id)

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`)
            console.log(res.data)
            if(res.data.deletedCount){
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        
        }
      });
  }

  return (
    <div>
      <HeadingTitle subHeading="Hurry Up" heading="Manage items"></HeadingTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white rounded">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id} >
                <th>{idx + 1}</th>
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
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.category}
                  </span>
                </td>
                <td>{item.price}</td>
                <td>
                <Link
                    to={`/dashboard/updateItem/${item._id}`}
                    className="btn bg-white"
                  >
                    <GrUpdate className="text-2xl text-green-500"></GrUpdate>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn bg-white"
                  >
                    <FaTrash className="text-2xl text-red-500"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
