import { useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HackathonCard from "./HackathonCard";

const Hackathons = () => {
  const formref = useRef(null);
  const testimonialref = useRef(null);

  const Scrolltoref = () => {
    formref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const Scrolltotestimonial = () => {
    testimonialref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavBar
        Scrolltoref={Scrolltoref}
        Scrolltotestimonial={Scrolltotestimonial}
      />

      <div className="mx-6 px-4 md:px-8 md:mx-12 my-4 py-4 bg-blue-300 rounded text-center text-2xl text-white shadow-xl shadow-zinc-400 mb-12 ">
        Here you can Explore some of the latest Hackathons and Competitions
      </div>
      <HackathonCard />
      <Footer Scrolltoref={Scrolltoref} />
    </div>
  );
};

export default Hackathons;
