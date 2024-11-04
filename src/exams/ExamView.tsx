import "./ExamView.css";
import { IMenuItem, MenuItem } from "../menu/MenuItem";
import ExamDetails from "./ExamDetails";
import { useState } from "react";
import { IExam } from "./IExam";

interface IExamProps {
  menuItem: IMenuItem;
}

const ExamView: React.FC<IExamProps> = ({ menuItem }) => {
  const [editMode, setEditMode] = useState(MenuItem.isEdit(menuItem));
  const [exam, setExam] = useState(getExamFromMenuItem(menuItem));

  const cancel=()=>{
    setEditMode(false);
    setExam(getExamFromMenuItem(menuItem));
  };
  const save = ()=>{
    setEditMode(false);
    // TODO: Save to file
  };

  return (
    <div className="exam">
      <ExamDetails exam={exam} editMode={editMode} update={setExam} />

      {
        !editMode &&
        <div className="view-actions">
          <button onClick={() => setEditMode(true)}>Editar</button>
        </div>
      }
      {
        editMode &&
        <div className="edit-actions">
          <button onClick={() => cancel()}>Cancelar</button>
          <button onClick={() => save()}>Guardar</button>
        </div>
      }
    </div>
  );
}

const getExamFromMenuItem = (menuItem: IMenuItem): IExam => {
  let e: IExam = {
    examId: menuItem.examId,
    title: menuItem.title
  }
  return e;
}

export default ExamView;