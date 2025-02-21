import { Route, Routes } from "react-router-dom";
import EventsCard from "./components/EventsCard";
import EventDetail from "./components/EventDetail";
import {
  About,
  BookForm,
  Home,
  How,
  Login,
  Mentor,
  ReadFull,
  Register,
  WhatsAppWidget,
  MentorApplication,
} from "./components";
import { Blog, EachBlog, MentorShipPage, ThankYou } from "./pages";
import { FindMentors } from "./features";
import Pulse  from "./components/Pulse";
import ExploreProjects from "./components/ExploreProjects/ExploreProjects.jsx";
import ProductDetail from './components/ProductDetail/ProductDetail';
import LeaderBoard from "./components/LeaderBoard.jsx";
import Hackathons from "./components/Hackathons.jsx";
import TeamJourney from './components/ProductDetail/TeamJourney';
import ProjectUploadForm from "./components/Admin/ProjectUploadForm.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<EventsCard />} />
        <Route path="/event/:id" element={<EventDetail />} />{" "}
        {/* Dynamic route */}
        <Route path="/Pulse" element={<Pulse />} />
        <Route path="/LeaderBoard" element={<LeaderBoard />} />
        <Route path="/Hackathons" element={<Hackathons />} />
        <Route path="/:id" element={<ReadFull />} />
        <Route path="/join-as-mentor" element={<Mentor />} />
        <Route path="/join-as-mentor/apply" element={<MentorApplication />} />
        <Route path="/session" element={<BookForm />} />
        <Route path="/session/thank-you" element={<ThankYou />} />
        <Route path="/how" element={<How />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogid" element={<EachBlog />} />
        <Route path="/mentors" element={<FindMentors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore-projects" element={<ExploreProjects />} />
        <Route path="/mentor-ship-page" element={<MentorShipPage />} />
        <Route path="/project/:id" element={<ProductDetail />} />
        <Route path="/team-journey/:contributorName"  element={<TeamJourney />} />
        <Route path="project-upload" element={<ProjectUploadForm/>}/>
      </Routes>
      <WhatsAppWidget />
    </>
  );
};

export default App;


