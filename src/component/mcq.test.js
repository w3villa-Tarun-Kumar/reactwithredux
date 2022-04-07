import ReactDOM from "react-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Mcq from "./mcq";
const questions = [
  {
    text: "What come between B and D?",
    options: [
      { id: 0, text: "A", isCorrect: false },
      { id: 1, text: "C", isCorrect: true },
      { id: 2, text: "R", isCorrect: false },
      { id: 3, text: "F", isCorrect: false },
    ],
  },
];
afterEach(cleanup);

describe("MCQ rendering and question listing", () => {
  it("renders without crashing", () => {
    render(<Mcq data={questions}></Mcq>);
    const expval = screen.queryByText("Next Question").innerHTML;
    expect(expval).toBe("Next Question");
  });

  it("Question are listing", () => {
    render(<Mcq data={questions} />);
    const qvale = screen.queryByTestId("qustionid");
    expect(qvale).toHaveTextContent("What come between B and D?");
  });
});
