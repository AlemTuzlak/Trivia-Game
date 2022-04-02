import React from "react";
import { results } from "../../utils/responseMock";
import { render, screen, waitFor } from "../../utils/test-utils";
import { Quiz } from "./Quiz";

const navigation = jest.fn();

jest.mock("../../api/QuizApi", () => ({
  getInstance: jest.fn().mockReturnValue({
    getQuizQuestions: jest
      .fn()
      .mockRejectedValueOnce({ error: "" })
      .mockResolvedValue({
        data: {
          results,
        },
      }),
  }),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => (str: string) => navigation(str),
}));

describe("Quiz", () => {
  it("gets an error and navigates to landing page when fetching fails", async () => {
    render(<Quiz />);
    await waitFor(() => {
      expect(navigation).toHaveBeenCalledWith("/");
    });
  });
  it("answering the questions 10 times shows you the results screen", async () => {
    render(<Quiz />);
    await waitFor(() => {
      const btn = screen.queryByTestId("true-btn")!;
      const btn2 = screen.queryByTestId("false-btn")!;
      btn2.click();
      for (let i = 0; i < 9; i++) {
        btn.click();
      }
    });
    const answersTitle = screen.queryByTestId("score-answers")!;
    expect(answersTitle).toBeInTheDocument();
  });
  it("answering the questions 10 times shows you the right score", async () => {
    render(<Quiz />);
    await waitFor(() => {
      const btn = screen.queryByTestId("true-btn")!;
      for (let i = 0; i < 10; i++) {
        btn.click();
      }
    });
    const answersTitle = screen.queryByTestId("score-answers")!;
    expect(answersTitle).toHaveTextContent("You scored 6 out of 10");
  });

  it("answering the questions 10 times then clicking show results shows you the results", async () => {
    render(<Quiz />);
    await waitFor(() => {
      const btn = screen.queryByTestId("true-btn")!;
      for (let i = 0; i < 10; i++) {
        btn.click();
      }
    });
    const showResults = screen.queryByTestId("show-results")!;
    showResults.click();
    const FinalResultsWrapper = screen.queryByTestId("final-results");
    expect(FinalResultsWrapper).toBeInTheDocument();
  });

  it("after seeing the results and clicking end quiz takes the user to the landing page", async () => {
    render(<Quiz />);
    await waitFor(() => {
      const btn = screen.queryByTestId("true-btn")!;
      for (let i = 0; i < 10; i++) {
        btn.click();
      }
    });
    const showResults = screen.queryByTestId("show-results")!;
    showResults.click();
    const endQuizBtn = screen.queryByTestId("end-quiz")!;
    endQuizBtn.click();
    expect(navigation).toHaveBeenCalledWith("/");
  });
  it("after seeing the results and clicking play again restarts the quiz", async () => {
    render(<Quiz />);
    await waitFor(() => {
      const btn = screen.queryByTestId("true-btn")!;
      for (let i = 0; i < 10; i++) {
        btn.click();
      }
    });
    const showResults = screen.queryByTestId("show-results")!;
    showResults.click();
    const playAgainBtn = screen.queryByTestId("play-again")!;
    playAgainBtn.click();
    await waitFor(() => {
      const falseBtn = screen.queryByTestId("false-btn")!;
      expect(falseBtn).toBeInTheDocument();
    });
  });
});
