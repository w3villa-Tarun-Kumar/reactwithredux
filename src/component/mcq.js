import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./mcqs.css";

function Mcq() {
  const [showResults, setShowResults] = useState(false);
  const [selected, setbgcolor] = useState("blue");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [selectedId, setSelectedId] = useState(null);

  const [darkBtn, setDarkBtn] = useState("btn-dark");

  const [dmode, setmodeOpen] = useState();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setmodeOpen(isOpen ? "dark" : "");
    setDarkBtn(isOpen ? "btn-light" : "btn-dark");
  }, [isOpen]);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "How many oceans are there in the world?",
      options: [
        { id: 0, text: "7", isCorrect: false },
        { id: 1, text: "5", isCorrect: true },
        { id: 2, text: "6", isCorrect: false },
        { id: 3, text: "8", isCorrect: false },
      ],
    },
    {
      text: "what is the sum of 3 and 9",
      options: [
        { id: 0, text: "15", isCorrect: false },
        { id: 1, text: "12", isCorrect: true },
        { id: 2, text: "19", isCorrect: false },
        { id: 3, text: "39", isCorrect: false },
      ],
    },
  ];
  const optionClicked = (isCorrect, id) => {
    if (selected === "blue") {
      setSelectedId(id);
      if (isCorrect) {
        setbgcolor("green");
        setScore(score + 1);
      } else {
        setbgcolor("red");
      }
    }
  };
  const Nextquestion = () => {
    setbgcolor("blue");
    setSelectedId("");
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
    <div className={`mcq ${dmode}`}>
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
          <h2>Question :{questions[currentQuestion].text}</h2>
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
          <Button className="btn-success" onClick={() => Nextquestion()}>
            Next Question
          </Button>
        </div>
      )}
    </div>
  );
}
export default Mcq;
