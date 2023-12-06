import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyChart from "./MyChart";

describe("MyChart component", () => {
  test("rendering MyChart component", () => {
    const mockData = [
      {
        timestamp: "2022-01-01",
        open: 100,
        high: 110,
        low: 90,
        close: 105,
        volume: 100000,
      },
    ];

    render(<MyChart tickerDataFetched={mockData} />);

    expect(screen.getByText("Financial Market Data")).toBeInTheDocument();
  });
});
