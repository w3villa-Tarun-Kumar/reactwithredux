import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mcq from "./component/mcq";

function App() {
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
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact="true" element={<Mcq data={questions} />}></Route>
        <Route path="*" element={<P404 />}></Route>
      </Routes>
    </div>
  );
}

export function P404() {
  return <div>Page Not Found</div>;
}

export default App;
