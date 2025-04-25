import React from "react";
import "./MemberCard.css";

export default function MemberCard({ member }) {
  return (
    <div className="member-card">
      <h3>{member.name}</h3>
      <p>Birth Date: {member.birthDate}</p>
      {member.children && member.children.length > 0 && (
        <div className="children">
          <h4>Children:</h4>
          <ul>
            {member.children.map((child) => (
              <li key={child.id}>{child.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
