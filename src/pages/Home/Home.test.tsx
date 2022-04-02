import React from "react";
import { render, screen } from "../../utils/test-utils";
import { Home } from "./Home";
const navigation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => (str: string) => navigation(str),
}));

describe("Home", () => {
  it("clicking the button takes the user to the quiz", () => {
    render(<Home />);
    const button = screen.queryByTestId("start-quiz-button")!;
    button.click();
    expect(navigation).toHaveBeenCalledWith("quiz");
  });
});
