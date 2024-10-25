import "./Menu.css";
import { MenuItem } from "./MenuItem";

interface IMenuProps {
    items: MenuItem[];
    current: MenuItem;
    update: (menuItem: MenuItem) => void
}

const Menu: React.FC<IMenuProps> = ({ items, current, update }) => {
    const getCurrentItemClass = (item: MenuItem): string => {
        return item === current ? "selectedItem" : "";
    };

    return (
        <div className="menu">
            {
                items.map(item =>
                    <button
                        className={getCurrentItemClass(item)}
                        onClick={() => update(item)}
                    >{item.title}</button>
                )
            }
        </div>
    );
}

export default Menu;