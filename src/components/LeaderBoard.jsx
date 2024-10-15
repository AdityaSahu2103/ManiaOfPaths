import NavBar from "./NavBar";
import Footer from "./Footer";

const LeaderBoard = () => {
  return (
    <>
      <NavBar />

      <h1 className="bg-blue-900 py-4 text-center text-2xl md:text-3xl font-bold mx-4 md:mx-10 rounded-lg text-white">
        Leader Board
      </h1>

      <div className="h-auto md:h-[820px] mt-10 mx-4 md:mx-8 flex flex-col lg:flex-row">
        {/* Left Section - Profile */}
        <div className="w-full lg:w-1/3 h-auto lg:h-[540px] bg-blue-200 mx-0 lg:mx-10 rounded-lg p-6 text-center flex flex-col">
          <div className="mx-auto rounded-full h-28 w-28 overflow-hidden">
            <img
              className="object-cover w-full h-full rounded-full"
              src="./profile.png"
            />
          </div>
          <h1 className="text-xl md:text-2xl mt-4">Name: {"Anuj Erande"}</h1>
          <h1 className="text-lg md:text-xl mt-1">Rank: {"3/1132"}</h1>
          <h1 className="text-lg md:text-xl mt-1">Projects: {"4"}</h1>
          <h1 className="text-lg md:text-xl mt-1">Contributions: {"13"}</h1>

          <div>
            <h1 className="text-xl md:text-2xl mt-8 md:mt-12 text-blue-800">
              Standard Project:
            </h1>
            <p className="text-md md:text-lg p-4 md:p-8 text-zinc-900">
              Application of Machine Learning in prediction of Success of Rocket
              in Space
            </p>
          </div>
        </div>

        {/* Right Section - Leaderboard */}
        <div className="w-full lg:w-full grid grid-cols-2 sm:grid-cols-5 gap-4 bg-blue-100 p-4 md:p-6 rounded-lg shadow-lg mt-8 lg:mt-0">
          {/* Headers */}
          <div className="font-bold text-center bg-blue-200 p-2 rounded pt-6 sm:pt-12 text-lg sm:text-2xl text-blue-950">
            Rank
          </div>
          <div className="font-bold text-center bg-blue-200 p-2 rounded pt-6 sm:pt-12 text-lg sm:text-2xl text-blue-950">
            Name
          </div>
          <div className="hidden sm:block font-bold text-center bg-blue-200 p-2 rounded pt-6 sm:pt-12 text-lg sm:text-2xl text-blue-950">
            Projects
          </div>
          <div className="hidden sm:block font-bold text-center bg-blue-200 p-2 rounded pt-6 sm:pt-12 text-lg sm:text-2xl text-blue-950">
            Contribution
          </div>
          <div className="hidden sm:block font-bold text-center bg-blue-200 p-2 rounded pt-6 sm:pt-12 text-lg sm:text-2xl text-blue-950">
            Points
          </div>

          {/* Second row */}
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            1
          </div>
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            Kunal Kushwaha
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            5
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            17
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            1250
          </div>

          {/* Third row */}
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            2
          </div>
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            Raj Vikramaditya
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            6
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            14
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            1170
          </div>

          {/* Fourth row */}
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            3
          </div>
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            Anuj Erande
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            4
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            13
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            1090
          </div>

          {/* Fifth row */}
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            4
          </div>
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            Shraddha Khapra
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            6
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            12
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            1080
          </div>

          {/* Sixth row */}
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            5
          </div>
          <div className="text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            Harris Ali Khan
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            3
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            10
          </div>
          <div className="hidden sm:block text-center p-2 bg-white border rounded pt-6 sm:pt-12">
            1060
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LeaderBoard;
