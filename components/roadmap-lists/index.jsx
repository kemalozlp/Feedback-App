"use client";

import React, { useState } from "react";
import { CommentsIcon, UpVoteIcon } from "@/helpers/icons";
import "./roadmap-lists.css";
import Link from "next/link";

export default function RoadmapLists({ data }) {
  const [likes, setLikes] = useState(112);
  const [liked, setLiked] = useState(false);
  const [situation, setSituation] = useState("progress");

  const plannedData = data.filter((item) => item.status === 1);
  const progressData = data.filter((item) => item.status === 2);
  const livedData = data.filter((item) => item.status === 3);
  console.log(plannedData);

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
              Planned <span>{`(${plannedData.length})`}</span>
            </h3>
            <p>Ideas prioritized for research</p>
          </div>

          {plannedData.map((x, i) => (
            <div className="roadmap-card-lists" key={i}>
              <div className="roadmap-card">
                <div className="status">
                  <p>
                    <span>●</span>Planned
                  </p>
                </div>

                <div className="card-texts">
                  <Link href={`/${1}`} className="card-detail">
                    {x.title}
                  </Link>
                  <p>{x.detail}</p>
                </div>

                <p className="card-category">{x.category}</p>

                <div className="like-and-comments">
                  <button
                    className={liked === true ? "likes select-btn" : "likes"}
                    onClick={handleLike}
                  >
                    <UpVoteIcon />
                    <p>{x.commentCount}</p>
                  </button>

                  <div className="comments">
                    <CommentsIcon />
                    <p>{x.commentCount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="in-progress">
          <div className="in-progress-texts">
            <h3>
              In-Progress <span>{`(${progressData.length})`}</span>
            </h3>
            <p>Currently being developed</p>
          </div>

          {progressData.map((x, i) => (
            <div className="roadmap-card-lists" key={i}>
              <div className="roadmap-card">
                <div className="status">
                  <p>
                    <span>●</span>In Progress
                  </p>
                </div>

                <div className="card-texts">
                  <Link href={`/${1}`} className="card-detail">
                    {x.title}
                  </Link>
                  <p>{x.detail}</p>
                </div>

                <p className="card-category">{x.category}</p>

                <div className="like-and-comments">
                  <button
                    className={liked === true ? "likes select-btn" : "likes"}
                    onClick={handleLike}
                  >
                    <UpVoteIcon />
                    <p>{x.voteCount}</p>
                  </button>

                  <div className="comments">
                    <CommentsIcon />
                    <p>{x.commentCount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="live">
          <div className="live-texts">
            <h3>
              Live <span>{`(${livedData.length})`}</span>
            </h3>
            <p>Released features</p>
          </div>

          {livedData.map((x, i) => (
            <div className="roadmap-card-lists">
              <div className="roadmap-card">
                <div className="status">
                  <p>
                    <span>●</span>Live
                  </p>
                </div>

                <div className="card-texts">
                  <Link href={`/${1}`} className="card-detail">
                    {x.title}
                  </Link>
                  <p>{x.detail}</p>
                </div>

                <p className="card-category">{x.category}</p>

                <div className="like-and-comments">
                  <button
                    className={liked === true ? "likes select-btn" : "likes"}
                    onClick={handleLike}
                  >
                    <UpVoteIcon />
                    <p>{x.voteCount}</p>
                  </button>

                  <div className="comments">
                    <CommentsIcon />
                    <p>{x.commentCount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
