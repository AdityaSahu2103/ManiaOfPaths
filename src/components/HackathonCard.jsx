import { Link } from "react-router-dom";

const hackathons = [
  {
    id: 1,
    title: "L'Oréal Hackathon offering internships and placements",
    content:
      "Hi Team,\n\nL'Oréal wants to hire students from your institute for full-time roles & internship opportunities.\n\nSalary: INR 28 LPA* for full-time roles, and up to INR 1.6 Lakh/Month for Internship Opportunities\nEligibility: All full-time undergraduate & postgraduate students from any discipline (Batch 2025 & 2026)\nNo Coding Required",
    applicationLink: "https://bit.ly/loreal-sustainability-challenge-2024",
    deadline: "29th October 2024",
    bgColor: "bg-purple-500",
  },
  {
    id: 2,
    title: "Juspay Hackathon",
    content:
      "Last 5 days left to apply!\n\nJuspay wants to hire students from your institute as Software Development Engineers (SDEs) & full-time interns.\n\nSalary: Upto INR 27 LPA for SDE, and INR 40,000/Month for Tech Interns\nEligibility: B.E./B.Tech. Students - Across Branches (Batch 2024 & 2025)",
    applicationLink: "https://bit.ly/juspay-hiring-challenge-2024",
    deadline: "18th September 2024",
    bgColor: "bg-red-400",
  },
];

const HackathonCard = () => {
  return (
    <div className="mx-6 my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {hackathons.map((hackathon) => (
        <Link
          key={hackathon.id}
          to={`/hackathon/${hackathon.id}`} // dynamic route for each hackathon
          state={hackathon} // pass the entire hackathon object as state
          className={`px-4 py-10 rounded text-white shadow-xl shadow-zinc-500 transition-transform transform hover:scale-105 hover:shadow-2xl ${hackathon.bgColor}`}
        >
          <div className="text-3xl font-kanit text-white mb-4 drop-shadow-md transition-colors duration-300 hover:text-yellow-300">
            {hackathon.title}
          </div>
          <div className="text-white text-lg mb-2">
            {hackathon.content.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="text-white text-lg">
            Application Link:{" "}
            <a
              href={hackathon.applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400"
            >
              {hackathon.applicationLink}
            </a>
          </div>
          <div className="text-orange-400 text-lg">
            Deadline: {hackathon.deadline}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HackathonCard;
