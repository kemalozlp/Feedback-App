import Card from "@/components/feedback-card";
import Comments from "@/components/Comments";
import GoBack from "@/components/go-back";
import AddComment from "@/components/add-comments";
import EditFeedbackButton from "@/components/edit-feedback-button";
import "./detail-page.css";

export default function FeedbackDetailPage() {
    return (
        <div className="detail-page">
            <div className="details-header">
                <GoBack />
                <EditFeedbackButton />
            </div>

            <Card />
            <Comments />
            <AddComment />
        </div>
    )
}