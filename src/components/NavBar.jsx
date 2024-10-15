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
          <div className="border-zinc-500 border border-b-4 border-r-8">
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
                  Explore Projects
                </li>

                {/* options....... */}
                <div
                  onMouseEnter={() => setdropdown(true)}
                  onMouseLeave={() => setdropdown(false)}
                  className={`${
                    dropdown ? "block" : "hidden"
                  } absolute bg-white shadow-md p-4 mt-8 rounded-lg`}
                >
                  <ul className="grid grid-cols-3 gap-3 font-normal ">
                    {Carddata.map((item, index) => {
                      return (
                        <li
                          className=" duration-300 ease-in-out cursor-pointer px-3 py-2 hover:text-blue-500  text-black rounded-md   transition-transform "
                          key={index}
                        >
                          {" "}
                          <Link
                            key={index}
                            to={`/${item.Title}`}
                            state={{
                              title: item.Title,
                              Background: item.Background,
                              Blog: item.Blog,
                            }}
                          >
                            {item.Title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <li className="cursor-pointer px-3 py-2 hover:text-blue-500 text-black rounded-md   transition-transform ">
                <Link to={"/how"}> Leader Board </Link>
              </li>

              <li className="cursor-pointer px-3 py-2 hover:text-blue-500 text-black rounded-md   transition-transform ">
                <Link to="/mentors">Hackathons</Link>
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
                  Explore Projects
                  <ArrowDropDown />
                </li>
                <div
                  className={`space-y-4 text-sm ${more ? "block" : "hidden"}`}
                >
                  <ul className="grid gap-3 font-normal ">
                    {Carddata.map((item, index) => {
                      return (
                        <li
                          className="transition duration-300 ease-in-out cursor-pointer"
                          key={index}
                        >
                          {" "}
                          <Link
                            key={index}
                            to={`/${item.Title}`}
                            state={{
                              title: item.Title,
                              Background: item.Background,
                              Blog: item.Blog,
                            }}
                          >
                            {item.Title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <li className="transition duration-300 ease-in-out cursor-pointerz">
                  <Link to={"/how"}>Leader Board</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/mentors"> Hackathons </Link>
                </li>

                <li
                  onClick={() => {
                    setdropdown(!dropdown);
                  }}
                  className="flex items-center space-x-1 cursor-pointer"
                >
                  <h1>Buzz Platform</h1>
                  <ArrowDropDown />
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
                  <p value="cursor-pointer transition ease-in-out duration-300">
                    <Link to={"/blog"}>Blog</Link>
                  </p>
                  <p value="cursor-pointer transition ease-in-out duration-300">
                    <Link to={"https://community.mentorheal.com/"}>
                      community
                    </Link>
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
