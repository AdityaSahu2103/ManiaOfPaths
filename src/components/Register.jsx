import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../config/firebase";
import { Footer, NavBar } from "./";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import SvgIcon from "@mui/material/SvgIcon";
import { onboardingBg, slider1, slider2, slider3 } from "../assets";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  const slides = [slider1, slider2, slider3];

  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const autoSlide = true;
  const autoSlideInterval = 3000;

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/mentors");
  }, [user, loading, navigate]);

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center bg-blue-100 pt-14">
        <div className="flex flex-col md:flex-row justify-center w-full bg-blue-100">
          <div className="myform w-full md:w-1/2 flex justify-center items-center bg-white">
            <form className="login p-5 w-[370px]" onSubmit={handleRegister}>
              <h1 className="text-4xl mb-3 font-semibold">Sign Up</h1>
              <p className="mb-10 text-sm font-semibold text-gray-500">
                See your growth and get resulting support!
              </p>

              <div className="relative flex py-1 items-center bg-white mt-5">
                <div className="flex-grow border-t-2 border-gray-300"></div>
                <span className="flex-shrink mx-2 text-gray-500 text-sm font-semibold">
                  or Sign in with email
                </span>
                <div className="flex-grow border-t-2 border-gray-300"></div>
              </div>

              <div className="mt-5 mb-5">
                <div className="font-bold text-gray-600 mb-1">Name*</div>
                <input
                  type="text"
                  className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="mt-5 mb-5">
                <div className="font-bold text-gray-600 mb-1">Email*</div>
                <input
                  type="email"
                  className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="mb-5">
                <div className="font-bold text-gray-600 mb-1">Password*</div>
                <input
                  type="password"
                  className="login__textBox p-3 rounded-full w-full border-solid border border-gray-200 shadow-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex">
                  <input
                    type="checkbox"
                    required
                    className="w-5 h-4 mt-1 mr-1"
                    defaultChecked
                  />
                  <div className="text-sm font-bold text-gray-600">
                    I agree to the{" "}
                    <span className="text-[#4a7999]">Terms & Conditions</span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white bg-[#4a7999] hover:bg-[#3c6e8f] font-medium text-sm px-5 py-2.5 me-2 mb-2 w-full rounded-full mt-5 shadow-md shadow-gray-400"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-sm">
                Already have an Account?
                <Link to="/login" className="font-bold text-[#4a7999] ml-1">
                  Login
                </Link>
              </div>
            </form>
          </div>
          <div
            className={`photosec bg-[url(${onboardingBg})] bg-center w-full md:w-1/2 flex justify-center items-center flex-col`}
            style={{
              backgroundImage: `url(${onboardingBg})`,
            }}
          >
            <div className="overflow-hidden relative m-10 h-[320px] w-[260px] rounded-lg shadow-lg shadow-gray-700">
              <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {slides.map((s, index) => (
                  <img
                    key={index}
                    src={s}
                    className="h-[400px] object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prev}
                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                  <FaCircleChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                  <FaCircleChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="flex flex-col pb-5 ">
              <div className="pb-3 w-[200px] text-white font-bold text-2xl text-center">
                Turn your ideas into reality
              </div>
              <div className="pb-8 text-white font-semibold text-center">
                Consistent quality
              </div>
              <div className="dots">
                <div className="flex items-center justify-center gap-2">
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      className={`transition-all w-2 h-2 bg-white rounded-full${
                        curr === i ? "p-1" : "bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
