import CategoryBox from "./category-box";
import FrontendMentorBox from "./frontend-mentor-box";
import RoadmapBox from "./roadmap-box";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <FrontendMentorBox />
      <CategoryBox />
      <RoadmapBox />
    </div>
  );
}
