import { useContext } from "react";
import logInImg from "../../assets/others/authentication1.png";
import { Authcontext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(Authcontext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-5">
        <div className="text-center lg:text-left lg:w-1/2">
          <img src={logInImg} alt="" />
        </div>
        <div className="card border-2 border-yellow-900 w-full max-w-sm shrink-0 lg:w-1/2">
          <form className="card-body" onSubmit={handleRegister}>
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
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn btn-outline border-b-2 text-yellow-600 hover:border-none hover:text-yellow-600 "
              />
            </div>
            <div className="my-2">
              <h1 className="font-bold text-base text-center">
                Already have an account!!Please 
                <Link to="/login" className="text-yellow-900"> LogIn</Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
