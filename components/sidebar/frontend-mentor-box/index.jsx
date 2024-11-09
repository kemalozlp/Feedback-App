"use client";

import { GoBackIcon, MenuIcon } from "@/helpers/icons";
import { useState } from "react";
import CategoryBox from "../category-box";
import RoadmapBox from "../roadmap-box";
import Link from "next/link";

export default function FrontendMentorBox({categories, plannedData, progressData, liveData}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="frontend-mentor">
      <Link className="login" href={"/login"}>
        Login
      </Link>

      {/* <Link className="login" href={"/login"}>
        Logout
      </Link> */}

      <div className="texts">
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>

      <div className="modal-buttons">
        {open ? (
          <button onClick={() => setOpen(false)}>
            <GoBackIcon />
          </button>
        ) : (
          <button onClick={() => setOpen(true)}>
            <MenuIcon />
          </button>
        )}
      </div>

      <div
        className={open ? "dialog active" : "dialog"}
        style={{ width: open ? "100%" : "0%" }}
      >
        <div className="dialog-content">
          <CategoryBox categories={categories} />
          <RoadmapBox plannedData={plannedData} progressData={progressData} liveData={liveData} />

          <Link className="login" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
