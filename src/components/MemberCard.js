//eslint-disable react/prop-types
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import ChildListItem from "./ChildListItem";
// import "./MemberCard.css";

export default function MemberCard({ member }) {
  const [expandedChildren, setExpandedChildren] = useState([]);

  const imgClasses = "w-12 h-12 rounded-full object-cover";

  const handleChildClick = (child) => {
    // Check if the child is already expanded
    if (
      expandedChildren.some((expandedChild) => expandedChild.id === child.id)
    ) {
      console.log("Child already expanded:", child.name);
      return;
    }

    // Add the clicked child to the expandedChildren state
    setExpandedChildren((prev) => [...prev, child]);
  };

  const renderMemberImage = (newImgClasses = "") => {
    const combinedClasses = `${imgClasses} ${newImgClasses}`.trim();
    const gender = member.gender === "male" ? "boy" : "girl";
    if (member.image) {
      return (
        <img
          className={combinedClasses}
          src={member.image}
          alt={`${member.name}'s photo`}
        />
      );
    } else {
      return (
        <img
          className={combinedClasses}
          src={`https://avatar.iran.liara.run/public/${gender}`}
          alt="Default avatar"
        />
      );
    }
  };

  return (
    <div className="member-card p-4 border rounded-lg shadow-md bg-white flex flex-col items-start">
      <div className="member-info">
        <h3 className="flex items-center gap-4 text-lg font-bold text-gray-800">
          {renderMemberImage()}
          {member.name}
        </h3>
        <p className="text-sm text-gray-600">Birth Date: {member.birthDate}</p>
        <div className="flex justify-center items-center mt-2">
          {member.children && member.children.length > 0 ? (
            <div className="children mt-4">
              <h4 className="text-md font-semibold text-gray-700">Children:</h4>
              <ul className="list-disc list-inside mt-2">
                {member.children.map((child) => (
                  <ChildListItem
                    key={child.id}
                    child={child}
                    handleChildClick={handleChildClick}
                    expandedChildren={expandedChildren}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <h2 className="text-md font-semibold text-gray-700">No Children</h2>
          )}
        </div>
      </div>
    </div>
  );
}
