import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import Title from "../Components/Title";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  Title("Login");
  // State to manage password visibility
  const [showPassword, SetShowPassword] = useState(false);
  const { userLogin } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Call the userLogin function from AuthContext
    userLogin(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid Email or Password",
          showConfirmButton: true,
        });
      });
    form.reset();
  };
  return (
    <div className="hero md:min-h-fit lg:w-[30%] mx-auto shadow-gray-50 shadow-lg rounded-2xl md:my-20">
      <div className="card bg-base-300 w-full shrink-0 mx-auto">
        <div className="card-body">
          <div>
            <h1 className="text-3xl font-bold text-center">LogIn</h1>
            <p className="text-center text-sm opacity-50">
              Please LogIn to get started
            </p>
            <div className="flex justify-center items-center my-4">
              <img className="mask mask-circle w-30 md:w-40" src="/logo.png" />
            </div>
          </div>
          <form onSubmit={handleLogin} className="fieldset">
            <p className="validator-hint hidden">Must be valid URL</p>
            {/* Email Input Field */}
            <label className="label">Email</label>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                name="email"
                placeholder="mail@site.com"
                required
              />
            </label>
            <p className="validator-hint hidden">Enter valid email address</p>
            {/* Password Input Field */}
            <label className="label">Password</label>
            <label className="input validator w-full relative">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                className="w-full pr-16"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-600"
                onClick={() => {
                  SetShowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <ImEye size={20} />
                ) : (
                  <ImEyeBlocked size={20} />
                )}
              </button>
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            {/* Forgot password */}
            <Link className="link link-hover">Forgot password?</Link>
            <button type="submit" className="btn btn-info mt-4 md:text-xl">
              LogIn
            </button>
          </form>
          <div>
            {/* Google LogIn */}
            <button
              //   onClick={handleGoogleLogIn}
              className="btn bg-white text-black border-[#e5e5e5] w-full md:text-xl"
            >
              <svg
                aria-label="Google logo"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              LogIn with Google
            </button>
          </div>
          <p className="text-center text-sm opacity-100 mt-2">
            Don't have any account?{" "}
            <NavLink to="/auth/register" className="text-red-500 font-bold">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
