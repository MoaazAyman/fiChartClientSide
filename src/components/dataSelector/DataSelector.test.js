import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DataSelector from "./DataSelector";

describe("DataSelector component", () => {
  test("renders DataSelector", () => {
    render(
      <DataSelector
        ticker=""
        setTicker={() => {}}
        getTickerData={() => {}}
        setTickerDataFetched={() => {}}
        startDate=""
        setStartDate={() => {}}
        endDate=""
        setEndDate={() => {}}
      />
    );

    // const mockHandler = jest.fn();

    expect(screen.getByText("Select Ticker")).toBeInTheDocument();
    expect(screen.getByLabelText(/Ticker:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start Date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/End Date:/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Fetch Ticker Data/i })
    ).toBeInTheDocument();
  });

  test("clicking the button calls the getTickerData function", () => {
    const getTickerDataMock = jest.fn();

    render(
      <DataSelector
        ticker=""
        setTicker={() => {}}
        getTickerData={getTickerDataMock}
        setTickerDataFetched={() => {}}
        startDate="2022-01-01"
        setStartDate={() => {}}
        endDate="2022-12-31"
        setEndDate={() => {}}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Fetch Ticker Data" }));

    expect(getTickerDataMock).toHaveBeenCalled();
  });
});

/*




    

  

*/
