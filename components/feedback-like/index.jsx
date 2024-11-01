"use client";

import { UpVoteIcon } from "@/helpers/icons";
import "./feedback-like.css";
import React, { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(112);
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
