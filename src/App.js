import { Outlet } from "react-router-dom";
import "./App.css";
// import HeroList from "./components/HeroList/HeroList";
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
