"use client";

import { useState } from "react";
import "./add-comment.css";
import { postComments } from "@/utils/fetch";
import { saveComment } from "../login/action";

export default function AddComment({id}) {
    const [text, setText] = useState("");

    const handleChange = (event) => {
      if (event.target.value.length <= 250) {
        setText(event.target.value);
      }
    };

  return (
    <form action={saveComment} className="add-comment">
      <h4>Add Comment</h4>
      <input type="hidden" name="postid" id="postid" value={id} />
      <textarea
        placeholder="Type your comment here"
        value={text}
        onChange={handleChange}
        name="comment"
      ></textarea>

      <div className="add-comment-footer">
        <p className="char-left">{250 - text.length} Characters left</p>
        <button className="post-button" disabled={text.length < 0}>
          Post Comment
        </button>
      </div>
    </form>
  );
}
