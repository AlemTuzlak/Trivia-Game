import React, { FC } from "react";
import Button from "../../../components/Button/Button";
import { decodeHtml } from "../../../helpers/decodeHtml";
import { Question, Answer } from "../../../types";

interface SingleQuestionProps {
  currentQuestion: Question;
  handleAnswerClick: (answer: Answer) => void;
}

const SingleQuestion: FC<SingleQuestionProps> = ({
  currentQuestion,
  handleAnswerClick,
}) => {
  return (
    <>
      <h1 className="main-title-small">{currentQuestion?.category}</h1>
      <hr />
      <p className="main-title-medium">
        {decodeHtml(currentQuestion?.question ?? "")}
      </p>
      <div className="buttons">
        <Button
          data-testid="false-btn"
          onClick={() => handleAnswerClick("False")}
          color="red"
          text="False"
        />
        <Button
          data-testid="true-btn"
          onClick={() => handleAnswerClick("True")}
          color="green"
          text="True"
        />
      </div>
    </>
  );
};

export { SingleQuestion };
