/**
 * <TreeContainer /> – Layout Wrapper

    Purpose: Handles layout/scrolling/zoom of the visual tree.

    Optional: Integrate with libraries like panzoom, react-d3-tree, or cytoscape.
 */
import React, { useEffect, useState } from "react";
import familyJson from "../data/family.json";
import FamilyTree from "./FamilyTree";

export default function FamilyTreeContainer() {
  const [familyData, setFamilyData] = useState([]);

  useEffect(() => {
    setFamilyData(familyJson);
  }, []);

  return (
    <div>
      <FamilyTree data={familyData} />
    </div>
  );
}
