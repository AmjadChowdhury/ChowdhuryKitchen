import { useForm } from "react-hook-form";
import HeadingTitle from "../../Components/HeadingTitle";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Review = () => {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const name = user.displayName
    const details = data.details
    const rating = data.rating
    const review = {name,details,rating}

    const res = await axiosPublic.post("/reviews",review)
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
            title: `${name} added valuable opinion..!`
          });
    }
  };
  return (
    <div>
        <HeadingTitle subHeading={'Hurry Up'} heading={'Add Review'}/>
      <div className="mx-4 p-4 bg-gray-100 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm font-bold">Valuable opinion</span>
            </label>
            <textarea
              {...register("details")}
              type="text"
              placeholder=""
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-sm font-bold">Rating</span>
            </label>
            <input
              {...register("rating")}
              type="number"
              placeholder="from 0 to 5"
              className="input input-bordered"
              required
            />
          </div>

          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="Add Review"
              className="btn text-xs font-bold text-[#D1A054] hover:text-white hover:border-none bg-black hover:bg-[#D1A054]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
