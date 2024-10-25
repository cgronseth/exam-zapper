import "./Home.css";
import ExistingTests from "./ExistingTests";
import NewTest from "./NewTest";
import RecentTests from "./RecentTests";

interface IHomeProps {
  newTest: () => void
}

const Home: React.FC<IHomeProps> = ({ newTest }) => {

  return (
    <div className="home">
      <RecentTests />
      <ExistingTests />
      <NewTest newTest={newTest} />
    </div>
  );
}

export default Home;