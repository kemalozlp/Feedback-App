import { getCategories, getFeedback } from "@/utils/fetch";
import CategoryBox from "./category-box";
import FrontendMentorBox from "./frontend-mentor-box";
import RoadmapBox from "./roadmap-box";
import "./sidebar.css";

export default async function SideBar() {
  const categoryData = await getCategories();  
  const categories = categoryData.map((x) => x.categoryName);

  const feedbackData = await getFeedback();

  const plannedData = feedbackData.filter(x => x.status == 1).length
  const progressData = feedbackData.filter(x => x.status == 2).length
  const liveData = feedbackData.filter(x => x.status == 3).length

  return (
    <div className="sidebar">
      <FrontendMentorBox />
      <CategoryBox categories={categories} />
      <RoadmapBox plannedData={plannedData} progressData={progressData} liveData={liveData}/>
    </div>
  );
}
