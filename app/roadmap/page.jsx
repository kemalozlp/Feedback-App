import RoadmapLists from "@/components/roadmap-lists";
import "./roadmap.css";
import { LessIcon } from "@/helpers/icons";
import Link from "next/link";
import AddFeedbackButton from "@/components/add-feedback-buttons";
import { getFeedback } from "@/utils/fetch";

export default async function Roadmap() {
  const data = await getFeedback();

  return (
    <div className="roadmap">
      <div className="roadmap-header">
        <div className="header-navigation">
          <Link href="/">
            <LessIcon />
            Go Back
          </Link>

          <h3 className="roadmap-title">Roadmap</h3>
        </div>

        <AddFeedbackButton/>
      </div>

      <RoadmapLists data={data}/>
    </div>
  );
}
