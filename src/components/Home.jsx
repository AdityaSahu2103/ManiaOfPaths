import { useRef } from "react";
import {
  NavBar,
  Footer,
  HeroSection,
  Tagline,
  Why,
  Quote,
  LatestBlogs,
  Steps,
  TeamCard,
  Appointment,
  Form,
  Transformation,
  Card,
  FirstCard,
  Events,
} from "./";
import { Authentic, Community, confidential, oneonone, Top } from "../assets";
import Welcome from "./Welcome";
// import { MGP } from "../pages";

const Home = () => {
  const formref = useRef();
  const testimonialref = useRef();

  const Scrolltoref = () => {
    formref.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const Scrolltotestimonial = () => {
    testimonialref.current.scrollIntoView({
      behaviour: "smooth",
    });
  };

  const Data = [
    {
      image: oneonone,

      title: "One on One Mentorship",
    },
    {
      image: Top,
      title: "Top Mentors",
    },
    // {
    //   image: "",
    //   title: "Experienced On-Site Mentors",
    // },
    {
      image: confidential,
      title: "Confidential Conversations",
    },
    {
      image: Community,
      title: "Commutiy Support",
    },
    {
      image: Authentic,
      title: "Authentic Guidance",
    },
  ];

  const Data2 = [
    {
      image: oneonone,

      title: "Safe Environment",
    },
    {
      image: Top,
      title: "Supportive Community",
    },
    // {
    //   image: "",
    //   title: "Experienced On-Site Mentors",
    // },
    {
      image: confidential,
      title: "Monetise Expertise",
    },
    {
      image: Community,
      title: "Exposure and Recognition",
    },
    {
      image: Authentic,
      title: "Fulfillment and Satisfaction",
    },
  ];

  return (
    <section className="overflow-x-clip">
      <NavBar
        Scrolltoref={Scrolltoref}
        Scrolltotestimonial={Scrolltotestimonial}
      />
      <div className="mx-6 px-4 md:px-8 md:mx-12  bg-blue-300 rounded text-center text-2xl text-white shadow-xl shadow-zinc-400 mb-12 ">
        <br />
      </div>
      <Welcome />
      {/* <HeroSection Scrolltoref={Scrolltoref} /> */}
      <FirstCard />
      {/* <Tagline /> */}
      {/* <Card /> */}
      <Why Data={Data} />
      <Steps />
      <Transformation testimonialref={testimonialref} />
      <TeamCard />
      {/* <MGP page={"home"} /> */}
      <Events Scrolltoref={Scrolltoref} />
      {/* <Quote /> */}
      {/* <LatestBlogs /> */}
      {/* <Appointment /> */}
      <div ref={formref}>
        <Form />
      </div>
      <Footer Scrolltoref={Scrolltoref} />
    </section>
  );
};

export default Home;
