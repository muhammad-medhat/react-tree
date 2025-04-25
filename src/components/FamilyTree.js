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
import "./FamilyTree.css";

export default function FamilyTree() {
  const { familyMembers } = useContext(FamilyContext);

  return (
    <div className="family-tree">
      {familyMembers.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
