import React, { createContext, useState, useEffect } from "react";

export const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState([]);

  useEffect(() => {
    // Load data from family.json
    fetch("./data/family.json")
      .then((response) => response.json())
      .then((data) => setFamilyMembers(data))
      .catch((error) => console.error("Error loading family data:", error));
  }, []);

  return (
    <FamilyContext.Provider value={{ familyMembers }}>
      {children}
    </FamilyContext.Provider>
  );
};
