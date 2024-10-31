import { Comments } from "@/helpers/icons";
import LikeButton from "../feedback-like";
import "./feedback-card.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className="card">
      <div className="cardDetail">
        <div className="like-and-comments">
          <LikeButton />
        </div>

        <div className="card-texts">
          <Link className="card-link"  href={`/${1}`}>          
            <h4>Add tags for solutions</h4>
          </Link>
          <p>Easier to search for solutions based on a specific stack.</p>
          <p className="card-category">Enhancement</p>
        </div>
      </div>

      <div className="comments">
        <Comments />
        <p>2</p>
      </div>

      <div className="like-and-comments-mobile">
        <LikeButton />

        <div className="comments-mobile">
          <Comments />
          <p>2</p>
        </div>
      </div>
    </div>
  );
}
