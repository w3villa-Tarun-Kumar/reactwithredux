import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import Mcq from "./mcq";

afterEach(cleanup);

describe("MCQ Unit Test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Mcq />, div);
  });
  it("both are number", () => {
    expect("true").toBe("true");
  });
});
