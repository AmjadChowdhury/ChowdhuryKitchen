import { useQuery } from "@tanstack/react-query";
import HeadingTitle from "../../Components/HeadingTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${_id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        if(res.data.modifiedCount > 0){
            refetch()
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
                title: `${user.name} is now Admin`
              });
        }
    })
  }
  return (
    <div>
      <HeadingTitle
        subHeading="How many"
        heading={"Manage All Users"}
      ></HeadingTitle>
      <div className="flex justify-evenly mb-4">
        <h2 className="text-base lg:text-xl font-bold">All Users</h2>
        <h2 className="text-base lg:text-2xl font-bold">Total Users <span className="text-[#D1A054]">{users.length}</span></h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th>#</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={user._id}
                className={`${idx % 2 == 0 ? "bg-slate-100" : "bg-white"}`}
              >
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                {
                    user.role === 'admin' ? 'Admin' : <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-white"
                    >
                    <FaUsers className="text-2xl text-[#D1A054]"></FaUsers>
                    </button>
                }
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
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

export default AllUsers;
