import "./Home.css";
import ExistingTests from "./ExistingTests";
import NewTest from "./NewTest";
import RecentTests from "./RecentTests";

export default function Home() {

  return (
    <div className="home">
     <RecentTests />
      <ExistingTests />
      <NewTest />
    </div>
  );
}