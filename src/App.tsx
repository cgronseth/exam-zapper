import { useState } from "react";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import { MenuItem, MenuItemType } from "./menu/MenuItem";
import Exam from "./exams/Exam";
import "./App.css";

function App() {
  const initialMenu: MenuItem[] = [
    { type: MenuItemType.Home, title: "Home" }
  ];
  const [menuItems, setMenuItems] = useState(initialMenu);
  const [currentMenuItem, setCurrentMenuItem] = useState(initialMenu[0]);

  const newTest = () => {
    let newTestItems: MenuItem[] = menuItems;
    newTestItems.push({
      type: MenuItemType.NewTest,
      title: `New test ${menuItems.length}`
    });
    setMenuItems(newTestItems);
    setCurrentMenuItem(menuItems[menuItems.length - 1]);
  };

  return (
    <main className="container">
      <Menu items={menuItems} current={currentMenuItem} update={setCurrentMenuItem} />

      {
        currentMenuItem.type === MenuItemType.Home &&
        <Home
          newTest={newTest}
        />
      }
      {
        currentMenuItem.type === MenuItemType.EditTest &&
        <Exam item={currentMenuItem} />
      }
      {
        currentMenuItem.type === MenuItemType.NewTest &&
        <Exam item={currentMenuItem} />
      }

    </main>
  );
}

export default App;
