import { useContext } from "react";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
import logInImg from "../../assets/others/login.jpg";
import { Authcontext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";
import backImg from '../../assets/others/authentication.png'

const LogIn = () => {
  const { signIn } = useContext(Authcontext);
  const navigate = useNavigate();
  // const [disable, setDisable] = useState(true);
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  console.log(from)

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    signIn(email, password)
      .then((result) => {
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
          title: `${result.user?.displayName} Signed in successfully`,
        });
        navigate(from,{replace: true});
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
  };

  // const handleCaptcha = (e) => {
  //   const user_captcha_value = e.target.value;
  //   if (validateCaptcha(user_captcha_value)) {
  //     setDisable(false);
  //   } else {
  //     setDisable(true);
  //   }
  // };

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={logInImg} alt="" />
        </div>
        <div className="card border-2 border-[#D1A054] w-full max-w-sm shrink-0 lg:w-1/2" style={{backgroundImage: `url(${backImg})`,backgroundSize: 'cover'}}>
          <form className="card-body" onSubmit={handleLogIn}>
            <div className="form-control text-sm font-bold">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control text-sm font-bold">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {/* <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                name="captcha"
                type="text"
                placeholder="please provide captcha"
                className="input input-bordered"
                required
                onBlur={handleCaptcha}
              />
            </div> */}
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn btn-outline border-b-2 text-[#D1A054] hover:border-none hover:text-[#D1A054]"
              />
            </div>
            <div className="my-2">
              <h1 className="font-bold text-base text-center">
                New Here?Please{" "}
                <Link to="/register" className="text-[#D1A054] underline">
                  Register
                </Link>
              </h1>
              <p className="text-center text-[#D1A054]">Or sign in with</p>
              <SocialLogin/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
