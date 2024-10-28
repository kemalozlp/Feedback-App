"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import "./add-comment.css";

export default function AddComment() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
      if (event.target.value.length <= 250) {
        setText(event.target.value);
      }
    };

  return (
    <div className="add-comment">
      <h4>Add Comment</h4>
      <textarea
        placeholder="Type your comment here"
        value={text}
        onChange={handleChange}
      ></textarea>

      <div className="add-comment-footer">
        <p className="char-left">{250 - text.length} Characters left</p>
        <button className="post-button" disabled={text.length < 0}>
          Post Comment
        </button>
      </div>
    </div>
  );
}
