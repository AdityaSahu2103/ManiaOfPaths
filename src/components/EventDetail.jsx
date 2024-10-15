import { useLocation, useNavigate } from "react-router-dom";

const EventDetail = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function
  const event = location.state; // Access event details from state

  return (
    <div className="max-w-5xl mx-auto my-8 p-6 bg-white drop-shadow-2xl rounded-lg border-2 h-full">
      <div className="flex justify-end">
        <button
          className="bg-blue-600 p-2 rounded-lg text-white mb-4"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          Go Back
        </button>
      </div>
      <div className="mb-4 h-[650px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[650px] object-cover rounded-md"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>
      <h2 className="text-2xl text-gray-600 mb-4">
        Organized by: {event.organizer}
      </h2>
      <p className="text-lg text-gray-700 mb-4">{event.details}</p>
      <div className="text-lg text-gray-700 mb-4">Date: {event.date}</div>
      <a
        href={event.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Event Link
      </a>
    </div>
  );
};

export default EventDetail;
