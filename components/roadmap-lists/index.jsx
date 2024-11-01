"use client";

import React, { useState } from "react";
import { CommentsIcon, UpVoteIcon } from "@/helpers/icons";
import "./roadmap-lists.css";
import Link from "next/link";

export default function RoadmapLists() {
  const [likes, setLikes] = useState(112);
  const [liked, setLiked] = useState(false);
  const [situation, setSituation] = useState("progress");

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="roadmap-section">
      <div className="roadmap-navigation-mobile">
        <button
          onClick={() => setSituation("planned")}
          className={situation === "planned" ? "active" : ""}
        >
          Planned <span>2</span>
        </button>
        <button
          onClick={() => setSituation("progress")}
          className={situation === "progress" ? "active" : ""}
        >
          In-Progress <span>3</span>
        </button>
        <button
          onClick={() => setSituation("live")}
          className={situation === "live" ? "active" : ""}
        >
          Live <span>1</span>
        </button>
      </div>

      <div className="roadmap-lists">
        <div className="planned">
          <div className="planned-texts">
            <h3>
              Planned <span>{"(1)"}</span>
            </h3>
            <p>Ideas prioritized for research</p>
          </div>

          <div className="roadmap-card-lists">
            <div className="roadmap-card">
              <div className="status">
                <p>
                  <span>●</span>Planned
                </p>
              </div>

              <div className="card-texts">
                <Link href={`/${1}`} className="card-detail">
                  More comprehensive reports
                </Link>
                <p>
                  It would be great to see a more detailed breakdown of
                  solutions.
                </p>
              </div>

              <p className="card-category">Feature</p>

              <div className="like-and-comments">
                <button
                  className={liked === true ? "likes select-btn" : "likes"}
                  onClick={handleLike}
                >
                  <UpVoteIcon />
                  <p>{likes}</p>
                </button>

                <div className="comments">
                  <CommentsIcon />
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="in-progress">
          <div className="in-progress-texts">
            <h3>
              In-Progress <span>{"(2)"}</span>
            </h3>
            <p>Currently being developed</p>
          </div>

          <div className="roadmap-card-lists">
            <div className="roadmap-card">
              <div className="status">
                <p>
                  <span>●</span>In Progress
                </p>
              </div>

              <div className="card-texts">
                <Link href={`/${1}`} className="card-detail">
                  One-click portfolio generation
                </Link>
                <p>
                  Add ability to create professional looking portfolio from
                  profile.
                </p>
              </div>

              <p className="card-category">Feature</p>

              <div className="like-and-comments">
                <button
                  className={liked === true ? "likes select-btn" : "likes"}
                  onClick={handleLike}
                >
                  <UpVoteIcon />
                  <p>{likes}</p>
                </button>

                <div className="comments">
                  <CommentsIcon />
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="roadmap-card-lists">
            <div className="roadmap-card">
              <div className="status">
                <p>
                  <span>●</span>In Progress
                </p>
              </div>

              <div className="card-texts">
                <Link href={`/${1}`} className="card-detail">
                  One-click portfolio generation
                </Link>
                <p>
                  Add ability to create professional looking portfolio from
                  profile.
                </p>
              </div>

              <p className="card-category">Feature</p>

              <div className="like-and-comments">
                <button
                  className={liked === true ? "likes select-btn" : "likes"}
                  onClick={handleLike}
                >
                  <UpVoteIcon />
                  <p>{likes}</p>
                </button>

                <div className="comments">
                  <CommentsIcon />
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="live">
          <div className="live-texts">
            <h3>
              Live <span>{"(1)"}</span>
            </h3>
            <p>Released features</p>
          </div>

          <div className="roadmap-card-lists">
            <div className="roadmap-card">
              <div className="status">
                <p>
                  <span>●</span>Live
                </p>
              </div>

              <div className="card-texts">
                <Link href={`/${1}`} className="card-detail">
                  Add micro-interactions
                </Link>
                <p>Small animations at specific points can add delight.</p>
              </div>

              <p className="card-category">Feature</p>

              <div className="like-and-comments">
                <button
                  className={liked === true ? "likes select-btn" : "likes"}
                  onClick={handleLike}
                >
                  <UpVoteIcon />
                  <p>{likes}</p>
                </button>

                <div className="comments">
                  <CommentsIcon />
                  <p>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
