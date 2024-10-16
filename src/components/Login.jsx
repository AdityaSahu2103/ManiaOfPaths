import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Footer, NavBar } from "./";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <NavBar />
      <div className="">
        <br />
        <br />
        <br />
      </div>
      <div className="flex justify-center items-center bg-blue-100 pt-14">
        <div className="flex flex-col md:flex-row justify-center w-full bg-blue-100">
          <div className="myform w-full md:w-1/2 flex justify-center items-center bg-white">
            <form className="login p-5 w-[370px]" onSubmit={handleLogin}>
              <h1 className="text-4xl mb-3 font-semibold">Login</h1>
              <p className="mb-10 text-sm font-semibold text-gray-500">
                See your growth and get resulting support!
              </p>
              {/* Email Sign-in Section */}
              <div className="relative flex py-1 items-center bg-white mt-5">
                <div className="flex-grow border-t-2 border-gray-300"></div>
                <span className="flex-shrink mx-2 text-gray-500 text-sm font-semibold">
                  Sign in with email
                </span>
                <div className="flex-grow border-t-2 border-gray-300"></div>
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

              <div>
                <button
                  type="submit"
                  className="text-white bg-[#4a7999] hover:bg-[#3c6e8f] font-medium text-sm px-5 py-2.5 mb-2 w-full rounded-full mt-5 shadow-md shadow-gray-400"
                >
                  Login
                </button>
              </div>
              <div className="text-sm">
                Not registered yet?
                <Link to="/register" className="font-bold text-[#4a7999] ml-1">
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-blue-100">
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default Login;
