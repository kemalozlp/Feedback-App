"use client";

import { GoBack, Menu } from "@/helpers/icons";
import { useState } from "react";
import CategoryBox from "../category-box";
import RoadmapBox from "../roadmap-box";

export default function FrontendMentorBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="frontend-mentor">
      <div className="texts">
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>

      <div className="modal-buttons">
        {open ? (
          <button onClick={() => setOpen(false)}>
            <GoBack />
          </button>
        ) : (
          <button onClick={() => setOpen(true)}>
            <Menu />
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
