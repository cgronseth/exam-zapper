import "./ExamView.css";
import { IExam } from "./IExam";
import React from "react";

interface IExamDetailsProps {
  editMode: boolean;
  exam: IExam;
  update: (exam: IExam) => void;
}

const ExamDetails: React.FC<IExamDetailsProps> = ({ exam, editMode, update }) => {
  /*const [examTitle, setExamTitle] = useState(exam.title);

  React.useEffect(() => {
    setExamTitle(exam.title);
  }, [exam.title]);
  */

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    update({
      ...exam,
      title: e.target.value
    });
  };

  return (
    <div className="exam-area">
      <div className="item-name">Title:</div>
      <div className="item-value">
        {
          !editMode &&
          <>{exam.title}</>
        }
        {
          editMode &&
          <input name="examTitle" type="text" max={255} value={exam.title} onChange={changeTitle} />
        }
      </div>

    </div>
  );
}

export default ExamDetails;