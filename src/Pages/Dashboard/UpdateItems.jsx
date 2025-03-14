import { useLoaderData } from "react-router-dom";
import HeadingTitle from "../../Components/HeadingTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_imgbb_KEY;
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
  const item = useLoaderData();
  const { _id, image, recipe,price, category, name } = item;

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
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuInfo);
      if (menuRes.data.modifiedCount) {
        reset();
      }
    }
  };
  return (
    <div>
      <HeadingTitle subHeading={"Hurry Up"} heading={"Update Item"} />

      <div className="mx-4 p-4 bg-gray-100 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              defaultValue={name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category")}
                defaultValue={category}
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
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price")}
                type="number"
                defaultValue={price}
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Recipe</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered w-full"
              defaultValue={recipe}
            ></textarea>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Item Image</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="file-input w-full"
            />
          </div>
          <div className="flex justify-center mt-2">
            <input
              type="submit"
              value="Add Items"
              className="btn bg-black text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
