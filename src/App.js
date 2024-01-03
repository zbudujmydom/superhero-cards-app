import { Outlet } from "react-router-dom";
import "./App.css";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <Search />
      <Outlet />
    </div>
  );
}

export default App;

// to do:
// at the very beginning it 3 heroes should alraedy be generated
// each hero has name img stats
// search by characters name

// animation after clicking on the card like heartstone
