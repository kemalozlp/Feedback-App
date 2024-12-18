"use client"

import Link from "next/link";

export default function RoadmapBox({plannedData, progressData, liveData}) {
  return (
    <div className="roadmap-box">
      <div className="roadmap-title">
        <h3>Roadmap</h3>
        <Link href="/roadmap">view</Link>
      </div>

      <ul className="roadmap-list">
        <li className="planned-box">
          <span>●</span>
          <p>Planned</p>
          <span>{plannedData}</span>
        </li>

        <li className="in-progress-box">
          <span>●</span>
          <p>In-Progress</p>
          <span>{progressData}</span>
        </li>

        <li className="live-box">
          <span>●</span>
          <p>Live</p>
          <span>{liveData}</span>
        </li>
      </ul>
    </div>
  );
}
