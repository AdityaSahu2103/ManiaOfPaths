import { Link } from "react-router-dom";

const events = [
  {
    id: 1, // Unique ID for each event
    title: "ENIGMA 3.0",
    organizer: "ACM VIIT",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor expedita saepe nisi, voluptatum at assumenda odit? Nostrum iste earum reiciendis!",
    date: "14th October 2024",
    link: "https://www.google.com",
    image: "../../public/Events/Enigma.jpg", // Image path for the event
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "TechnoFest 2024",
    organizer: "CSI Chapter",
    details:
      "This is a grand event to showcase emerging tech solutions. Open to all students!",
    date: "20th October 2024",
    link: "https://www.techfest.com",
    image: "../../public/Events/Technofea.png",
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    title: "CODING FORUM LEAGUE",
    organizer: "Coding Forum VIIT",
    details:
      "This is a grand event to showcase Your Coding Talents. Open to all students!",
    date: "16 October 2024",
    link: "https://www.techfest.com",
    image: "../../public/Events/Technofea.png",
    bgColor: "bg-yellow-500",
  },
  {
    id: 4,
    title: "INNOVATION FEST 2024",
    organizer: "VU-BU CENTRE OF EXCELLENCE",
    details:
      "This is a grand event to showcase Your Design Thinking Talents Open to all students!",
    date: "18 October 2024",
    link: "https://www.techfest.com",
    image: "../../public/Events/Technofea.png",
    bgColor: "bg-rose-500",
  },

  {
    id: 5,
    title: "VIZ-A-THON 3.0",
    organizer: "ARTIFICIAL INTELLIGENS STUDENT ASSOCIATION",
    details:
      "This is a grand event to showcase Your Coding Talents. Open to all students!",
    date: "22 October 2024",
    link: "https://www.techfest.com",
    image: "../../public/Events/Technofea.png",
    bgColor: "bg-violet-400",
  },
  {
    id: 6,
    title: "B-Plan",
    organizer: "Entrepreneurship Development cell",
    details:
      "This is a grand event to showcase Your Business Talents . Open to all students!",
    date: "28 October 2024",
    link: "https://www.techfest.com",
    image: "../../public/Events/Technofea.png",
    bgColor: "bg-zinc-500",
  },

  // Add more events...
];

const EventsCard = () => {
  return (
    <div className="mx-6 my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Link
          key={event.id}
          to={`/event/${event.id}`} // dynamic route for each event
          state={event} // pass the entire event object as state
          className={`px-4 py-10 rounded text-white shadow-xl shadow-zinc-500 ${event.bgColor}`}
        >
          <div className="text-3xl font-kanit text-white mb-4">
            {event.title}
          </div>
          <div className="text-yellow-100 text-2xl">
            Organized by: {event.organizer}
          </div>
          <div className="text-white text-lg">
            Details: {event.details.slice(0, 50)}...
          </div>{" "}
          {/* Shortened details */}
          <div className="text-white text-lg">Date: {event.date}</div>
        </Link>
      ))}
    </div>
  );
};

export default EventsCard;
