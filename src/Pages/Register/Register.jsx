import { useContext } from "react";
import logInImg from "../../assets/others/login.jpg";
import backImg from "../../assets/others/authentication.png";
import { Authcontext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin";

const image_hosting_key = import.meta.env.VITE_imgbb_KEY;
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser, updateUser } = useContext(Authcontext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_Api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const photo = res.data.data.display_url;

      createUser(email, password)
        .then((result) => {
          console.log(result.user)
          updateUser(name, photo)
            .then(() => {
              // create user entry in db..
              const userInfo = {
                name: name,
                email: email,
              };
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
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
                    title: `${name} signed in successfully and Profile Update.!`,
                  });
                  navigate("/");
                }
              });
            })
            .catch((error) => {
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
                title: `${error.message}`,
              });
            });
        })
        .catch((error) => {
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
            icon: "error",
            title: `${error.message}`,
          });
        });
    }
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={logInImg} alt="" />
        </div>
        <div
          className="card border-2 border-[#D1A054] w-full max-w-sm shrink-0 lg:w-1/2"
          style={{
            backgroundImage: `url(${backImg})`,
            backgroundSize: "cover",
          }}
        >
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control text-sm font-bold">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control text-sm font-bold">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control text-sm font-bold">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must be 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password must be less than 20 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </span>
              )}
            </div>
            <div className="form-control text-sm font-bold">
              <label className="label">
                <span className="label-text text-sm font-bold">Photo</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full bg-[#D1A054] text-white"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-outline border-b-2 text-[#D1A054] hover:border-none hover:text-[#D1A054]"
              />
            </div>
            <div className="my-2">
              <h1 className="font-bold text-base text-center">
                Already have an account!!Please
                <Link to="/login" className="text-[#D1A054] underline">
                  {" "}
                  logIn
                </Link>
              </h1>
              <p className="text-center text-[#D1A054]">Or Sign up with</p>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
