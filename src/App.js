import logo from "./logo.svg";
import "./App.css";
import Toolbar from "./components/Toolbar";
import TreeContainer from "./components/TreeContainer";
import FamilyTree from "./components/FamilyTree";
import PersonNode from "./components/PersonNode";
import AddPersonForm from "./components/AddPersonForm";
import PersonDetailsModal from "./components/PersonDetailsModal";

function App() {
  const familyTree = {
    name: "John Doe",
    children: [
      {
        name: "Jane Doe",
        children: [
          { name: "Jack Doe", children: [] },
          { name: "Jill Doe", children: [] },
        ],
      },
      {
        name: "Jim Doe",
        children: [],
      },
    ],
  };
  return (
    <div className="App">
      <Toolbar />
      <TreeContainer>
        <FamilyTree data={familyTree}>
          <PersonNode />
        </FamilyTree>
      </TreeContainer>
      <AddPersonForm />
      <PersonDetailsModal />
    </div>
  );
}

export default App;
