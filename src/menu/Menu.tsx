import "./Menu.css";

interface IMenuProps {
    update: (arg: number) => void
}

const Menu: React.FC<IMenuProps> = ({ update }) => {
    return (
        <div className="menu">
            <button onClick={() => update(0)}>Home</button>
            <button onClick={() => update(1)}>First Exam</button>
            <button onClick={() => update(2)}>Second Exam</button>
        </div>
    );
}

export default Menu;