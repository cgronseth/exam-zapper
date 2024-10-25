import "./Home.css";

interface INewTestProps {
  newTest: () => void
}

const NewTest: React.FC<INewTestProps> = ({ newTest }) => {

  return (
    <div className="area">
      <button onClick={() => newTest()}>Create new Test</button>
    </div>
  );
}

export default NewTest;