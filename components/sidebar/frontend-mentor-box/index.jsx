"use client";

import { GoBackIcon, MenuIcon } from "@/helpers/icons";
import { useState } from "react";
import CategoryBox from "../category-box";
import RoadmapBox from "../roadmap-box";
import Link from "next/link";

export default function FrontendMentorBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="frontend-mentor">
      <div className="texts">
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
        <Link className="login" href={"/login"}>Login</Link>
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
          <CategoryBox />
          <RoadmapBox />
        </div>
      </div>
    </div>
  );
}
