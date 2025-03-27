import { useForm } from "react-hook-form";
import HeadingTitle from "../../Components/HeadingTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_imgbb_KEY;
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_Api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuInfo = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuInfo);
      if (menuRes.data.insertedId) {
        reset();
      }
    }
  };
  return (
    <div>
      <HeadingTitle
        heading="Add Items"
        subHeading="add new items"
      ></HeadingTitle>

      <div className="mx-4 p-4 bg-gray-100 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text text-sm font-bold">Item Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sm font-bold">Category</span>
              </label>
              <select
                {...register("category")}
                className="input input-bordered"
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-sm font-bold">Price</span>
              </label>
              <input
                {...register("price")}
                type="number"
                placeholder="price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text text-sm font-bold">Recipe</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered w-full"
              placeholder=""
            ></textarea>
          </div>
          <div>
            <label className="label">
              <span className="label-text text-sm font-bold">Item Image</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="file-input w-full bg-[#D1A054] text-white"
            />
          </div>
          <div className="flex justify-center mt-4">           
            <input
              type="submit"
              value="Add Items"
              className="btn text-xs font-bold text-[#D1A054] hover:text-white hover:border-none bg-black hover:bg-[#D1A054]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
