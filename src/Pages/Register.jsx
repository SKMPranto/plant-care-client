import React, { use, useState } from "react";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Navigate, NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import Title from "../Components/Title";

const Register = () => {
    Title("Register | Plant-Care");
  // State to manage password visibility
  const { createUser, updateUserProfile } = use(AuthContext);
  const [showPassword, SetShowPassword] = useState(false);
  const [redirect,setRedirect]=useState(false);
  if(redirect) return <Navigate to="/" />

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    // Create user with email and password
    createUser(email, password)
      .then(() => {
        // Update user profile with name and photo URL
        updateUserProfile({ displayName: name, photoURL: url }).then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registration successful",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            setRedirect(true);
          });
        });
      })
      .catch(() => {});
    // form.reset();
  };

  return (
    <div className="hero md:min-h-fit lg:w-[30%] mx-auto shadow-gray-50 shadow-lg rounded-2xl md:my-20">
      <div className="card bg-base-300 w-full shrink-0 mx-auto">
        <div className="card-body">
          <div>
            <h1 className="text-3xl font-bold text-center">Register</h1>
            <p className="text-center text-sm opacity-50">
              Create an account to get started
            </p>
            <div className="flex justify-center items-center my-4">
              <img className="mask mask-circle w-30 md:w-40" src="/logo.png" />
            </div>
          </div>
          <form onSubmit={handleRegister} className="fieldset">
            {/* User Name Input Field */}
            <label className="label">Username</label>
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                name="name"
                required
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\- ]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
              />
            </label>
            <p className="validator-hint hidden">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>
            {/* Photo URL Input Field */}
            <label className="label">Photo URL</label>
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
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </g>
              </svg>
              <input
                type="url"
                name="url"
                required
                placeholder="https://"
                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                title="Must be valid URL"
              />
            </label>
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
            <button type="submit" className="btn btn-info mt-4 md:text-xl">
              Register
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
              Register with Google
            </button>
          </div>
          <p className="text-center text-sm opacity-100 mt-2">
            Already have an account?{" "}
            <NavLink to="/Auth/Login" className="text-blue-500 font-bold">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
