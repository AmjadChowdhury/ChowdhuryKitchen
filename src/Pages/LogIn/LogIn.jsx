import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const LogIn = () => {
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef(null);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captchaValue = captchaRef.current.value;
    console.log(email, password, captchaValue);
  };

  const handleCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    }
    else{
        setDisable(true)
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 lg:w-1/2">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
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
            <button className="btn" onClick={handleCaptcha}>Validate</button>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                type="submit"
                value="Login"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
