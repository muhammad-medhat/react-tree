import React from "react";
// import "./MemberCard.css";
export default function MemberCard({ member }) {
  const handleChildClick = (child) => {
    console.log("Child clicked:", child.name);
  };
  return (
    <div className="member-card p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
      <p className="text-sm text-gray-600">Birth Date: {member.birthDate}</p>
      {member.children && member.children.length > 0 && (
        <div className="children mt-4">
          <h4 className="text-md font-semibold text-gray-700">Children:</h4>
          <ul className="list-disc list-inside mt-2">
            {member.children.map((child) => (
              <li
                key={child.id}
                className="text-sm text-gray-600"
                onClick={() => handleChildClick(child)}>
                {child.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
