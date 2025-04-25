import logo from "./logo.svg";
import "./App.css";
import Toolbar from "./components/Toolbar";
import FamilyTreeContainer from "./components/FamilyTreeContainer";
import FamilyTree from "./components/FamilyTree";
import PersonNode from "./components/PersonNode";
import AddPersonForm from "./components/AddPersonForm";
import PersonDetailsModal from "./components/PersonDetailsModal";
import { useState } from "react";
import familyJson from "./data/family.json";

function App() {
  // const familyTree = familyJson;
  // const initialTreeData = familyTree;
  const [familyData, setFamilyData] = useState(familyJson);
  return (
    <div className="App">
      <Toolbar />
      <FamilyTreeContainer>
        <FamilyTree data={familyData}>
          <PersonNode />
        </FamilyTree>
      </FamilyTreeContainer>
      <AddPersonForm />
      <PersonDetailsModal />
    </div>
  );
}

export default App;
