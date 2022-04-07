import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./mcqs.css";

function Mcq(props) {
  const questions = props.data;
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedId, setSelectedId] = useState(null);
  const [selected, setbgcolor] = useState("blue");

  const [disable, setDisable] = useState("disabled");
  const [darkBtn, setDarkBtn] = useState("btn-dark");
  const [classDmode, setmodeOpen] = useState();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setmodeOpen(isOpen ? "dark" : "");
    setDarkBtn(isOpen ? "btn-light" : "btn-dark");
  }, [isOpen]);

  const optionClicked = (isCorrect, id) => {
    if (selected === "blue") {
      setSelectedId(id);
      if (isCorrect) {
        setbgcolor("green");
        setScore(score + 1);
      } else {
        setbgcolor("red");
      }
      setDisable("");
    }
  };
  const Nextquestion = () => {
    setbgcolor("blue");
    setSelectedId("");
    setDisable("disabled");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className={`mcq ${classDmode}`}>
      <button
        className={`btn btnmode ${darkBtn}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Day" : "Night"} Mode
      </button>
      <h1>
        MCQ-Test ({currentQuestion + 1}-{questions.length})
      </h1>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {Math.round((score / questions.length) * 100)}%)
          </h2>
          <Button onClick={() => restartGame()}>Restart</Button>
        </div>
      ) : (
        <div>
          <h2>
            Question :
            <span data-testid="qustionid">
              {questions[currentQuestion].text}
            </span>
          </h2>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  style={{
                    backgroundColor: option.id === selectedId ? selected : "",
                  }}
                  onClick={() => optionClicked(option.isCorrect, option.id)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <Button
            className={`btn-success ${disable}`}
            onClick={() => Nextquestion()}
          >
            Next Question
          </Button>
        </div>
      )}
    </div>
  );
}
export default Mcq;
