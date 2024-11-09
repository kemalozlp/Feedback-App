"use client";

import { UpVoteIcon } from "@/helpers/icons";
import React, { useState } from "react";
import "./feedback-like.css";

export default function LikeButton({ postId, like }) {
  const [likes, setLikes] = useState(like);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleLike}
      className={liked === true ? "likes select-btn" : "likes"}
    >
      <UpVoteIcon />
      <p>{likes}</p>
    </button>
  );
}
