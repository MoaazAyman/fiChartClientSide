import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Details from "./Details";

describe("Details component", () => {
  test("rendering the Details if the ticker is Amazon with the start and end date", () => {
    render(
      <Details ticker="AMZN" startDate="2022-01-01" endDate="2022-12-31" />
    );

    expect(
      screen.getByRole("heading", { name: "Financial Market Data of Amazon:" })
    ).toBeInTheDocument();
    expect(screen.getByText("From 2022-01-01")).toBeInTheDocument();
    expect(screen.getByText("To 2022-12-31")).toBeInTheDocument();
  });

  test("rendering the Details if the ticker is Apple with the start and end date", () => {
    render(
      <Details ticker="AAPL" startDate="2022-01-01" endDate="2022-12-31" />
    );

    expect(
      screen.getByRole("heading", { name: "Financial Market Data of Apple:" })
    ).toBeInTheDocument();
    expect(screen.getByText("From 2022-01-01")).toBeInTheDocument();
    expect(screen.getByText("To 2022-12-31")).toBeInTheDocument();
  });

  test("rendering the Details if the ticker is Microsoft with the start and end date", () => {
    render(
      <Details ticker="MSFT" startDate="2022-01-01" endDate="2022-12-31" />
    );

    expect(
      screen.getByRole("heading", {
        name: "Financial Market Data of Microsoft:",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("From 2022-01-01")).toBeInTheDocument();
    expect(screen.getByText("To 2022-12-31")).toBeInTheDocument();
  });

  test("rendering the Details if the ticker is Google with the start and end date", () => {
    render(
      <Details ticker="GOOGL" startDate="2022-01-01" endDate="2022-12-31" />
    );

    expect(
      screen.getByRole("heading", { name: "Financial Market Data of Google:" })
    ).toBeInTheDocument();
    expect(screen.getByText("From 2022-01-01")).toBeInTheDocument();
    expect(screen.getByText("To 2022-12-31")).toBeInTheDocument();
  });

  test("rendering no Details if the ticker is nothing from the tickers array", () => {
    render(
      <Details ticker="ksa" startDate="2022-01-01" endDate="2022-12-31" />
    );

    expect(
      screen.getByRole("heading", {
        name: "Ticker entered is not available",
      })
    ).toBeInTheDocument();
  });
});
