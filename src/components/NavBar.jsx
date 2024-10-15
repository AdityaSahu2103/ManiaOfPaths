import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, logout } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ArrowDropDown, Menu } from "@mui/icons-material";
import { Carddata } from "./"; //Circular Import

const NavBar = ({ Scrolltoref, Scrolltotestimonial }) => {
  // state handlers
  const mentorjwt = localStorage.getItem("mentorjwt");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [more, setMore] = useState(false);
  const [scroll, setScroll] = useState(false);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-screen shadow-sm border bg-[#EEF5FF] text-[#8ca1b3] z-50 md:px-8 ${
          scroll ? "shadow-md" : "shadow-none"
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-9 py-3.5 gap-4">
          <div className="border-zinc-600 border border-b-4 border-r-8">
            <Link
              to="/"
              className="flex"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src="../../public/Logo.jpg" className="h-16 w-44 " alt="" />
            </Link>
          </div>
          <div className="items-center hidden lg:flex bg-">
            <ul className="flex flex-row items-center mr-6 space-x-6 list-none md:text-md  ">
              <li className="cursor-pointer px-3 py-2 hover:text-blue-500 text-black rounded-md   transition-transform ">
                <Link to="/">Home</Link>
              </li>
              {/* dropdown web..... */}
              <div className="flex flex-col">
                <li
                  onMouseEnter={() => setdropdown(!dropdown)}
                  className="cursor-pointer px-3 py-2 hover:text-blue-500 text-black rounded-md   transition-transform "
                >
                  <Link to={"/explore-projects"}> Explore Projects </Link>
                </li>
              </div>

              <li className="cursor-pointer px-3 py-2 hover:text-blue-500 text-black rounded-md   transition-transform ">
                <Link to={"/LeaderBoard"}> Leader Board </Link>
              </li>

              <li className="cursor-pointer px-3 py-2 hover:text-blue-500 text-black rounded-md   transition-transform ">
                <Link to="/Hackathons">Hackathons</Link>
              </li>

              <li className="cursor-pointer px-3 py-2 hover:text-blue-500 text-black rounded-md  transition-transform ">
                <Link to="/Pulse">Pulse</Link>
              </li>
              <div></div>
              {user ? (
                <li
                  className="cursor-pointer bg-[#4a7999] px-6 py-2 rounded-full text-white"
                  onClick={logout}
                >
                  Logout
                </li>
              ) : (
                <li className="ml-40 cursor-pointer bg-blue-500 opacity-90 hover:opacity-100 px-6 py-2 rounded-full text-white">
                  <Link to="/login"> Login </Link>
                </li>
              )}
              {mentorjwt ? null : (
                <li className="cursor-pointer bg-blue-500 opacity-90 hover:opacity-100 px-6 py-2 rounded-full text-white">
                  <Link to="/join-as-mentor">Join as Mentor</Link>
                </li>
              )}
            </ul>
          </div>

          {/* Mobile navbar ...... */}
          <div className="flex items-center justify-end lg:hidden">
            <button onClick={() => setToggle(!toggle)}>
              <Menu color="#00b8b3" />
            </button>

            {/* mobile menu...... */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-white shadow-2xl rounded-xl absolute top-5 items-center justify-center mt-10`}
            >
              <ul className="flex flex-col gap-4 list-none lg:hidden">
                <li className="transition duration-300 ease-in-out cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={() => {
                    setMore(!more);
                  }}
                  className="transition duration-300 ease-in-out cursor-pointer"
                >
                  <Link to={"/explore-projects"}> Explore Projects </Link>
                  
                </li>
                
                <li className="transition duration-300 ease-in-out cursor-pointerz">
                  <Link to={"/LeaderBoard"}> Leader Board </Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/Hackathons">Hackathons</Link>
                </li>

                <li
                  onClick={() => {
                    setdropdown(!dropdown);
                  }}
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <Link to="/Pulse">Pulse</Link>
                </li>

                <div
                  className={` space-y-4 text-sm ${
                    dropdown ? "block" : "hidden"
                  }`}
                >
                  <Link to={"/about"}>
                    <p value="cursor-pointer transition ease-in-out duration-300">
                      About Us
                    </p>
                  </Link>
                  {user ? (
                    <li className="cursor-pointer" onClick={logout}>
                      Logout
                    </li>
                  ) : (
                    <li className="cursor-pointer">
                      <Link to="/login"> Login </Link>
                    </li>
                  )}
                  {mentorjwt ? null : (
                    <li value="cursor-pointer transition ease-in-out duration-300">
                      <Link to="/join-as-mentor">Join as Mentor</Link>
                    </li>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default NavBar;
