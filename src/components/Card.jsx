import { Link } from "react-router-dom";
import { Carddata } from "./";
import { howMentorshipHelps } from "../assets";

const Card = () => {
  return (
    <div className="grid grid-cols-1 gap-5 px-5 mt-10 md:p-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {Carddata.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/${item.Title}`}
            state={{
              title: item.Title,
              Background: item.Background,
              Blog: item.Blog,
            }}
          >
            <div className="flex justify-center w-96 h-96  ease-in-out rounded-lg cursor-pointer hover:shadow-md shadow-slate-50 scroll-smooth transition-transform duration-300 transform hover:scale-105 ">
              <div className=" border-2 border-black rounded-lg flex flex-col items-center  bg-[#EEF7FF]  shadow-lg hover:shadow-xl  hover:shadow-gray-300 bg-cover bg-center  ">
                <div>
                  <img
                    src={item.image}
                    className=" h-56 w-96  rounded-lg border-black dark:border-white"
                  />
                </div>
                <div className="  h-36 w-96   flex flex-col items-center justify-center  text-white  ">
                  <h1 className="text-3xl text-center  font-kanit  text-[black] border-cyan-500 rounded-md">
                    {item.Title}
                  </h1>
                  <p className="text-center ml-2 mt-[-2] lg:h-20 text-[#7AB2B2] font-kanit leading-5 font-semibold">
                    {item.para}
                  </p>
                  <p className="cursor-pointer text-xl text-center w-32 mt-2 text-black  font-kanit bg-[#EEF5FF]  hover:bg-[#7AB2B2] border-[2px] border-black border-solid rounded-2xl">
                    Read More
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const FirstCard = () => {
  return (
    <div className="px-4 bg-[#EEF5FF]  w-[100vw] mx-auto">
      <section className="my-28 animate-slidein700">
        <div className="items-center px-3 py-5 md:flex md:flex-row-reverse md:justify-around md:space-x-5 md:px-5 ">
          <div className="flex flex-col order-2 py-5 space-y-8 md:text-left overflow-hidden">
            <h1 className="animate-typewriter text-2xl text-black lg:text-3x1 md:text-4xl md:max-w-[50vw] leading-8  font-bold ">
              How will Mentorship help you?
            </h1>
            <div className=" text-[#176B87] md:max-w-[60vw] lg:text-3x1 leading-6 md:leading-7 font-kanit ">
              <p className="text-base text-pretty ">
                In our platform, mentorship is the key to unlocking your full
                potential. With guidance from experienced seniors and alumni,
                you'll gain insider knowledge on everything from must-attend
                college events to exclusive hackathons. Mentors will help you
                navigate the overwhelming choices in skill-building, giving you
                clear roadmaps for mastering tech stacks like web development,
                DSA, and machine learning. Beyond technical skills, they'll
                share real-world insights on internships, placements, and how to
                make the most of your time on campus. Whether it's preparing for
                competitions or building your project portfolio, your mentor
                will be your personalized guide to success!
              </p>
              {/* <h5 className="text-black text-x3 underline font-bold inline">
                
                Guidance :
              </h5>
              <p className="text-base text-pretty ">
                Mentors offer personalized advice and direction tailored to the
                mentee's needs and goals.
              </p>
              <h5 className="text-black text-x3 underline font-bold  ">
                Skill Development :
              </h5>
              <p className="text-base text-pretty ">
                Mentors provide opportunities for mentees to develop new skills
                and refine existing ones through practical experience and
                feedback.
              </p>
              <h5 className="text-black text-x3 underline font-bold ">
                {" "}
                Overcoming Obstacles :
              </h5>
              <p className="text-base text-pretty ">
                Mentors help mentees navigate challenges by sharing their own
                experiences and strategies for overcoming similar obstacles.
              </p>
              <h5 className="text-black text-x3 underline font-bold  ">
                Personal Growth :
              </h5>
              <p className="text-base text-pretty  ">
                Mentorship fosters not only professional development but also
                personal growth by nurturing qualities like resilience,
                adaptability, and self-awareness.
              </p> */}
            </div>
          </div>
          <div className="my-5 md:my-0">
            <img
              className="md:max-w-[40vw] mx-auto rounded-lg"
              alt="hero"
              src={howMentorshipHelps}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export { Card, FirstCard };
