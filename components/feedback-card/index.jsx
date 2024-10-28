import { Comments } from "@/helpers/icons";
import LikeButton from "../feedback-like";
import "./feedback-card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="cardDetail">
        <div className="like-and-comments">
          <LikeButton />
        </div>

        <div className="card-texts">
          <h4>Add tags for solutions</h4>
          <p>Easier to search for solutions based on a specific stack.</p>
          <p className="card-category">Enhancement</p>
        </div>
      </div>

      <div className="comments">
        <Comments />
        <p>2</p>
      </div>
    </div>
  );
}
