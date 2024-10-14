import bgImage from "../../public/HomeImg.png";

function WelcomePage() {
  return (
    <div className="flex justify-center md:justify-evenly flex-col md:flex-row w-full lg:h-[600px]">
      <div className="my-auto w-full md:w-1/2 p-4 md:p-8 flex flex-col">
        <span
          className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text
        bg-gradient-to-tr from-blue-500 to-red-600"
        >
          Path Mania Your perfect learning partner
        </span>
        <span className="text-2xl font-bold mt-4 lg:mt-10">
          Start learning today for free, register today pay later
        </span>
        <div className="flex flex-row lg:mt-8">
          <button className="text-xl  rounded-md w-32 h-12 m-4 bg-blue-500 p-2 border-2 hover:bg-white text-white hover:text-blue-500 font-semibold">
            Register
          </button>
          <button className="text-xl w-32 h-12 m-4 bg-blue-500 p-2 rounded-md border-2 hover:bg-white text-white hover:text-blue-500 font-semibold">
            Explore
          </button>
        </div>
      </div>

      <div className="mx-2 rounded-md mt-28 w-full lg:w-[650px] md:w-1/2 shadow-lg h-80 lg:h-[400px]">
        <img
          src={bgImage}
          alt="background"
          className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
