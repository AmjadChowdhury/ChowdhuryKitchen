import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import logInImg from "../../assets/others/authentication1.png";
import { Authcontext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { user, signIn } = useContext(Authcontext);
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef(null);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={logInImg} alt="" />
        </div>
        <div className="card border-2 border-yellow-900 w-full max-w-sm shrink-0 lg:w-1/2">
          <form className="card-body" onSubmit={handleLogIn}>
            <div className="form-control">
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
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                name="captcha"
                type="text"
                ref={captchaRef}
                placeholder="please provide captcha"
                className="input input-bordered"
                required
              />
            </div>
            <button className="btn" onClick={handleCaptcha}>
              Validate
            </button>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                type="submit"
                value="Login"
                className="btn btn-outline border-b-2 text-yellow-600 hover:border-none hover:text-yellow-600"
              />
            </div>
            <div className="my-2">
              <h1 className="font-bold text-base text-center">
                New Here?Please{" "}
                <Link to="/register" className="text-yellow-900">
                  Register
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
