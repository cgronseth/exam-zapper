import { useState } from "react";
import Home from "./home/Home";
import Menu from "./menu/Menu";
import { IMenuItem, MenuItemType } from "./menu/MenuItem";
import "./App.css";
import ExamView from "./exams/ExamView";
import { Guid } from "guid-typescript";

function App() {
  const initialMenu: IMenuItem[] = [
    { type: MenuItemType.Home, title: "Home" }
  ];
  const [menuItems, setMenuItems] = useState(initialMenu);
  const [currentMenuItem, setCurrentMenuItem] = useState(initialMenu[0]);

  const newTest = () => {
    let newTestItems: IMenuItem[] = menuItems;
    newTestItems.push({
      examId: Guid.create(),
      type: MenuItemType.NewTest,
      title: `New test ${menuItems.length}`
    });
    setMenuItems(newTestItems);
    setCurrentMenuItem(menuItems[menuItems.length - 1]);
  };

  const getDisplay = (mi: IMenuItem): string => {
    if (mi.type === MenuItemType.Home) {
      return currentMenuItem.type === MenuItemType.Home ? "block" : "none";
    } else {
      return mi.examId === currentMenuItem.examId ? "block" : "none";
    }
  };

  return (
    <main className="container">
      <Menu items={menuItems} current={currentMenuItem} update={setCurrentMenuItem} />

      {/*       {
        currentMenuItem.type === MenuItemType.Home &&
        <Home
          newTest={newTest}
        />
      }
      {
        currentMenuItem.type === MenuItemType.EditTest &&
        <ExamView menuItem={currentMenuItem} />
      }
      {
        currentMenuItem.type === MenuItemType.NewTest &&
        <ExamView menuItem={currentMenuItem} />
      } */}

      {
        menuItems.map(mi =>
          <div style={{ display: getDisplay(mi) }}>
            {
              mi.type === MenuItemType.Home &&
              <Home
                newTest={newTest}
              />
            }
            {
              (mi.type === MenuItemType.NewTest ||
                mi.type === MenuItemType.EditTest ||
                mi.type === MenuItemType.RunTest ||
                mi.type === MenuItemType.OpenTest) &&
              <ExamView menuItem={mi} />
            }
          </div>
        )
      }

    </main>
  );
}

export default App;