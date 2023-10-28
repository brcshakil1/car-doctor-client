import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    const user = { email, pass };
    console.log(user);

    signInUser(email, pass)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        alert("user sign in");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className=" min-h-screen py-14 px-4 md:px-14">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl md:w-1/2 border">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="pass"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center">
              New to Cars Doctor?{" "}
              <Link to="/signUp" className="text-orange-700 font-bold">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
