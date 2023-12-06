import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Container from "./Container";

describe("Container component", () => {
  test("renders DataSelector when not fetched", () => {
    render(<Container />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Select Ticker/i
    );
  });

  test("renders Details and MyChart when data is fetched", async () => {
    // Mocking the fetch function to simulate data fetching
    jest.spyOn(global, "fetch").mockImplementation(async () =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            metadata: {
              ticker: "AAPL",
              interval: "5min",
              startDate: "2023-01-01",
              endDate: "2023-01-07",
            },
            data: [
              {
                timestamp: "2023-01-01 09:30:00",
                open: "150.10",
                high: "151.20",
                low: "149.90",
                close: "150.95",
                volume: "123456",
              },
            ],
          }),
      })
    );

    render(<Container />);

    // After fetching, expect Details and MyChart to be rendered
    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        /Details/i
      );
    });
    await waitFor(() => {
      expect(screen.getByText(/Financial Market Data/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByTestId("my-chart")).toBeInTheDocument();
    });

    // Clean up the mock
    global.fetch.mockRestore();
  });
});
