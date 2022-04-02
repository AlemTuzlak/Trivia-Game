import React from "react";
import logo from "../../assets/images/question.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  return (
    <div className="App">
      <main className="App-main">
        <img src={logo} className="App-logo mb3" alt="logo" />
        <h1 className="main-title-small mb3">
          Welcome to Brainy! Do you want to play a trivia quiz?
        </h1>
        <Button
          data-testid="start-quiz-button"
          onClick={() => navigation("quiz")}
          text="start"
          color="green"
        />
      </main>
    </div>
  );
};

export { Home };
