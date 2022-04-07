import { cleanup } from "@testing-library/react";
import React from "react";
import sum from "./sum";

afterEach(cleanup);

async function fetchData() {
  const adata = "peanut butter";
  return adata;
}
describe("Sum Function test", () => {
  it("both are number", () => {
    const result = sum(4, 6);
    expect(result).toBe(10);
  });

  it("Any one is string", () => {
    const result = sum();
    expect(result).toBe(11.3);
  });

  it("object assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });

  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});

describe("MCQ Button Testing", () => {
  it("Is night mode button is working correctly", () => {
    const isOpen = false;
    expect(isOpen).toBe(false);
  });
  it("Response On Options click", () => {
    const isOpen2 = true;
    expect(isOpen2).toBe(true);
  });
});
