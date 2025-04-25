/**
 * Purpose: Displays the entire tree.
 * Responsibilities:
 *   - Render each person node.
 *   - Connect family members visually.
 *   - Use recursive rendering or a tree layout library (e.g., react-d3-tree, react-family-tree).
 */
import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";
import MemberCard from "./MemberCard";
// import "./FamilyTree.css";

export default function FamilyTree() {
  const { familyMembers } = useContext(FamilyContext);
  console.log("familyMembers", familyMembers);

  return (
    <div className="family-tree flex flex-wrap justify-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {familyMembers.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
