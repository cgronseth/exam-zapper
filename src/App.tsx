import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Home from "./home/Home";
import Menu from "./menu/Menu";

function App() {
  const [menuItem, setMenuItem] = useState(0);

  const updateSelectedItem = (selectedItem: number) => {
    setMenuItem(selectedItem);
  }

  return (
    <main className="container">
      <Menu update={updateSelectedItem} />
      {
        menuItem === 0 &&
        <Home />
      }
      {
        menuItem === 1 &&
        <>
          First Exam
        </>
      }
      {
        menuItem === 2 &&
        <>
          Second Exam
        </>
      }

    </main>
  );
}

export default App;
