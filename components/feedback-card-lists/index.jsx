import LikeButton from "../feedback-like";
import Link from "next/link";
import { getFeedback } from "@/utils/fetch";
import { CommentsIcon } from "@/helpers/icons";
import "./feedback-card-list.css";

export default async function CardList() {
  const data = await getFeedback();

  return (
    <>
      {data.map((x, i) => (
        <div className="card" key={i}>
          <div className="cardDetail">
            <div className="like-and-comments">
              <LikeButton />
            </div>

            <div className="card-texts">
              <Link className="card-link" href={`/${x.postId}`}>
                <h4>{x.title}</h4>
              </Link>
              <p>{x.detail}</p>
              <p className="card-category">{x.category}</p>
            </div>
          </div>

          <div className="comments">
            <CommentsIcon />
            <p>{x.voteCount}</p>
          </div>

          <div className="like-and-comments-mobile">
            <LikeButton />

            <div className="comments-mobile">
              <CommentsIcon />
              <p>{x.commentCount}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
