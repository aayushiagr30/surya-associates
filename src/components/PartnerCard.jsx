import React from "react";
import img4 from "../assets/4.jpg";
import img2 from "../assets/2.jpg";

const imageMap = {
  "4.jpg": img4,
  "2.jpg": img2,
};

export default function PartnerCard({ initials, name, role, text }) {
  return (
    <article className="partner-card">
      <div className="partner-mark" aria-hidden="true">
        <img src={imageMap[initials]} alt="" />
      </div>
      <div className="partner-details">
        <span className="eyebrow">{role}</span>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}
