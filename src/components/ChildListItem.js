/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import MemberCard from "./MemberCard";

function ChildListItem({ child, handleChildClick, expandedChildren }) {
  const imgClasses = "w-6 h-6 mr-2 rounded-full object-cover";
  console.log("child", child);

  const renderChildImage = (child) => {
    const gender = child.gender === "male" ? "boy" : "girl";
    return (
      <img
        className={imgClasses}
        src={child.image || `https://avatar.iran.liara.run/public/${gender}`}
        alt={`${child.name}'s photo`}
      />
    );
  };

  return (
    <li
      id={`child-node-${child.id}`}
      key={child.id}
      className="text-sm text-gray-600 cursor-pointer flex flex-col items-start justify-between w-full
      hover:bg-gray-100 hover:shadow-md transition-all      duration-200">
      <div
        className="flex justify-between w-full"
        onClick={() => handleChildClick(child)}>
        <div className="flex">
          {renderChildImage(child)}
          {child.name}
        </div>
        {child.children && child.children.length > 0 && (
          <span
            className="mr-0 px-2 py-1 text-xs text-white bg-blue-500 rounded-full"
            style={{ marginRight: 0 }}>
            {child.children.length}
          </span>
        )}
      </div>
      {/* Render the expanded child directly under this <li> */}
      {expandedChildren.some(
        (expandedChild) => expandedChild.id === child.id
      ) && (
        <div className="mt-2 pl-4 border-l">
          <MemberCard member={child} />
        </div>
      )}
    </li>
  );
}

export default ChildListItem;
