import RoadmapLists from "@/components/roadmap-lists";
import "./roadmap.css";
import { Less } from "@/helpers/icons";
import Link from "next/link";
import AddFeedbackButton from "@/components/add-feedback-buttons";

export default function Roadmap() {
  return (
    <div className="roadmap">
      <div className="roadmap-header">
        <div className="header-navigation">
          <Link href="/">
            <Less />
            Go Back
          </Link>

          <h3 className="roadmap-title">Roadmap</h3>
        </div>

        <AddFeedbackButton/>
      </div>

      <RoadmapLists />
    </div>
  );
}
