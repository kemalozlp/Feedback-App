import Image from "next/image";
import Header from "@/components/header";
import AddFeedbackButton from "@/components/add-feedback-buttons";
import SideBar from "@/components/sidebar";
import CardList from "@/components/feedback-card-lists";
import "./user-home.css";

export default function UserHome() {
  return (
    <div className="container">
      <SideBar />

      <div className="main">
        <Header />

        <div className="empty-container">
          <Image width={130} height={136} src="/image/bosmes.png" alt="" />

          <div className="empty-texts">
            <h3>There is no feedback yet.</h3>
            <p>
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
          </div>

          <AddFeedbackButton />
        </div>

        <div className="card-lists">
          <CardList />
        </div>
      </div>
    </div>
  );
}
