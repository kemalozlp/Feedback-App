import Image from "next/image";
import "./header.css";
import AddFeedbackButton from "../add-feedback-buttons";
import { getFeedback } from "@/utils/fetch";

export default async function Header() {
  const data = await getFeedback();

  return (
    <header className="header">
      <div className="suggestions-counter">
        <Image width={23} height={24} src="/image/logo.png" alt="" />
        <p>
          <span>{data.length} </span>Suggestions
        </p>
      </div>

      <div className="short-by">
        <label htmlFor="">Sort by :</label>

        <select id="" name="" form="">
          <option>Most Upvotes</option>
          <option>Least Upvotes</option>
          <option>Most Comments</option>
          <option>Least Comments</option>
        </select>
      </div>

      <AddFeedbackButton />
    </header>
  );
}
