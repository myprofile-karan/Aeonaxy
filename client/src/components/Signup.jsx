import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SideImg from "../assets/side.png"

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [validationErrors, setValidationErrors] = useState();
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate()
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if(name=="" || username=="" || email=="" || password==""){
        setValidationErrors(true);
      }

      // check user is already existed ot not
      const existingUser = await axios.get(
        `https://aeonaxy-c8zp.onrender.com/api/check-user/${username}`
      );

      if (existingUser.data.exists) {
        setUserExists(true);
        toast.error("user already exists!");
      } else {
        const response = await axios.post("https://aeonaxy-c8zp.onrender.com/api/signup", {
          name,
          username,
          email,
          password,
          termsAccepted,
        });
        console.log(response);
        toast.success("signup successful");
        navigate(`/create-profile/${username}`);
        setValidationErrors();
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
        setTermsAccepted(false);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden items-center justify-center">
      <div className="w-2/5 signup-left hidden md:flex">
        <div className="signup-image w-[100%] h-[100%] ">
          <img
            src={SideImg}
            className="h-screen w-full onject-cover"
            alt=""
          />
        </div>
      </div>
      <div className="signup-right md:w-3/5 w-full h-full flex items-center relative">
        <div className="navigate absolute top-4 right-4 sm:top-7 sm:right-7">
          <span>
            Already a mamber?{" "}
            <Link to="/login" className="text-blue-600">
              Sign in
            </Link>
          </span>
        </div>
        <form className="w-[100%] sm:w-[80%] md:w-[85%] lg:w-[65%] mx-auto self-center bg-transparent p-6 rounded-md flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Sign up to Dribble
          </h2>
          {userExists && <p className="text-red-600 text-sm">* Username has already been taken.</p>}
          <div className="grid gap-4 md:mt-8 mt-4">
            <div className="names grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1 items-center gap-1">
                <label
                  htmlFor="name"
                  className="text-gray-800 font-bold text-xs md:text-[1.1rem]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`md:p-2 p-2 border rounded-md focus:outline-none ${
                    validationErrors ? "bg-[#feeeee]" : "bg-[#f3f3f3]"
                  }`}
                  required
                />
              </div>

              <div className="grid grid-cols-1 items-center gap-1">
                <div className="label flex gap-1">
                {userExists && (
                  <i className="fa-solid fa-triangle-exclamation text-sm text-red-600"></i>
                )}
                <label
                  htmlFor="username"
                  className="text-gray-800 font-bold text-sm md:text-[1.1rem]"
                >
                  Username
                </label>
                </div>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`md:p-2 p-2 border  rounded-md focus:outline-none ${
                      userExists ? "bg-[#feeeee] text-red-600" : "bg-[#f3f3f3]" 
                  }  ${validationErrors && "bg-[#feeeee]"} `}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 items-center gap-1">
              <label
                htmlFor="email"
                className="text-gray-800 font-bold text-sm md:text-[1.1rem]"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`md:p-2 p-2 border rounded-md focus:outline-none ${
                  validationErrors ? "bg-[#feeeee]" : "bg-[#f3f3f3]"
                }`}
                required
              />
            </div>

            <div className="relative grid grid-cols-1 items-center gap-1">
              <label
                htmlFor="password"
                className="text-gray-800 font-bold text-sm md:text-lg"
              >
                Password
              </label>
              <input
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="6+ characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`md:p-2 p-2 border rounded-md focus:outline-none ${
                  validationErrors ? "bg-[#feeeee]" : "bg-[#f3f3f3]"
                }`}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-0 text-sm"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>

            <div className="relative flex items-start gap-1">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className={`mr-2 mt-1 md:mt-2 border-2 border-red-500`}
              />
              <label
                htmlFor="terms"
                className="text-gray-800 font-semibold text-sm md:text-[1rem]"
              >
                Creating an account means you're okay with our{" "}
                <span className="text-blue-600">
                  Terms and Services, Privacy Policy{" "}
                </span>{" "}
                and our default{" "}
                <span className="text-blue-600">Notification Settings.</span>
              </label>
              {validationErrors && (
                <p className="text-red-500 text-xs block">
                  *required
                </p>
              )}
            </div>
          </div>
          <button
            onClick={handleSignup}
            className="text-white bg-[#EA4B8B] py-2 sm:w-[40%] rounded-md mt-6"
          >
            Create account
          </button>
        </form>{" "}
      </div>
    </div>
  );
};

export default Signup;
