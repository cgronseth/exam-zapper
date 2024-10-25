import "./Exam.css";
import { MenuItem } from "../menu/MenuItem";

interface IExamProps {
  item: MenuItem;
}

const Exam: React.FC<IExamProps> = ({ item }) => {

  return (
    <div className="exam">
      {item.title}
    </div>
  );
}

export default Exam;