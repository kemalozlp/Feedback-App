import Comments from "@/components/Comments";
import GoBack from "@/components/go-back";
import AddComment from "@/components/add-comments";
import EditFeedbackButton from "@/components/edit-feedback-button";
import { CommentsIcon } from "@/helpers/icons";
import LikeButton from "@/components/feedback-like";
import { getCommentsById, getFeedbackById } from "@/utils/fetch";
import "@/components/feedback-card-lists/feedback-card-list.css"
import "./detail-page.css";

export default async function FeedbackDetailPage({ params }) {
  const id = params.id;

  const feedbackData = await getFeedbackById(id);
  const commentsData = await getCommentsById(id);

  return (
    <div className="detail-page">
      <div className="details-header">
        <GoBack />
        <EditFeedbackButton />
      </div>

      <div className="card">
        <div className="cardDetail">
          <div className="like-and-comments">
            <LikeButton />
          </div>

          <div className="card-texts">
            <h4>{feedbackData.title}</h4>
            <p>{feedbackData.detail}</p>
            <p className="card-category">{feedbackData.category}</p>
          </div>
        </div>

        <div className="comments">
          <CommentsIcon />
          <p>{feedbackData.voteCount}</p>
        </div>

        <div className="like-and-comments-mobile">
          <LikeButton />

          <div className="comments-mobile">
            <CommentsIcon />
            <p>{feedbackData.commentCount}</p>
          </div>
        </div>
      </div>

      <Comments id={id} commentsData={commentsData} />
      <AddComment />
    </div>
  );
}
