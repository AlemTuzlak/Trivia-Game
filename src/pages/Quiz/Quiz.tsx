import React, { useState } from "react";
import { useQuery } from "react-query";
import QuizApi from "../../api/QuizApi";
import loader from "../../assets/animations/loader.svg";
import { FinalResults } from "./FinalResults";
import { Answer } from "../../types";
import { SingleQuestion } from "./SingleQuestion";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Quiz = () => {
  const navigation = useNavigate();
  const [question, setQuestion] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const { data, isFetching, refetch } = useQuery(
    ["quiz"],
    () => QuizApi.getInstance().getQuizQuestions(),
    {
      onError: () => {
        navigation("/");
        alert("Something went wrong. Please try again later.");
      },
    }
  );

  const questions = data?.data?.results ?? [];
  const currentQuestion = questions[question - 1];
  const quizOngoing = question <= 10;

  const handleAnswerClick = (answer: Answer) => {
    setAnswers([...answers, answer]);
    setQuestion(question + 1);
  };
  const playAgain = () => {
    setAnswers([]);
    setQuestion(1);
    refetch();
  };

  return (
    <div className="App">
      <main className="App-main">
        <div className={`card ${!quizOngoing ? "card-done" : ""}`}>
          {isFetching ? (
            <p className="loader">
              <img src={loader} />
              Setting the quiz up for you...
            </p>
          ) : (
            <>
              {quizOngoing ? (
                <>
                  <SingleQuestion
                    currentQuestion={currentQuestion}
                    handleAnswerClick={handleAnswerClick}
                  />
                  <ProgressBar
                    className="bottom"
                    progressString={`${question}/10`}
                    width={question * 10}
                    size="large"
                  />
                </>
              ) : (
                <FinalResults
                  playAgain={playAgain}
                  questions={questions}
                  answers={answers}
                />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export { Quiz };
